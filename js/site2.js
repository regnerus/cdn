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
	if (head.browser.ie)  {
		head.js({selectivizr: "//cdn.regner.us/js/selectivizr.js"});
	}
	
	$("input, textarea").placeholder();
	
	$(".slides").orbit({
		animationSpeed: 800,
		bullets: true
	});
	
	if($("html").attr("lang")=="en"){
		jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]};
		$(".chzn-select").chosen({no_results_text: "Sorry, no results!"});
		}else if($("html").attr("lang")=="nl"){
		jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:"",suffixAgo:"geleden",suffixFromNow:"van nu",seconds:"minder dan een minuut",minute:"ongeveer een minuut",minutes:"%d minuten",hour:"ongeveer een uur",hours:"ongeveer %d uur",day:"een dag",days:"%d dagen",month:"ongeveer een maand",months:"%d maanden",year:"ongeveer een jaar",years:"%d jaar",wordSeparator:" ",numbers:[]};
		$(".chzn-select").chosen({no_results_text: "Sorry, geen resultaten!"});
		}
		else if($("html").attr("lang")=="de"){
		jQuery.timeago.settings.strings={prefixAgo:"vor",prefixFromNow:"in",suffixAgo:"",suffixFromNow:"",seconds:"wenigen Sekunden",minute:"etwa einer Minute",minutes:"%d Minuten",hour:"etwa einer Stunde",hours:"%d Stunden",day:"etwa einem Tag",days:"%d Tagen",month:"etwa einem Monat",months:"%d Monaten",year:"etwa einem Jahr",years:"%d Jahren"};
		$(".chzn-select").chosen({no_results_text: "Sorry, keine Resultate!"});
		}
		else if($("html").attr("lang")=="fr"){
		jQuery.timeago.settings.strings={prefixAgo:"il y a",prefixFromNow:"d'ici",seconds:"moins d'une minute",minute:"environ une minute",minutes:"environ %d minutes",hour:"environ une heure",hours:"environ %d heures",day:"environ un jour",days:"environ %d jours",month:"environ un mois",months:"environ %d mois",year:"un an",years:"%d ans"};
		$(".chzn-select").chosen({no_results_text: "Désolé, aucun résultat!"});
		}
	else {
		jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]};
		$(".chzn-select").chosen({no_results_text: "Sorry, no results!"});
	}
	$("time.timeago").timeago();

	$("textarea").autogrow();
	
	$("a").smoothScroll();
	
	$(".alert").alert()
});

head.ready("view", function () {
	new View( $('.view') );
});
  
head.js(
	{jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"}, 
	function() {
		head.js(
			{view: "//cdn.regner.us/js/view.js"},
			{plugins: "//cdn.regner.us/js/plugins2.js"}
		);		
});