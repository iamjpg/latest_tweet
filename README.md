# Get Latest Tweet

Pissed off that Twitter took away RSS? Annoyed that you have to use oAuth to get at your very own tweets, are rate limited, and the people at Twitter have decided they want to control every way you can output your tweets?

Well, I was dammit.

That's why I made this plugin. So I could output my last tweet on my own site any damn way I wanted. Just like the good old days.

## How it works

Basically I query the Twitter widget response to grab the data.

I know what you're thining: "Isn't that a bit dangerous? I mean what if they change the HTML of the widget?"

Well, in that case it would break, and I would simply fix the plugin to work again.

## First Create a Twitter Widget

* First you need to go create a [Twitter widget](https://twitter.com/settings/widgets).
* Second, grab the widget id from the HTML (see screen shot).

![Alt text](http://i.imgur.com/Gd9d33E.png)

## Then you apply the code

```
$("#latest_tweet").latestTweet({
  widget_id: "345612825047228417" // This is my ID. Create a widget and get your own Tweet.
});
```

## Rather have the data returned in a callback so you can do whatever you want?

```
$("body").latestTweet({
  widget_id: "345612825047228417",
  callback: function(data) {
    console.log(data);
  }
});
```

## License

The MIT License (MIT)

Copyright (c) 2013

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.