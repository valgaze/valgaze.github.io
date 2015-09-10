---
title: Two Minutes to Supercharge Your Sublime Text
published: true
---


# Spend Two Minutes to Supercharge Your Sublime Text 

In an application as rich as Sublime Text if you're not careful it's easy to find that you've spent far more time attempting to master all the tricks and shortcuts than you could ever hope to save from implementing them

Rather than try to learn everything at once, see if you can incorporate these quick-and-dirty shortcuts in your workflow:

###1) Quickly Swap lines
This shortcut is a bit tricky but practice a few times to build up your muscle memory and before you know it you'll probably never again need to cut & paste to swap lines.

All you need to do is place your cursor on the line you want to swap (you don't even need to highlight) and then press
{% highlight bash %}
{CMD} + {CTRL}  + {up_arrow/down_arrow}
{% endhighlight %}

That'll in one quick command turn this...
{% highlight javascript %}
console.log(myRef);
var myRef = "Hope we declared this in the correct spot";
{% endhighlight %}


Into THIS:

![Line swap!]({{ site.url }}/images/sublimepost/ex1.gif)

###2) Comment multiple lines at once
This shortcut is a life-saver if you want to very quickly comment out multiple lines of text. 

PROCEDURE: Select multiple lines of text (which you can do by holding down SHIFT and moving the arrow keys and then press:

{% highlight bash %}
{CMD} + /
{% endhighlight %}

That'll turn this...
{% highlight javascript %}
console.log("Did this output correctly?", myObj);
console.log("Let's see if we set the property", myObj.prop);
{% endhighlight %}

Into THIS:


![Comment out!]({{ site.url }}/images/sublimepost/ex2.gif)


NOTE: This shortcut is context-aware so if you're editing an HTML file all the selected lines will be properly wrapped in <!--  --> comment lines


###3) The Elusive Multicursor

If you've ever been mystified at how a colleague presenter is able to quickly edit multiple lines at once, this trick will show you how to do it too!

Imagine we have a bunch of javascript variables which we want to mark as private by appending an underscore character. 

{% highlight javascript %}
var secretProperty1 = 0;
var secretProperty2 = 1;
var secretProperty3 = 2;
var secretProperty4 = 3;
{% endhighlight %}

The laborious knucklehead approach is to go one line at a time. Instead simply highlight the first character and press
{% highlight bash %}
{CMD} + D
{% endhighlight %}

Keep pressing CMD-D until you see multiple cursors and then just type away to make edits to multiple lines at once

As fast as you can type you'll be able to add the underscore:

![Multicursors!]({{ site.url }}/images/sublimepost/ex3.gif)


Two notes: 

* If you have a mouse with a scrollwheel you can achieve a similiar multiple lines by PRESSING the scroll wheel and dragging down to create one big cursor.

* The lines definitely do not need to be neatly arranged-- just select whatever character or character grouping and everytime you press CMD-D you'll get a new cursor!

Give those commands a shot and before you know it you'll be zipping around Sublime Text like a pro.
