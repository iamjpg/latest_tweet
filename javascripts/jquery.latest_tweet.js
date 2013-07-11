(function ( $ ) {
    var pluginName = "latestTweet",
        defaults = {
            propertyName: "value"
        };

    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }
    Plugin.prototype = {
        init: function() {
          this.createWidgetAndPrintToDom();
          this.extractData();
        },
        extractData: function() {
          var _this = this;
          var thsInt = setInterval(function() {
            if ($($("#twitter-widget-0").contents().find(".h-feed li")[0]).length > 0 && $("body").attr("data-twttr-rendered") && $("body").attr("data-twttr-rendered") === "true") {
              clearInterval(thsInt);
          		_this.tweet_date = $($("#twitter-widget-0").contents().find(".h-feed li")[0]).find(".permalink").html()
              _this.tweet_permlink = $($("#twitter-widget-0").contents().find(".h-feed li")[0]).find(".permalink").attr("href")
              _this.tweet = $($("#twitter-widget-0").contents().find(".h-feed li")[0]).find(".e-entry-title").html()
              
              if (typeof moment !== "undefined") {
                _this.tweet_date = moment($(_this.tweet_date).attr("datetime"), "YYYYMMDD").fromNow()
              }
              
              if (_this.options.callback && typeof _this.options.callback === "function") {
                var data = {
                  tweet_date: _this.tweet_date,
                  tweet_permlink: _this.tweet_permlink,
                  tweet: _this.tweet
                }
                _this.options.callback(data);
              } else {
                _this.printTweet();
              }
            }
          });
        },
        printTweet: function() {
          $(this.element).html('<div class="twitter_widget_tweet">' + this.tweet + '</div><div class="twitter_widget_posted"><a href="' + this.tweet_permalink + '">' + this.tweet_date + '</a></div>');
        },
        createWidgetAndPrintToDom: function() {
          var tw = '<div style="display: none;"><a class="twitter-timeline" href="https://twitter.com/iamjpg" data-widget-id="' + this.options.widget_id + '">Tweets by @iamjpg</a>';
              tw += '<script>(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));</script></div>';
          
          $("body").append(tw);
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery );