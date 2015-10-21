---
published: true
title: Geofire with Firebase
author: victor
---
## Some Thoughts on Location Queries with Firebase's Geofire

I came across a funny acronym the other day while building with React/Redux: DX. 

DX??

At first blush I thought it was a typo-- perhaps they meant "UX" for User Experience. Nope-- they meant DX. 

I was quickly disabused of my ignorance and discovered that DX evidently now stands for "Developer Experience." It can be said to comprise all the little touches that makes developing on a platform or tool chain a pleasant experience for the developer. The thinking seems to be that happy engineers will lead to happier users and down the line happy users might some day even lead someday to a real, live, paying customer!

If we accept DX then Firebase can be said to have an absolutely killer DX. Firebase is a dead-simple backend-as-a-service that abstracts away a ton of Websockets-like work and makes implementing "real time" functionality a downright pleasant experience for a software engineer.

Unlike a B/PAAS like Parse, however, Firebase does not support geoquerying right out of the box. What the Firebase team cooked up for that is a snap-in called GeoFire. 

What GeoFire can do is probably best illustrated by an an example, so first let's take take a minute and check out this incredible SF public transit map powered by GeoFire: <a href="https://www.sflivebus.com" target="_blank">https://www.sflivebus.com!</a>
  
**THAT** is what you can do with GeoFire!

It is all pretty straightforward to get up and running, but there are a few things to keep in mind that can help you avoid problems.

**0) GeoFire has a hard dependency on the RSVP Promise library.** If you use NPM this shouldn't be an issue but if you include Firebase and GeoFire but neglect RSVP you'll be in for some needless trouble-- see [here](https://github.com/tildeio/rsvp.js/) for the RSVP docs.

**1) GeoFire needs its own reference**
When using Firebase you refer to individual data items by URL and subsequent references dangle off the root reference. With GeoFire you need to not only instantiate it but also make make sure to reference your root Firebase reference (or a valid sub-reference.)

Here's an example: 

{% highlight javascript %}

var rootRef = new Firebase('https://YOUR_FIREBASE_URL.firebaseio.com');
var subRef1 = ref.child("dataBucket1");
var subRef2 = ref.child("dataBucket2");

var geoRef = new GeoFire(rootRef); //This now has access to the root reference's data source

{% endhighlight %}

**2) Querying doesn't work the way you probably think it does**
With GeoFire there is no notion of "return 7 coordinates that are withing 3km of a given point." Instead you create a geoQuery and add listeners for when keys "enter" the query and when they exit the query. 


{% highlight javascript %}

//Query valid GeoFire for items that are within 5000km from 50 degrees latitude, 50 degrees longitude
var geoQuery = geoRef.query({
      center: [50,50],
      radius: 5000
});

geoQuery.on("key_entered", function(key, location, distance) {  
  //Do something with each entity that matches your query
  //You have access to its objectid/key, coordinates, and distance from your center
});

{% endhighlight %}


**3) Coordinates DO NOT live directly on your data**
Again, GeoFire is an add-on to Firebase and lives alongside your existing data but does not become its own property. 

For instance imagine we have a bunch of comments with which we want to associate a location. What you would need to do is grab the key of the of comment and then create a GeoFire entry.

It might look something like this:

{% highlight javascript %}
var rootRef = new Firebase('https://YOUR_FIREBASE_URL.firebaseio.com');

/** Tidy namespacing: comments live in /commentsBox, coordinates will live in /geolocations **/
var commentsRef = rootRef.child("commentsBox");
var geoRef = ref.child("geolocations");

var keyRef = commentsRef.push({text: "my swell message"}); //This adds a new entry to Firebase and keyRef will then have access to a key() method

var geoFireInstance = new GeoFire(geoRef);

var randomLoc = [Math.random()*90, Math.random()*90]; //Lat/long must be an array

geoFireInstance.set(rootRef.key(), randomLoc);

{% endhighlight %}

The important thing to remember is that the coordinates are not directly attached to to the text nodes-- instead coordinates reference the key of the text in /commentsBox, like this:

![img]({{ site.url }}/images/diagrams/geofire_diagram.png)

To actually do something useful with this separation and and retrieve retrieve the text associated with a location, you would listen for geolocations that satisfy a GeoFire geoquery and then perform a sub-query on that key:

{% highlight javascript %}

// ... continuing from above
geoQuery.on("key_entered", function(key, location, distance) {  
   commentsRef
    .child(key)
    .once('value', function(snapshot) {
        console.log("The comment was", snapshot.val().text, "and it is", distance, "km away");
    });
});

{% endhighlight %}


**4) You can update the geoQuery object on the fly...but be careful**
Distances recalculate for new items but if you have preexisting items display somewhere, you'll need to handle recalculations yourself.

{% highlight javascript %}

var geoQuery = geoRef.query({
    center: [50,50],
    radius: 5000
});

//Change the center (ie update with a user's new location)
geoQuery.updateCriteria({
  center: [25, 25];
});

//Change the search radius-- add/contract as needed
geoQuery.updateCriteria({
  radius: 2000;
});


{% endhighlight %}


Those four ideas are a pretty good primer on the big ideas of GeoFire-- see below for some helpful readmes and examples of this killer library in action.


##Further Reading & Resources:
* [https://github.com/firebase/geofire-js-- see bottom for documentation on listeners](https://github.com/firebase/geofire-js)
* [https://geofire.firebaseapp.com/](https://geofire.firebaseapp.com/)
* [https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types](https://www.firebase.com/docs/web/guide/retrieving-data.html#section-event-types)
