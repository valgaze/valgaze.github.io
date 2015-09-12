---
published: true
title: Highest Product of 3 Numbers
---

Algo Puzzler: highest product of 3 numbers

During a whiteboard session the other day I encountered a fun algorithm 101 puzzler. What makes it a great problem is that it starts off simple, then steadily increases in complexity with new complications and then comes full circle with an efficient and tidy solution at the end.
 
###Task: Given a collection of integers (any combination of positive, negative, or zero) find the greatest product of any 3 numbers in the list.

Maybe the numbers are sorted or maybe they're not.

The profoundly wasteful and inefficient way to accomplish this task would would be to generate every possible arrangement of 3 integers from the list, calculate their product, and take the maximum of those products. If we had a list of maybe 30,000,000 integers that approach is an inefficient non-starter.

One strategy I found it useful was to stop trying to think about computer code and instead use natural intuition to devise and refine a solution strategy. If you haven’t encountered this particular problem before, you should first try to find the biggest product of 3 numbers in this list without even thinking about algorithms:

{% highlight bash %}
[2,3,9,-4,10,45]
{% endhighlight %}


You can "see it" right? To get the highest product you want 9\*10\*45

That is a pretty simple and intuitive approach that also isn’t particularly difficult to formalize. So far it seems like the rule is to retrieve the 3 largest numbers and multiply 'em-- not a bad start. It’s a working solution though only a partial one. 

Things get much more interesting with collections that contain negative numbers:

{% highlight bash %}
[3, -10000, 4, -1, 5, 6]
{% endhighlight %}

If we use our previous find-the-top-three numbers approach we arrive at 6\*5\*4 = 120

120 is definitely not the highest product. Our initial approach ignores the fact that -10,000*-1=10,000

Unfortunately it looks like our "take the 3 biggest numbers and multiply 'em" approach isn't getting the job done anymore.

If there are 2 or more negative numbers in the list, it seems like we want to assemble not the largest but the SMALLEST two numbers in the collection. And then we need to find the LARGEST number in the list and multiply them all together.

While these lists are pretty easy because we can solve them by visual inspection just by noticing numbers that stand out visually (ie more digits):

To demonstrate the limits of visual inspection, however, consider this list:
{% highlight bash %}
[-15, 3, 39, -12, 29, -21, 59, 3, 7, 0, -9, -52, -55, 20, 15, 1, -35, 48, 38, 50, 35, -19, -1, 35, -60, -23, -44, 49, 3, 14, 13, -7, -3, -24, 24, 30, -32, 76, -35, 32, 12, -69, -2, -46, -16, -17, 0, -25, 2, -3, -56, 6, 0, -75, -38, 14, 7, 80, -6, -2, 16, 0, 1, 15, 2, -20, -10, -7, 1, 16, 39, -23, -20, 7, -72, 6, 23, 11, -49, -44, 3, 31, -35, -6]
{% endhighlight %}



It's clear that with a sufficiently large collection of integers we must work to formalize our thinking


To recap-- one strategy is to collect the top three numbers and the other is to collect the smallest two numbers and the largest number.

Which approach should we use?

...we should use both and then just pick whichever one is bigger.


To attempt this double-strategy will need to assemble five pieces of information from the collection:

1) The largest number
2) The second largest number
3) The third largest number
4) The smallest number
5) The second smallest number

If our collection is sorted least to greatest-- finding those values, calculating the appropriate product, and comparing them is a trivial operation.


{% highlight bash %}
[-7, -6, 4, 5, 8]
{% endhighlight %}


Things get more interesting if the collection is unsorted-- is our best/most efficient first step to sort this collection?

Sorting and then finding our five pieces of information is a perfectly valid solution but it requires us to go through a computationally-expensive task. Also we'd also need to consider the issue of which sort type we should select in considering their various tradeoffs for different input sizes.

Instead of sorting-- why not just grab our five pieces of information in a single iteration. Why not compute the largest product with O(n) time complexity instead of potentially O(n^2) time complexity? 

While we’re at it, why not also do this in constant-space? (Constant space meaning that if we iterate over our collection we can simply keep a running tally of 5 pieces of information-- regardless of how “big” our collection happens to be)

In summary, we went from simple to complex to confusing and finally to elegance-- not too bad. 

If you want to experiment with different lists, click the GENERATE button below or refresh the page and the box below will produce a new list of random numbers:

<button id='generateBtn'>Generate</button>
<span id="fakePre"></span>



<script type="text/javascript">
var generator = function(){
  var output = [];
  var seed = Math.ceil((Math.random()*40) + 80);
  for (var i = 0; i < seed; i++){
    var negCheck = Math.floor(Math.random()*2);

    if (negCheck === 1){
      output.push(Math.floor(Math.random()*seed));      
    }else{
      output.push(Math.floor(Math.random()*seed*-1));
    }

  }
  return output;
};

var append = function(el, input){
  var ref = document.getElementById(el);
  ref.innerHTML = "[" + input + "]";
};

document.getElementById("generateBtn").addEventListener("click", function(){
    append("fakePre", generator());
});

append("fakePre", generator());



</script>

<style type="text/css">
  #fakePre{
    background: #f5f5f8;
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.428571429;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px dotted #ccc;
    border-radius: 4px;
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
  }

</style>





