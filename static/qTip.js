(function() {
	function Tip( setting ) {
		if(!(this instanceof Tip)) {
			return new Tip( setting  );
		};
	
		this.el = setting.el;
		this.defaults = {
			tip : "错误",
			times : false,
			position : "left",
			distance : {
				x : 0,
				y : 0	
			}
		};
		$.extend( true, this.defaults , setting );
		this.initTip();
	};
	Tip.prototype = {
		contructor : Tip,
		initTip : function() {
			var _this = this;
			this.wrap = $("<div>");
			this.wrap.html( this.getContent().replace(/<% this.tip %>/gi,this.defaults.tip) );
			this.defaults.type ? function(){
				_this.show();
				_this.hide();
				if(_this.defaults.type == "hover" ) {
					$(_this.el).on("mouseenter",function() {
						if(!_this.defaults.hoverFn)
							return 	_this._show();
							
						if( _this.defaults.hoverFn.call(_this.el) ) {
							_this._show();
						}else{
							_this.hide();
						};
					});
					$(_this.el).bind("mouseleave",function() {
						_this.hide();
					});
				}else if( _this.defaults.type == "click" ) {
					$(_this.el).bind("click",function() {
						
						if(_this.defaults.clickFn) {
							//_this.defaults.hoverFn.call(_this) == true ? (alert(1),_this._show()) : null;
							if( _this.defaults.clickFn.call(_this) ) {
								_this._show();
							}else{
								_this.hide();
							};
						}else{
							$(_this.div).toggle();
						};
						
					})
				};
			}() : this.show();
		},
		_show : function() {
			$(this.div).show();
		},
		getContent : function() {
			return '<div class="smallTip-body"> \
				<div class="samllTip-wraper"> \
					<div class="smallTip-arrow-left"></div> \
					<div class="smallTip-arrow-top"></div> \
					<div class="smallTip-arrow-right"></div> \
					<div class="smallTip-arrow-bottom"></div> \
					<div class="smallTip-inner blue"> \
						<div class="smallTip-content blue"> \
							<p class="blue"><% this.tip %></p> \
						</div> \
					</div> \
				</div> \
			</div>';
		},
		show : function() {
			var _this = this;
			$(this.el).addClass("samllTip-parent");
			this.div = $(".smallTip-body",this.wrap[0]);
			$(this.el).append( this.div );
			this.defaults.times&&this.timeout();
			this.defaults.position&&this.position();
			this.el.tip = this;
		},
		hide : function() {
			$(this.div).hide();
		},
		position : function() {
			var _this = this;
			var position = {
				"left" : "right",
				"right" : "left",
				"bottom" : "top",
				"top" : "bottom"
			};
			$(".smallTip-arrow-"+ position[ this.defaults.position ],this.div).css("display","block");
			function ifNaNreturn0( arg ) {
				return isNaN(arg) ? 0 : arg;
			};
			switch( this.defaults.position ) {
				case "left" :
					this.div.css( "top",(parseInt( ifNaNreturn0($(this.el.css("height") )) - 16) /2  + this.defaults.distance.y));
					this.div.css("left",parseInt( -parseInt( ifNaNreturn0($(this.div).css("width") )) -4 + this.defaults.distance.x ));
				break;
				case "top" :
					this.div.css( "top",-parseInt( parseInt(ifNaNreturn0($(this.div).css("height") )) +12 + this.defaults.distance.y ));
					this.div.css("left",parseInt( parseInt( ifNaNreturn0($(this.div).css("width") ))/2 + this.defaults.distance.x  ));
				break;
				case "right" :
					this.div.css( "top",(parseInt( ifNaNreturn0($(this.el).css("height") )) - 16) /2  + this.defaults.distance.y);
					this.div.css("left",parseInt( parseInt( ifNaNreturn0($(this.el).css("width")) )+10+ this.defaults.distance.x  ));
				break;
				case "bottom" :
					this.div.css("left", parseInt( parseInt( ifNaNreturn0($(this.el).css("width") ))/2 - 30  + this.defaults.distance.x));
					this.div.css("top", this.defaults.distance.y  );
				break;
			};
		},
		timeout : function() {
			var _this = this;
			setTimeout(function() {
				$(_this.div).hide();
			},2000);
		}
	};
	
	$.fn.tip = function( setting ) {
		$(this).each(function(i, e) {
			setting = setting || {};
			setting.el = this;
			new Tip( setting );
		})
	};
	
})();