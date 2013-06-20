// http://patik.com/blog/complete-cross-browser-console-log/
if(Function.prototype.bind&&(typeof console=="object"||typeof console=="function")&&typeof console.log=="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(method){console[method]=this.call(console[method],console);},Function.prototype.bind);}
if(!window.log){window.log=function(){log.history=log.history||[];log.history.push(arguments);if(typeof console!='undefined'&&typeof console.log=='function'){if(window.opera){var i=0;while(i<arguments.length){console.log("Item "+(i+1)+": "+arguments[i]);i++;}}
else if((Array.prototype.slice.call(arguments)).length==1&&typeof Array.prototype.slice.call(arguments)[0]=='string'){console.log((Array.prototype.slice.call(arguments)).toString());}
else{console.log(Array.prototype.slice.call(arguments));}}
else if(!Function.prototype.bind&&typeof console!='undefined'&&typeof console.log=='object'){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments));}
else{if(!document.getElementById('firebug-lite')){var script=document.createElement('script');script.type="text/javascript";script.id='firebug-lite';script.src='https://getfirebug.com/firebug-lite.js';document.getElementsByTagName('HEAD')[0].appendChild(script);setTimeout(function(){log(Array.prototype.slice.call(arguments));},2000);}
else{setTimeout(function(){log(Array.prototype.slice.call(arguments));},500);}}}}

/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

/*! http://github.com/mattkersley/Responsive-Menu by Matt Kersley */
(function(a){function f(a){document.location.href=a}function g(){return a(".mnav").length?!0:!1}function h(b){var c=!0;b.each(function(){if(!a(this).is("ul")&&!a(this).is("ol")){c=!1;}});return c}function i(){return a(window).width()<b.switchWidth}function j(b){return a.trim(b.clone().children("ul, ol").remove().end().text())}function k(b){return a.inArray(b,e)===-1?!0:!1}function l(b){b.find(" > li").each(function(){var c=a(this),d=c.find("a").attr("href"),f=function(){return c.parent().parent().is("li")?c.parent().parent().find("a").attr("href"):null};c.find(" ul, ol").length&&l(c.find("> ul, > ol"));c.find(" > ul li, > ol li").length||c.find("ul, ol").remove();!k(f(),e)&&k(d,e)?c.appendTo(b.closest("ul#mmnav").find("li:has(a[href="+f()+"]):first ul")):k(d)?e.push(d):c.remove()})}function m(){var b=a('<ul id="mmnav" />');c.each(function(){a(this).children().clone().appendTo(b)});l(b);return b}function n(b,c,d){d?a('<option value="'+b.find("a:first").attr("href")+'">'+d+"</option>").appendTo(c):a('<option value="'+b.find("a:first").attr("href")+'">'+a.trim(j(b))+"</option>").appendTo(c)}function o(c,d){var e=a('<optgroup label="'+a.trim(j(c))+'" />');n(c,e,b.groupPageText);c.children("ul, ol").each(function(){a(this).children("li").each(function(){n(a(this),e)})});e.appendTo(d)}function p(c){var e=a('<select id="mm'+d+'" class="mnav" />');d++;b.topOptionText&&n(a("<li>"+b.topOptionText+"</li>"),e);c.children("li").each(function(){var c=a(this);c.children("ul, ol").length&&b.nested?o(c,e):n(c,e)});e.change(function(){f(a(this).val())}).prependTo(b.prependTo)}function q(){if(i()&&!g())if(b.combine){var d=m();p(d)}else c.each(function(){p(a(this))});if(i()&&g()){a(".mnav").show();c.hide()}if(!i()&&g()){a(".mnav").hide();c.show()}}var b={combine:!0,groupPageText:"Main",nested:!0,prependTo:"body",switchWidth:480,topOptionText:"Select a page"},c,d=0,e=[];a.fn.mobileMenu=function(d){d&&a.extend(b,d);if(h(a(this))){c=a(this);q();a(window).resize(function(){q()})}else alert("mobileMenu only works with <ul>/<ol>")}})(jQuery);

