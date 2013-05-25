// Twitter widgets.js callback
window.twttrCall = function (t) {
    return (window.twttr = window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } }));
};

// Insert SDKs and Analytics scripts
(function(doc, script) {
    var t,
        js,
        fjs = doc.getElementsByTagName(script)[0],
        add = function(url, id, callback) {
            var t;
            if (doc.getElementById(id)) {return;}
            js = doc.createElement(script);
            js.src = url;
            id && (js.id = id);
            fjs.parentNode.insertBefore(js, fjs);
            callback && callback(t);
        };

    // Google Analytics
    add(('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js');
    // Twitter SDK
    add('//platform.twitter.com/widgets.js', 'twitter-wjs', window.twttrCall);
    //Facebook SDK
    add('//connect.facebook.net/nl_NL/all.js#xfbml=1&appId=73619953708', 'facebook-jssdk');
}(document, 'script'));

// Twitter event tracking in GA
twttr.ready(function (twttr) {
    twttr.events.bind('tweet', function (event) {
        if (event) {
            var label = event.target.parentNode.getAttribute('data-title');
            _gaq.push(['_trackSocial', 'twitter', 'tweet', label]);
        }
    });
    twttr.events.bind('follow', function (event) {
        if (event) {
            var label = event.region;
            _gaq.push(['_trackSocial', 'twitter', 'follow', label]);
        }
    });
});

head.ready("plugins", function() {
	if ($.browser.msie  && parseInt($.browser.version, 10) <= 8) {
		head.js({selectivizr: "//cdn.regner.us/js/selectivizr.js"});
	}
	
	if ($.fn.mobileMenu && $(".list-on-phones ul").length > 0) {
		var choosePage;if($("html").attr("lang")=="en"){choosePage="Choose a Page"}else if($("html").attr("lang")=="nl"){choosePage="Kies een Pagina"}else if($("html").attr("lang")=="de"){choosePage="Wählen Sie eine Seite"}else if($("html").attr("lang")=="fr"){choosePage="Choisir une page"}else{choosePage="Choose a Page"}
		
		$(".list-on-phones ul").mobileMenu({
			switchWidth: 660,                   // width (in px to switch at)
			topOptionText: choosePage,     // first option text
			indentString: "&nbsp;&nbsp;&nbsp;"  // string for indenting nested items
		});
	}
	
	$("input, textarea").placeholder();
	
	$(".slides").orbit({
		animationSpeed: 800,
		bullets: true
	});
	
	if($("html").attr("lang")=="en"){jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}}else if($("html").attr("lang")=="nl"){jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:"",suffixAgo:"geleden",suffixFromNow:"van nu",seconds:"minder dan een minuut",minute:"ongeveer een minuut",minutes:"%d minuten",hour:"ongeveer een uur",hours:"ongeveer %d uur",day:"een dag",days:"%d dagen",month:"ongeveer een maand",months:"%d maanden",year:"ongeveer een jaar",years:"%d jaar",wordSeparator:" ",numbers:[]}}else if($("html").attr("lang")=="de"){jQuery.timeago.settings.strings={prefixAgo:"vor",prefixFromNow:"in",suffixAgo:"",suffixFromNow:"",seconds:"wenigen Sekunden",minute:"etwa einer Minute",minutes:"%d Minuten",hour:"etwa einer Stunde",hours:"%d Stunden",day:"etwa einem Tag",days:"%d Tagen",month:"etwa einem Monat",months:"%d Monaten",year:"etwa einem Jahr",years:"%d Jahren"}}else if($("html").attr("lang")=="fr"){jQuery.timeago.settings.strings={prefixAgo:"il y a",prefixFromNow:"d'ici",seconds:"moins d'une minute",minute:"environ une minute",minutes:"environ %d minutes",hour:"environ une heure",hours:"environ %d heures",day:"environ un jour",days:"environ %d jours",month:"environ un mois",months:"environ %d mois",year:"un an",years:"%d ans"}}
	
	$("time.timeago").timeago();

	$("textarea").autogrow();
	
	$("a").smoothScroll();
	
	$(".alert").alert()
	
	if ($("code").length > 0) {
		head.js({highlight: "//cdn.regner.us/js/highlight.js"});	
		head.ready("highlight", function() {
			hljs.initHighlightingOnLoad();
		});	
	}
});

head.ready("view", function () {
	new View( $('.view') );
});
  
head.js(
	{jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"}, 
	function() {
		head.js(
			{view: "//cdn.regner.us/js/view.js"},
			{plugins: "//cdn.regner.us/js/plugins.js"}
		);		
});