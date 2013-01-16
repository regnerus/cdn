head.js(
	{jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"}, 
	function() {
		head.js(
			{view: "//cdn.regner.us/js/view.js"},
			{plugins: "//cdn.regner.us/js/plugins.js"}
		);
		
		if ($.browser.msie  && parseInt($.browser.version, 10) <= 8) {
			head.js({selectivizr: "//cdn.regner.us/js/selectivizr.js"});
		}
});

head.ready("plugins", function () {
	new View($('.view'));
	
	var choosePage;if($("html").attr("lang")=="en"){choosePage="Choose a Page"}else if($("html").attr("lang")=="nl"){choosePage="Kies een Pagina"}else if($("html").attr("lang")=="de"){choosePage="Wählen Sie eine Seite"}else if($("html").attr("lang")=="fr"){choosePage="Choisir une page"}else{choosePage="Choose a Page"};
	
	if ($.fn.mobileMenu && $(".list-on-phones ul").length > 0) {
		$(".list-on-phones ul").mobileMenu({
			switchWidth: 660,                   // width (in px to switch at)
			topOptionText: choosePage,     // first option text
			indentString: "&nbsp;&nbsp;&nbsp;"  // string for indenting nested items
		});
	}
	
	$("a").smoothScroll();
	$(".alert").alert();
	
	$("input, textarea").placeholder();
	$("textarea").autogrow();
	
	if ($("code").length > 0) {
		head.js({highlight: "//cdn.regner.us/js/highlight.js"});	
		head.ready("highlight", function() {
			$("head").append("<link>");
			css = $("head").children(":last");
			css.attr({
				rel:  "stylesheet",
				type: "text/css",
				href: "//cdn.regner.us/css/highlight/github.css"
			});  
			hljs.initHighlightingOnLoad();
		});	
	}
	
	if ($(".animate").length > 0) {
		$("head").append("<link>");
		css = $("head").children(":last");
		css.attr({
			rel:  "stylesheet",
			type: "text/css",
			href: "//cdn.regner.us/css/animate.css"
		});
	}
	
	$(".slides").orbit({
		animationSpeed: 800,
		bullets: true
	});

	if($("html").attr("lang")=="en"){jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}}else if($("html").attr("lang")=="nl"){jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:"",suffixAgo:"geleden",suffixFromNow:"van nu",seconds:"minder dan een minuut",minute:"ongeveer een minuut",minutes:"%d minuten",hour:"ongeveer een uur",hours:"ongeveer %d uur",day:"een dag",days:"%d dagen",month:"ongeveer een maand",months:"%d maanden",year:"ongeveer een jaar",years:"%d jaar",wordSeparator:" ",numbers:[]}}else if($("html").attr("lang")=="de"){jQuery.timeago.settings.strings={prefixAgo:"vor",prefixFromNow:"in",suffixAgo:"",suffixFromNow:"",seconds:"wenigen Sekunden",minute:"etwa einer Minute",minutes:"%d Minuten",hour:"etwa einer Stunde",hours:"%d Stunden",day:"etwa einem Tag",days:"%d Tagen",month:"etwa einem Monat",months:"%d Monaten",year:"etwa einem Jahr",years:"%d Jahren"}}else if($("html").attr("lang")=="fr"){jQuery.timeago.settings.strings={prefixAgo:"il y a",prefixFromNow:"d'ici",seconds:"moins d'une minute",minute:"environ une minute",minutes:"environ %d minutes",hour:"environ une heure",hours:"environ %d heures",day:"environ un jour",days:"environ %d jours",month:"environ un mois",months:"environ %d mois",year:"un an",years:"%d ans"}}
	
	$("time.timeago").timeago();
});

// Twitter widgets.js callback
window.twttrCall=function(a){return(window.twttr=window.twttr||(a={_e:[],ready:function(b){a._e.push(b)}}))};

// Insert SDKs and Analytics scripts
(function(f,a){var b,e,c=f.getElementsByTagName(a)[0],d=function(g,j,i){var h;if(f.getElementById(j)){return}e=f.createElement(a);e.src=g;j&&(e.id=j);c.parentNode.insertBefore(e,c);i&&i(h)};d(("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js");d("//platform.twitter.com/widgets.js","twitter-wjs",window.twttrCall);d("//connect.facebook.net/nl_NL/all.js#xfbml=1&appId=73619953708","facebook-jssdk")}(document,"script"));

// Twitter event tracking in GA
twttr.ready(function(a){a.events.bind("tweet",function(c){if(c){var b=c.target.parentNode.getAttribute("data-title");_gaq.push(["_trackSocial","twitter","tweet",b])}});a.events.bind("follow",function(c){if(c){var b=c.region;_gaq.push(["_trackSocial","twitter","follow",b])}})});

