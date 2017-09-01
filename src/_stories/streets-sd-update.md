---
schema: default
title: A few updates to StreetsSD
date: 2017-09-01 00:00:00
thumbnail: /assets/img/stories/streets_with_search.jpg
author:
    name: Maksim Pecherskiy
---
Hey there everyone!  For all the fans of [StreetsSD](http://streets.sandiego.gov) we have some great news!

We recently completed a small sprint and made a few fixes and improvements.

<!--more-->

We love listening to our users, and one of the most requested features has been a way to type in an address and see what streets have been or will be repaired around where you live or work.

We implemented an autocompleting search using Mapzen's awesome [search api](https://mapzen.com/products/search/).  Now you can search for a place (like Balboa Park), or an address and it will zoom right in for you:

![StreetsSD Search](/assets/img/stories/streets_with_search.jpg)

We also made a few performance tweaks by moving hosting from Github Pages to Amazon S3 and CloudFront to align with our overall infrastructure and deployment strategy.  Hopefully sometime soon we'll be able to make a few tweaks [like we did on data.sandiego.gov](https://data.sandiego.gov/stories/portal-speedup/) to significantly increase the loading speed.

Finally, there is one more tweak we made, but we're not ready to talk about it yet, because it needs a bigger piece before it goes into production.  However, you can probably find it by [looking at the open source code](https://github.com/cityofsandiego/streetsSD) driving StreetsSD.

As always, we learn, iterate and continuously improve our products.  [We Love To Hear and Implement your suggestions!](https://github.com/cityofsandiego/streetsSD/issues)!

But we love pull requests even more!
