---
published: true
title: Whiteboarding Data Structures
author: victor
date: 2015-09-16
---

Communicating Complex Ideas Visually 


At their best, diagrams can clearly articulate a core message or idea. At their worst, they might look something like this:

![img]({{ site.url }}/images/diagrams/paconsulting.jpg)
[credit: [http://msnbcmedia.msn.com/i/MSNBC/Components/Photo/2009/December/091202/091203-engel-big-9a.jpg](http://msnbcmedia.msn.com/i/MSNBC/Components/Photo/2009/December/091202/091203-engel-big-9a.jpg)]


Despite rebuttals from [some quarters](http://sdwise.com/2013/07/hey-new-york-times-a-causal-loop-diagram-is-not-a-powerpoint-fail/), this particular diagram appears to do more to confuse than to enligthen. General Stanley McChrystal allegedly remarked that  [“when we understand that slide, we’ll have won the war.”](http://www.nytimes.com/210/04/27/world/27powerpoint.html?_r=0)

A far more successful example of a diagram communicating an abstract idea comes from the House/Senate Joint Economic Committee which published vertigo-inducing chart detailing the many agencies responsible for implementing the Affordable Care Act:

![img]({{ site.url }}/images/diagrams/healthcarechart.jpg)
[credit: [http://www.jec.senate.gov/public/index.cfm/republicans/committeenews?ID=bb302d88-3d0d-4424-8e33-3c5d2578c2b0](http://www.jec.senate.gov/public/index.cfm/republicans/committeenews?ID=bb302d88-3d0d-4424-8e33-3c5d2578c2b0)]

(There was a rebuttal by an angry graphic designer who thought he could spruce things up a bit and gave it a shot too: [https://www.flickr.com/photos/robertpalmer/3743826461](https://www.flickr.com/photos/robertpalmer/3743826461))

Whatever one’s politics or worldview, the lesson from these diagrams missteps and successes is clear-- the amount of complexity in a diagram can trigger a visceral reaction in its audience. When used correctly, diagrams can be powerful shortcuts to communicate complex ideas. If you want to make a point about an abstract topic in a vivid way-- use a (simple!) diagram. 

Nowhere is this more applicable than when software engineers are scribbling away at their whiteboards. In an age of fancy slide decks, drawing diagrams on the decidedly low-tech whiteboard is a great approach to think through many technical challenges (not to mention tricky interview questions.) 

Since software engineers will often need to reference data structures while whiteboarding, below is a rundown of the cleanest and efficient ways to draw them.

###1) Linked Lists
The classic singly linked list is very useful for problems requiring fast and easy inserts and removals. The linked list as a diagram should be simple and neat with clear distinctions between each node’s value and its next pointer in the same box. If the linked list has a tail node, its pointer should have a big X in its pointer field.

![Whiteboard]({{ site.url }}/images/diagrams/Linkedlist.JPG)

###2) Trees
Trees are useful for thinking through and diagramming problems that represent a sequence of events or decisions (ex. every possible move in a Rock-Paper-Scissors game or chess match.) On a whiteboard, trees should be drawn from top to bottom to symbolize hierarchical relationships among nodes. It’s sometimes unnecessary to show every single branch of a tree and instead just show the path of one “branch” to communicate the general idea. 

![Whiteboard]({{ site.url }}/images/diagrams/Tree.JPG)

###3) Graphs
A graph is a tool to efficiently model complex relationships amongst many distinct entities Things like a social network or P2P network are excellent candidates for modeling with a graph. They are similar to trees but do not need necessarily communicate hierarchical “top-down’ relationships amongst the nodes. The edges connecting nodes to each other can communicate whether or not the relationship between nodes are mutual or one way. When drawing a graph on a whiteboard it’s important to keep the length of the edges consistent.

![Whiteboard]({{ site.url }}/images/diagrams/Graph.JPG)


###4) Hash Tables
Hash tables are very handy when you need a “machine” that can very quickly retrieve key-value pairs (ex username and an associated telephone number.) On a whiteboard, the hash table should have three main sections: keys, “hashing machine”, and the buckets. The keys should be uniformly-sized blocks with line segments connecting each key to its associated bucket. It is important that the line pass through the hashing machine (ideally crossing over to demonstrate that the values are more or less evenly distributed into buckets) to communicate that the hashing function does something special to turn a key into hash. The buckets should hold distinct values and preferably have a hashing index.

![Whiteboard]({{ site.url }}/images/diagrams/Hashtable.JPG)





###5) Binary Search Trees
A Binary Search Tree can be an invaluable tool to quickly retrieve ordered information or to do something a bit more fun like Twenty Questions. If you can chop off whole branches of a tree with a particular decision, a BST is a great choice. Each node in a BST stores data and has precisely two "child" pointers (which may be nodes or point to null.) The other crucial characteristic is that nodes to the left of a parent node should be lower in value and the nodes to the right should be higher in value. On the whiteboard, space definitely counts when drawing out a BST route. A node slightly to the left or the right of a parent node has meaning-- white space matters.

![Whiteboard]({{ site.url }}/images/diagrams/Binarysearchtree.JPG)


###6) Arrays
Arrays are like the swiss army knives of whiteboard because they can do it all. If you need to implement a palindrome detection algorithm you could do a lot worse than thinking through the implementation by inserting characters into slots in an array. Basically any task where you need to hold a single value is an excellent canidate for being modeled by an array. The cell size should be consistent and rather than using brackets, it is a good idea to wrap each item in a closed cell to keep things neat and tidy.

![Whiteboard]({{ site.url }}/images/diagrams/Array.JPG)


That is a good start for how to clearly communicate these abstract data structures on a whiteboard. It is important to do as little drawing as needed to make your point and to keep things neat and orderly. Using these conventions will make sure you and your audience are speaking the same visual language and enable you to focus on the more interesting parts of whatever problem you are trying to solve.

Whiteboarding is a crucial skill in software engineering and the ability to explain your ideas visually and refer to common reference points like fundamental data structures will serve you well. Systematic whiteboarding will work to discipline your thinking and help you be a more productive engineer by giving you a glimpse around corners and thinking about edges cases before they come up.

There's an old saying that smart carpenters should "measure twice, cut once." Perhaps software engineers should “whiteboard twice, code once.” If it works for people building with gimlets and wood then maybe it will also work for people building with keyboards and code.

