---
published: true
title: Unpacking Angular JS's Regex
author: victor
date: 2015-10-11
---

Inside Angular there is a remarkable regular expression (or rather a series of regexes) that beautifully extract the parameters of a function.

This is a crucial piece of functionality undergirding AngularJS's injection system system whereby dependencies get resolved by injecting them into the parameters of a function.

At first blush, this may not seem like too difficult a task for Angular team to accomplish. Why not just call the toString() method available on all functions and then strip the parameters out.

How hard could it be?

It turns out it is a pretty hard problem. There are all sorts of ways to create functions and accordingly all sorts of ways to make extracting the parameters incredibly difficult. Lines 65 to 68 from Angular's injector the beautiful solution that makes it all possible:

{% highlight javascript %}

var FN_ARGS = /^[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

{% endhighlight %}

The most interesting and revealing regex is the last one entitled "STRIP_COMMENTS"

A software engineer is given a tremendous amount of leeway in Javascript and a perfectly valid function could have multiline comments right in the function signature! If we were to run .toString() on a function with comments, the comments would come along with it. This is a potentially catastrophic showstopper which could wreck havoc in an application which is interprets the function parameters as actual dependencies.

{% highlight javascript %}

var myFunc = function(param1, /*test comment 1*/ param2 /*test comment 2*/, /*Comment in front 3 */ param3){ };

{% endhighlight %}

{% highlight javascript %}

myFunc.toString(); //"function (param1, /*test comment 1*/ param2 /*test comment 2*/, /*Comment in front 3 */ param3){}"

{% endhighlight %}

Of course an array containing ["param1","/test comment 1/ param2 /test comment 2/","/*Comment in front 3 */ param3"] is very different than an array containing ["param1", "parm2", "param3"]

The solution to the comments problem is the STRIP_COMMENTS regex which rips the comments out first and then enables the rest of the helper regexes to get to work.

{% highlight javascript %}

var myFunc = function(param1, /*test comment 1*/ param2 /*test comment 2*/, /*Comment in front 3 */ param3){};

{% endhighlight %}

{% highlight javascript %}

myFunc.toString().replace(STRIP_COMMENTS, ""); //"function (param1,  param2 ,  param3){}"

{% endhighlight %}


With the comments safely trimmed out, it is now possible to return a final array of valid dependencies.

Angular is an incredibly powerful tool and this regex is a small indication of the TLC put into it.

##Further Reading:
* [http://merrickchristensen.com/articles/javascript-dependency-injection.html](http://merrickchristensen.com/articles/javascript-dependency-injection.html)

* [https://github.com/angular/angular.js/blob/master/src/auto/injector.js#L65-L68](https://github.com/angular/angular.js/blob/master/src/auto/injector.js#L65-L68)

* [http://taoofcode.net/studying-the-angular-injector-annotate/](http://taoofcode.net/studying-the-angular-injector-annotate/)