/* Autogrow https://github.com/jaz303/jquery-grab-bag/blob/master/javascripts/jquery.autogrow-textarea.js*/
(function(a){a.fn.autogrow=function(b){this.filter("textarea").each(function(){var b=a(this),c=b.height(),d=b.css("lineHeight");var e=a("<div></div>").css({position:"absolute",top:-1e4,left:-1e4,width:a(this).width()-parseInt(b.css("paddingLeft"))-parseInt(b.css("paddingRight")),fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily"),lineHeight:b.css("lineHeight"),resize:"none"}).appendTo(document.body);var f=function(){var b=function(a,b){for(var c=0,d="";c<b;c++)d+=a;return d};var d=this.value.replace(/</g,"<").replace(/>/g,">").replace(/&/g,"&").replace(/\n$/,"<br/> ").replace(/\n/g,"<br/>").replace(/ {2,}/g,function(a){return b(" ",a.length-1)+" "});e.html(d);a(this).css("height",Math.max(e.height()+20,c))};a(this).change(f).keyup(f).keydown(f);f.apply(this)});return this}})(jQuery);

/*! jQuery Smooth Scroll Plugin v1.4.2 by Karl Swedberg */
(function(b){function l(c){return c.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}function m(c){return c.replace(/(:|\.)/g,"\\$1")}var n=l(location.pathname),o=function(c){var e=[],a=false,d=c.dir&&c.dir=="left"?"scrollLeft":"scrollTop";this.each(function(){if(!(this==document||this==window)){var f=b(this);if(f[d]()>0)e.push(this);else{f[d](1);a=f[d]()>0;f[d](0);a&&e.push(this)}}});if(c.el==="first"&&e.length)e=[e.shift()];return e},p="ontouchend"in document;b.fn.extend({scrollable:function(c){return this.pushStack(o.call(this,
{dir:c}))},firstScrollable:function(c){return this.pushStack(o.call(this,{el:"first",dir:c}))},smoothScroll:function(c){c=c||{};var e=b.extend({},b.fn.smoothScroll.defaults,c);this.die("click.smoothscroll").live("click.smoothscroll",function(a){var d={},f=b(this),h=location.hostname===this.hostname||!this.hostname,g=e.scrollTarget||(l(this.pathname)||n)===n,j=m(this.hash),i=true;if(!e.scrollTarget&&(!h||!g||!j))i=false;else{h=e.exclude;g=0;for(var k=h.length;i&&g<k;)if(f.is(m(h[g++])))i=false;h=e.excludeWithin;
g=0;for(k=h.length;i&&g<k;)if(f.closest(h[g++]).length)i=false}if(i){a.preventDefault();b.extend(d,e,{scrollTarget:e.scrollTarget||j,link:this});b.smoothScroll(d)}});return this}});b.smoothScroll=function(c,e){var a,d,f,h=0;d="offset";var g="scrollTop",j={},i=false;f=[];if(typeof c==="number"){a=b.fn.smoothScroll.defaults;f=c}else{a=b.extend({},b.fn.smoothScroll.defaults,c||{});if(a.scrollElement){d="position";a.scrollElement.css("position")=="static"&&a.scrollElement.css("position","relative")}f=
e||b(a.scrollTarget)[d]()&&b(a.scrollTarget)[d]()[a.direction]||0}a=b.extend({link:null},a);g=a.direction=="left"?"scrollLeft":g;if(a.scrollElement){d=a.scrollElement;h=d[g]()}else{d=b("html, body").firstScrollable();i=p&&"scrollTo"in window}j[g]=f+h+a.offset;b.isFunction(a.beforeScroll)&&a.beforeScroll.call(d,a);if(i){f=a.direction=="left"?[j[g],0]:[0,j[g]];window.scrollTo.apply(window,f)}else d.animate(j,{duration:a.speed,easing:a.easing,complete:function(){a.afterScroll&&b.isFunction(a.afterScroll)&&
a.afterScroll.call(a.link,a)}})};b.smoothScroll.version="1.4.2";b.fn.smoothScroll.defaults={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:null,afterScroll:null,easing:"swing",speed:400}})(jQuery);

/*! http://www.zurb.com/playground/jquery-text-change-custom-event by ZURB */
(function(a){a.event.special.textchange={setup:function(){a(this).data("lastValue",this.contentEditable==="true"?a(this).html():a(this).val());a(this).bind("keyup.textchange",a.event.special.textchange.handler);a(this).bind("cut.textchange paste.textchange input.textchange",a.event.special.textchange.delayedHandler)},teardown:function(){a(this).unbind(".textchange")},handler:function(){a.event.special.textchange.triggerIfChanged(a(this))},delayedHandler:function(){var b=a(this);setTimeout(function(){a.event.special.textchange.triggerIfChanged(b)},25)},triggerIfChanged:function(a){var b=a[0].contentEditable==="true"?a.html():a.val();b!==a.data("lastValue")&&(a.trigger("textchange",[a.data("lastValue")]),a.data("lastValue",b))}};a.event.special.hastext={setup:function(){a(this).bind("textchange",a.event.special.hastext.handler)},teardown:function(){a(this).unbind("textchange",a.event.special.hastext.handler)},handler:function(b,c){c===""&&c!==a(this).val()&&a(this).trigger("hastext")}};a.event.special.notext={setup:function(){a(this).bind("textchange",a.event.special.notext.handler)},teardown:function(){a(this).unbind("textchange",a.event.special.notext.handler)},handler:function(b,c){a(this).val()===""&&a(this).val()!==c&&a(this).trigger("notext")}}})(jQuery);

/*! jQuery Orbit Plugin 1.4.0 by ZURB */
(function(a){a.fn.findFirstImage=function(){return this.first().find("img").andSelf().filter("img").first()};var b={defaults:{animation:"horizontal-push",animationSpeed:600,timer:true,advanceSpeed:4e3,pauseOnHover:true,startClockOnMouseOut:true,startClockOnMouseOutAfter:1e3,directionalNav:true,directionalNavRightText:"Right",directionalNavLeftText:"Left",captions:false,captionAnimation:"fade",captionAnimationSpeed:600,bullets:false,bulletThumbs:false,bulletThumbLocation:"",afterSlideChange:a.noop,fluid:true,centerBullets:true},activeSlide:0,numberSlides:0,orbitWidth:null,orbitHeight:null,locked:null,timerRunning:null,degrees:0,wrapperHTML:'<div class="orbit-wrapper" />',timerHTML:'<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',captionHTML:'<div class="orbit-caption"></div>',directionalNavHTML:'<div class="slider-nav"><span class="right"></span><span class="left"></span></div>',bulletHTML:'<ul class="orbit-bullets"></ul>',init:function(b,c){var d,e=0,f=this;this.clickTimer=a.proxy(this.clickTimer,this);this.addBullet=a.proxy(this.addBullet,this);this.resetAndUnlock=a.proxy(this.resetAndUnlock,this);this.stopClock=a.proxy(this.stopClock,this);this.startTimerAfterMouseLeave=a.proxy(this.startTimerAfterMouseLeave,this);this.clearClockMouseLeaveTimer=a.proxy(this.clearClockMouseLeaveTimer,this);this.rotateTimer=a.proxy(this.rotateTimer,this);this.options=a.extend({},this.defaults,c);if(this.options.timer==="false")this.options.timer=false;if(this.options.captions==="false")this.options.captions=false;if(this.options.directionalNav==="false")this.options.directionalNav=false;this.$element=a(b);this.$wrapper=this.$element.wrap(this.wrapperHTML).parent();this.$slides=this.$element.children("img, a, div");this.$element.bind("orbit.next",function(){f.shift("next")});this.$element.bind("orbit.prev",function(){f.shift("prev")});this.$element.bind("orbit.goto",function(a,b){f.shift(b)});this.$element.bind("orbit.start",function(a,b){f.startClock()});this.$element.bind("orbit.stop",function(a,b){f.stopClock()});d=this.$slides.filter("img");if(d.length===0){this.loaded()}else{d.bind("imageready",function(){e+=1;if(e===d.length){f.loaded()}})}},loaded:function(){this.$element.addClass("orbit").css({width:"1px",height:"1px"});this.$slides.addClass("orbit-slide");this.setDimentionsFromLargestSlide();this.updateOptionsIfOnlyOneSlide();this.setupFirstSlide();if(this.options.timer){this.setupTimer();this.startClock()}if(this.options.captions){this.setupCaptions()}if(this.options.directionalNav){this.setupDirectionalNav()}if(this.options.bullets){this.setupBulletNav();this.setActiveBullet()}},currentSlide:function(){return this.$slides.eq(this.activeSlide)},setDimentionsFromLargestSlide:function(){var b=this,c;b.$element.add(b.$wrapper).width(this.$slides.first().width());b.$element.add(b.$wrapper).height(this.$slides.first().height());b.orbitWidth=this.$slides.first().width();b.orbitHeight=this.$slides.first().height();c=this.$slides.first().findFirstImage().clone();this.$slides.each(function(){var d=a(this),e=d.width(),f=d.height();if(e>b.$element.width()){b.$element.add(b.$wrapper).width(e);b.orbitWidth=b.$element.width()}if(f>b.$element.height()){b.$element.add(b.$wrapper).height(f);b.orbitHeight=b.$element.height();c=a(this).findFirstImage().clone()}b.numberSlides+=1});if(this.options.fluid){if(typeof this.options.fluid==="string"){c=a('<img src="http://placehold.it/'+this.options.fluid+'" />')}b.$element.prepend(c);c.addClass("fluid-placeholder");b.$element.add(b.$wrapper).css({width:"inherit"});b.$element.add(b.$wrapper).css({height:"inherit"});a(window).bind("resize",function(){b.orbitWidth=b.$element.width();b.orbitHeight=b.$element.height()})}},lock:function(){this.locked=true},unlock:function(){this.locked=false},updateOptionsIfOnlyOneSlide:function(){if(this.$slides.length===1){this.options.directionalNav=false;this.options.timer=false;this.options.bullets=false}},setupFirstSlide:function(){var a=this;this.$slides.first().css({"z-index":3}).fadeIn(function(){a.$slides.css({display:"block"})})},startClock:function(){var a=this;if(!this.options.timer){return false}if(this.$timer.is(":hidden")){this.clock=setInterval(function(){a.$element.trigger("orbit.next")},this.options.advanceSpeed)}else{this.timerRunning=true;this.$pause.removeClass("active");this.clock=setInterval(this.rotateTimer,this.options.advanceSpeed/180)}},rotateTimer:function(){var a="rotate("+this.degrees+"deg)";this.degrees+=2;this.$rotator.css({"-webkit-transform":a,"-moz-transform":a,"-o-transform":a});if(this.degrees>180){this.$rotator.addClass("move");this.$mask.addClass("move")}if(this.degrees>360){this.$rotator.removeClass("move");this.$mask.removeClass("move");this.degrees=0;this.$element.trigger("orbit.next")}},stopClock:function(){if(!this.options.timer){return false}else{this.timerRunning=false;clearInterval(this.clock);this.$pause.addClass("active")}},setupTimer:function(){this.$timer=a(this.timerHTML);this.$wrapper.append(this.$timer);this.$rotator=this.$timer.find(".rotator");this.$mask=this.$timer.find(".mask");this.$pause=this.$timer.find(".pause");this.$timer.click(this.clickTimer);if(this.options.startClockOnMouseOut){this.$wrapper.mouseleave(this.startTimerAfterMouseLeave);this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer)}if(this.options.pauseOnHover){this.$wrapper.mouseenter(this.stopClock)}},startTimerAfterMouseLeave:function(){var a=this;this.outTimer=setTimeout(function(){if(!a.timerRunning){a.startClock()}},this.options.startClockOnMouseOutAfter)},clearClockMouseLeaveTimer:function(){clearTimeout(this.outTimer)},clickTimer:function(){if(!this.timerRunning){this.startClock()}else{this.stopClock()}},setupCaptions:function(){this.$caption=a(this.captionHTML);this.$wrapper.append(this.$caption);this.setCaption()},setCaption:function(){var b=this.currentSlide().attr("data-caption"),c;if(!this.options.captions){return false}if(b){c=a(b).html();this.$caption.attr("id",b).html(c);switch(this.options.captionAnimation){case"none":this.$caption.show();break;case"fade":this.$caption.fadeIn(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideDown(this.options.captionAnimationSpeed);break}}else{switch(this.options.captionAnimation){case"none":this.$caption.hide();break;case"fade":this.$caption.fadeOut(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideUp(this.options.captionAnimationSpeed);break}}},setupDirectionalNav:function(){var b=this,c=a(this.directionalNavHTML);c.find(".right").html(this.options.directionalNavRightText);c.find(".left").html(this.options.directionalNavLeftText);this.$wrapper.append(c);this.$wrapper.find(".left").click(function(){b.stopClock();b.$element.trigger("orbit.prev")});this.$wrapper.find(".right").click(function(){b.stopClock();b.$element.trigger("orbit.next")})},setupBulletNav:function(){this.$bullets=a(this.bulletHTML);this.$wrapper.append(this.$bullets);this.$slides.each(this.addBullet);this.$element.addClass("with-bullets");if(this.options.centerBullets)this.$bullets.css("margin-left",-this.$bullets.width()/2)},addBullet:function(b,c){var d=b+1,e=a("<li>"+d+"</li>"),f,g=this;if(this.options.bulletThumbs){f=a(c).attr("data-thumb");if(f){e.addClass("has-thumb").css({background:"url("+this.options.bulletThumbLocation+f+") no-repeat"});}}this.$bullets.append(e);e.data("index",b);e.click(function(){g.stopClock();g.$element.trigger("orbit.goto",[e.data("index")])})},setActiveBullet:function(){if(!this.options.bullets){return false}else{this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active")}},resetAndUnlock:function(){this.$slides.eq(this.prevActiveSlide).css({"z-index":1});this.unlock();this.options.afterSlideChange.call(this,this.$slides.eq(this.prevActiveSlide),this.$slides.eq(this.activeSlide))},shift:function(a){var b=a;this.prevActiveSlide=this.activeSlide;if(this.prevActiveSlide==b){return false}if(this.$slides.length=="1"){return false}if(!this.locked){this.lock();if(a=="next"){this.activeSlide++;if(this.activeSlide==this.numberSlides){this.activeSlide=0}}else if(a=="prev"){this.activeSlide--;if(this.activeSlide<0){this.activeSlide=this.numberSlides-1}}else{this.activeSlide=a;if(this.prevActiveSlide<this.activeSlide){b="next"}else if(this.prevActiveSlide>this.activeSlide){b="prev"}}this.setActiveBullet();this.$slides.eq(this.prevActiveSlide).css({"z-index":2});if(this.options.animation=="fade"){this.$slides.eq(this.activeSlide).css({opacity:0,"z-index":3}).animate({opacity:1},this.options.animationSpeed,this.resetAndUnlock)}if(this.options.animation=="horizontal-slide"){if(b=="next"){this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock)}if(b=="prev"){this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock)}}if(this.options.animation=="vertical-slide"){if(b=="prev"){this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock)}if(b=="next"){this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock)}}if(this.options.animation=="horizontal-push"){if(b=="next"){this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({left:-this.orbitWidth},this.options.animationSpeed)}if(b=="prev"){this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({left:this.orbitWidth},this.options.animationSpeed)}}if(this.options.animation=="vertical-push"){if(b=="next"){this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({top:this.orbitHeight},this.options.animationSpeed)}if(b=="prev"){this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({top:-this.orbitHeight},this.options.animationSpeed)}}this.setCaption()}}};a.fn.orbit=function(c){return this.each(function(){var d=a.extend({},b);d.init(this,c)})}})(jQuery);

/*! jQuery imageready Plugin by ZURB */
(function(a){function c(b,c){var d=a(b);d.bind("load.imageready",function(){c.apply(b,arguments);d.unbind("load.imageready")})}var b={};a.event.special.imageready={setup:function(a,c,d){b=a||b},add:function(d){var e=a(this),f;if(this.nodeType===1&&this.tagName.toLowerCase()==="img"&&this.src!==""){if(b.forceLoad){f=e.attr("src");e.attr("src","");c(this,d.handler);e.attr("src",f)}else if(this.complete||this.readyState===4){d.handler.apply(this,arguments)}else{c(this,d.handler)}}},teardown:function(b){a(this).unbind(".imageready")}}})(jQuery);

/*! Alerts by Twitter Bootstrap */
!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype={constructor:c,close:function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),e.trigger("close"),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger("close").removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()}},a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a(function(){a("body").on("click.alert.data-api",b,c.prototype.close)})}(window.jQuery)

/*! Tweet Button by Twitter */
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

/*! json2.js http://www.JSON.org/js.html */
var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());

/*! timeago.js http://timeago.yarp.com */
(function(e){function n(){var t=r(this);if(!isNaN(t.datetime)){e(this).text(i(t.datetime))}return this}function r(n){n=e(n);if(!n.data("timeago")){n.data("timeago",{datetime:t.datetime(n)});var r=e.trim(n.text());if(r.length>0&&!(t.isTime(n)&&n.attr("title"))){n.attr("title",r)}}return n.data("timeago")}function i(e){return t.inWords(s(e))}function s(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){if(t instanceof Date){return i(t)}else if(typeof t==="string"){return i(e.timeago.parse(t))}else if(typeof t==="number"){return i(new Date(t))}else{return i(e.timeago.datetime(t))}};var t=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowFuture:false,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function l(r,i){var s=e.isFunction(r)?r(i,t):r;var o=n.numbers&&n.numbers[i]||i;return s.replace(/%d/i,o)}var n=this.settings.strings;var r=n.prefixAgo;var i=n.suffixAgo;if(this.settings.allowFuture){if(t<0){r=n.prefixFromNow;i=n.suffixFromNow}}var s=Math.abs(t)/1e3;var o=s/60;var u=o/60;var a=u/24;var f=a/365;var c=s<45&&l(n.seconds,Math.round(s))||s<90&&l(n.minute,1)||o<45&&l(n.minutes,Math.round(o))||o<90&&l(n.hour,1)||u<24&&l(n.hours,Math.round(u))||u<42&&l(n.day,1)||a<30&&l(n.days,Math.round(a))||a<45&&l(n.month,1)||a<365&&l(n.months,Math.round(a/30))||f<1.5&&l(n.year,1)||l(n.years,Math.round(f));var h=n.wordSeparator===undefined?" ":n.wordSeparator;return e.trim([r,c,i].join(h))},parse:function(t){var n=e.trim(t);n=n.replace(/\.\d+/,"");n=n.replace(/-/,"/").replace(/-/,"/");n=n.replace(/T/," ").replace(/Z/," UTC");n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");return new Date(n)},datetime:function(n){var r=t.isTime(n)?e(n).attr("datetime"):e(n).attr("title");return t.parse(r)},isTime:function(t){return e(t).get(0).tagName.toLowerCase()==="time"}});e.fn.timeago=function(){var e=this;e.each(n);var r=t.settings;if(r.refreshMillis>0){setInterval(function(){e.each(n)},r.refreshMillis)}return e};document.createElement("abbr");document.createElement("time")})(jQuery);

/*! EqualHeights Rob Glazebrook (cssnewbie.com) */
(function(e){e.fn.equalHeights=function(t,n){tallest=t?t:0;this.each(function(){if(e(this).height()>tallest){tallest=e(this).height()}});if(n&&tallest>n)tallest=n;return this.each(function(){e(this).height(tallest).css("overflow","auto")})}})(jQuery);
