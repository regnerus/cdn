/* A fix for iPhone viewport scale bug */
/* http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/ */
//(function (document) {
//  window.scale = window.scale || {};
//  scale.viewportmeta = document.querySelector && document.querySelector("meta[name="viewport"]");
//  scale.ua = navigator.userAgent;
//  scale.iOS = function () {
//    if (scale.viewportmeta && /iPhone|iPad/.test(scale.ua) && !/Opera Mini/.test(scale.ua)) {
//      scale.viewportmeta.content = "width=device-width,minimum-scale=1,maximum-scale=1";
//      document.addEventListener("gesturestart", scale.gestureStart, false);
//    }
//  };
//  scale.gestureStart = function () {
//    scale.viewportmeta.content = "width=device-width,minimum-scale=0.25,maximum-scale=1.6";
//  };
//})(document);
//
//scale.iOS();

var choosePage;
if ($("html").attr("lang") == "en") {
	choosePage = "Choose a Page" } 
else if ($("html").attr("lang") == "nl") {
    choosePage = "Kies een Pagina" } 
else if ($("html").attr("lang") == "de") {
	choosePage = "Wählen Sie eine Seite" }
else if ($("html").attr("lang") == "fr") {
	choosePage = "Choisir une page" }
else {
	choosePage = "Choose a Page";
} 

$(document).ready(function() {
	if ($.fn.mobileMenu && $(".list-on-phones ul").length > 0) {
		$(".list-on-phones ul").mobileMenu({
			switchWidth: 660,                   // width (in px to switch at)
			topOptionText: choosePage,     // first option text
			indentString: "&nbsp;&nbsp;&nbsp;"  // string for indenting nested items
		});
	}
	
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
	
	$(".alert").alert()
	
	$(".slides").orbit({
		animationSpeed: 800,
		bullets: true
	});
	
	$("input, textarea").placeholder();
	
	$("textarea").autogrow();
	
	$("a").smoothScroll();
	
	if($("html").attr("lang")=="en"){jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}}else if($("html").attr("lang")=="nl"){jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:"",suffixAgo:"geleden",suffixFromNow:"van nu",seconds:"minder dan een minuut",minute:"ongeveer een minuut",minutes:"%d minuten",hour:"ongeveer een uur",hours:"ongeveer %d uur",day:"een dag",days:"%d dagen",month:"ongeveer een maand",months:"%d maanden",year:"ongeveer een jaar",years:"%d jaar",wordSeparator:" ",numbers:[]}}else if($("html").attr("lang")=="de"){jQuery.timeago.settings.strings={prefixAgo:"vor",prefixFromNow:"in",suffixAgo:"",suffixFromNow:"",seconds:"wenigen Sekunden",minute:"etwa einer Minute",minutes:"%d Minuten",hour:"etwa einer Stunde",hours:"%d Stunden",day:"etwa einem Tag",days:"%d Tagen",month:"etwa einem Monat",months:"%d Monaten",year:"etwa einem Jahr",years:"%d Jahren"}}else if($("html").attr("lang")=="fr"){jQuery.timeago.settings.strings={prefixAgo:"il y a",prefixFromNow:"d'ici",seconds:"moins d'une minute",minute:"environ une minute",minutes:"environ %d minutes",hour:"environ une heure",hours:"environ %d heures",day:"environ un jour",days:"environ %d jours",month:"environ un mois",months:"environ %d mois",year:"un an",years:"%d ans"}}
	
	$("time.timeago").timeago();
});