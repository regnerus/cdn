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
	head.js({script: "//cdn.regner.us/js/script.js"});
});	

head.ready("view", function() {
	new View($(".view"));
});
  
head.js(
	{jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"}, 
	function() {
		{view: "//cdn.regner.us/js/view.js"},
		head.js({plugins: "//cdn.regner.us/js/plugins.js"});		
});