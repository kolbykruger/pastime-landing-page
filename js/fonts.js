(function() {
    WebFontConfig = {
      active: function() {
        sessionStorage.fonts = true;
      },
      google: {
          families: [
              'Oswald:300,400,500,600,700',
              'Open+Sans:400,400i,600'
          ]
      },
      timeout: 2000
    };

    (function(d) {
      var wf = d.createElement('script'), s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
})();
