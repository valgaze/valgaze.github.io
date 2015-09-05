---
published: false
---

Algo Puzzler: highest product of 3 numbers

During a whiteboard session the other day I encountered a fun algorithm 101 puzzler. What makes it a great problem is that it starts off simple, then steadily increases in complexity with new complications and then comes full circle with an efficient and tidy solution at the end.
 
##Task: Given a collection of integers (any combination of positive, negative, or zero) find the greatest product of any 3 numbers in the list.

Maybe the numbers are sorted or maybe they're not.

The profoundly wasteful and inefficient way to accomplish this task would would be to generate every possible arrangement of 3 integers from the list, calculate their product, and take the maximum of those products. If we had a list of 30,000,000 integers that approach is a non-starter.

One approach I found it useful was to stop trying to think like a computer and instead use my natural instincts to devise a solution strategy. If you haven’t encountered this particular problem before, first forget about devising rules and try to find the biggest product of 3 numbers in this list without even thinking about algorithms:

{% highlight bash %}
[2,3,9,-4,10,45]
{% endhighlight %}


You can "see it" right? You want 9\*10\*45

That is a pretty intuitive approach that isn’t too difficult to formalize. At first blush, it seems like the rule is to retrieve the 3 largest numbers and multiply 'em-- not a bad start. It’s a working solution but only a partial one. 

Things get much more interesting with collections that contain negative numbers:

{% highlight bash %}
[3, -10000, 4, -1, 5, 6]
{% endhighlight %}

If we use our previous find-the-top-three numbers approach we arrive at 6\*5\*4 = 120

120 is definitely not the highest product. Our initial approach ignores the fact that -10,000*-1=10,000

Unfortunately it looks like our "take the 3 biggest numbers and multiply 'em" approach seems like it ignores a whole group of problems.

If there are 2 or more negative numbers in the list we want to assemble not the largest but the SMALLEST two numbers in the collection and then multiply them by the largest number.

To find the largest product of this collection it sounds like we have two approaches which are at odds with each other-- one is get the top three numbers and the other is to get the smallest two numbers and the largest number.

These lists are pretty easy because we can solve them by visual inspection but with a sufficiently large collection of integers we have to formalize our thinking.

The question is, which approach should we use? We should use both!

We need to find the product of the three largest integers in the collection and find the product of the two smallest integers and the largest integer and pick whichever is larger.

To solve this problem we will therefore need five pieces of information from the collection:

The largest number
The second largest number
The third largest number
The smallest number
The second smallest number

If our collection is sorted-- finding those values, taking their product, and comparing them is trivial.

The interesting question is what should we do if the collection is unsorted-- is sorting  a good idea?

Sorting and then finding our five pieces of information is a perfectly valid solution but it requires us to go through a computationally-expensive task and there’s then the issue of which sort we should use considering their various tradeoffs.

Instead of sorting-- why not just grab our five pieces of information in a single iteration. Why not compute the largest product with O(n) time complexity instead of potentially O(log n) time complexity? While we’re at it, why not also do this in constant-space?

If we iterate over our collection we can simply keep a running tally of 5 pieces of information-- regardless of how “big” our collection happens to be-- and at the end compute simple products and make a simple comparison.

Here’s a good problem to end on:
{% highlight bash %}
[37,838,-21,3844,-394944,12,0,-33,383,388,1,84,84,11,38,559,8,-2394,10]
{% endhighlight %}

