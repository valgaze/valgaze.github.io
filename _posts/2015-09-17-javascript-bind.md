---
published: true
title: JavaScript Bind-- A Simple Guide for the Perplexed
author: victor
date: 2015-10-20

---

## Javascript bind: A guide for the perplexed

The .bind method in JavaScript can sometimes be a source of confusion. If you have never encountered it before, it seems to almost magically solve all sorts of context binding issues.

While there are [many](http://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/), [many](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/), [many](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) excellent writeups on this subject I think there's a bit of room left for a simple, focused treatment.

Let's suppose we have an object we call "a" that has a method called "log" which simply logs the object's "content" property referenced by "this.content"


{% highlight javascript %}

var a = {
content: "message_1",
log: function(param){
  console.log(this.content);
}};

{% endhighlight %}

If we were to invoke that method directly on object a we'd get this result:

{% highlight javascript %}

a.log(); // logs "message_1"

{% endhighlight %}


No surprises there.

If we had an object "b" with some text content that we wanted to log we could use either [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) or [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) we can set the this context of object "a" quite easily:

{% highlight javascript %}

var b = {content: "different message_2"};

a.log.call(b); //logs "different message_2"

a.log.apply(b); //logs "different message_2"

a.log(); // logs "message_1"

b.log(); // Log isn't a method on b, triggers Uncaught TypeError: b.log is not a function

{% endhighlight %}

So why bother with bind? After all, we can certainly achieve the same result using bind but the syntax is a bit strange:

{% highlight javascript %}

a.log.bind(b)(); //logs "different message_2"

{% endhighlight %}

The big trick with bind is that we can keep a reference to a function with the context we want and invoke later.
{% highlight javascript %}

var ref = a.log.bind(b); //reference to a function

ref(); //logs "different message_2"


{% endhighlight %}

Bottom line: Bind returns a **reference** to a function that we can invoke at a later time. Call/apply are immediately invoked but bind needs to be explicitly invoked.



