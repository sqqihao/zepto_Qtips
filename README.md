# zepto_Qtips
###因为zepto的提示插件根本就没有啊, 都是jQuery的提示插件,  没找到插件自己写吧;


## Usage
```

    /*
     *   @desc 因为zepto的提示插件根本就没有啊, 都是jQuery的提示插件, 太坑爹了, 还要自己写;
     *
     *   @param tip string 要提示的内容
     *   @param position string "top" "left" “right" "bottom" 要展示的位置
     *   @param times int 默认显示的时间
     *   @param distance int x轴要移动的距离, int y轴要移动的距离
     *   @param type string "hover" or "click" 在元素hover或者是元素click的时候显示隐藏, 戳demo
     *   @param "hoveFn" function [true, false] 在type为"hover"的时候如果hoverFn如果返回true就显示, 返回false就隐藏;
     *   @param "clickFn" 跟上面一样, 戳demo;
     *
     * */
     
     
```



	###　ＪＳ代码哇

```
	/*
		默认显示两秒钟
	*/
	$('#tip').tip({
		tip : "一次只能上传一种附件",
		position : "bottom",
		times : 2000,
		distance : {
			x : 0,
			y : 40	
		} //调整距离的说， x轴和y轴偏移的距离;
	});
	
	
	/*
		鼠标进来的时候显示，移动出去的时候消失
	*/
	$('#tip1').tip({
		tip : "一次只能上传一种附件",
		position : "bottom",
		type : "hover",
		distance : {
			x : 0,
			y : 40	
		} //调整距离的说， x轴和y轴的距离;
	});
	
	//鼠标click的时候显示，在click的时候消失， 重复隐藏和显示
	$('#tip2').tip({
		tip : "一次只能上传一种附件",
		position : "right",
		type : "click",
		distance : {
			x : 40,
			y : 0	
		} //调整距离的说， x轴和y轴的距离;
	});
	
	//鼠标click的时候如果点击的回调click返回true就显示，回调返回false就消失
	$('#tip3').tip({
		tip : "一次只能上传一种附件",
		position : "bottom",
		type : "click",
		clickFn : function() {
			var result = confirm("是否显示?")
			return result;
		},
		distance : {
			x : 40,
			y : 40	
		} //调整距离的说， x轴和y轴的距离;
	});
	
	
	//鼠标移入的时候回调hoverFn返回ture就显示，返回false就消失;
	$('#tip4').tip({
		tip : "一次只能上传一种附件",
		position : "bottom",
		type : "hover",
		hoverFn : function() {
			return true;
			return false;
		},
		distance : {
			x : 0,
			y : 40	
		} //调整距离的说， x轴和y轴的距离;
	});
```
	
