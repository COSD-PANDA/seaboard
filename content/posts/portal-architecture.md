---
schema: default
title: The building blocks of an Open Data portal
date: 2017-06-05 00:00:00
thumbnail: /assets/img/stories/new-portal.jpg
author:
    name: Andrell Bower
---

When I wrote about [how we launched a homemade Open Data portal](https://data.sandiego.gov/stories/portal-refresh/), I made the claim that a data portal is just a website with a catalog of datasets. 

A few companies sell expensive portal products to governments. These companies take care of hosting the datasets and running that website I’m referring to, where people visit to download the data. Some of these portals also give users limited ability to search, filter, and chart data without downloading it.

We wanted to have more control over our portal. We had ideas for how it should look and how it should work. Some of these ideas are included in a [piece of guidance the Civic Analytics Network wrote](http://datasmart.ash.harvard.edu/news/article/an-open-letter-to-the-open-data-community-988) for Open Data programs.

We could also save the City of San Diego money, so we figured we would make our own website and find a place to host our datasets. We used a bunch of tools to make accomplishing these simple objectives even easier. What follows is an overview of those tools.
<!--more-->

### Github: Stores our code, allows us to collaborate
Our team of three collaborated on content and code for the portal. Our codebase lives in this [Github repo](https://github.com/cityofsandiego/seaboard). Team members can pull down the code, add to it and change it, then submit the changes where the whole team can review and incorporate them. 

When we push to certain Github branches, we trigger [Circle CI](http://circleci.com/) to deploy a new copy of the site to either staging or production. We use the staging site for internal review, for example when we have a new dataset to publish and need to run it by someone in the owning City department. Once we have production-ready code, that goes live on our server.

### Jekyll: static site builder
[Jekyll](http://jekyllrb.com/) is a major tool we use to create the website. With Jekyll, we can put content into a mix of different file types —  HTML, Markdown, YAML  —  and easily compile them all into a static website. We don’t require a database backing up our site, and we don’t have to have a [Content Management System](https://en.wikipedia.org/wiki/Content_management_system) like WordPress.

### Circle CI: Deploys our code
[Circle CI](http://circleci.com/) makes deployment simpler and reduces potential for human error. Circle CI deploys to Amazon S3. Depending upon which Github branch we push to, Circle CI can figure out whether to deploy to our staging site or our production site.

### Amazon S3: Hosts our content
[Amazon S3](https://aws.amazon.com/s3/) hosts our portal in two buckets: 1. The bucket for our static site files, and 2. The bucket for our dataset files. This way, each dataset has its own url that developers can build applications off of, knowing that the data will always be updated there and it won’t suddenly become unavailable if the City’s network or the portal go down for some reason.

### Cloudfront: Serves our static site
Amazon’s [Cloudfront](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html) distributes our static site content to each of multiple servers across the world, also known as Edges. So, when a user visits our portal from China, for example, she is routed to a server closest to her, making the portal experience faster.

### Lambda & Polymer: Create data previews
Our datasets are updated often, some daily. But we needed a way to provide a fresh preview of the data each time a user visits a dataset page. We also didn’t want to load the entirety of a large dataset onto the page, because that would be slow.

Our solution was to use a [Polymer component](https://www.webcomponents.org/) built into the template of our dataset pages. It makes a request with the URL of the dataset as a parameter. A [Lambda function](https://aws.amazon.com/lambda/) picks the request up, goes to S3, streams the first 10 rows and returns them as JSON. Then the Polymer component displays the resulting JSON.

### Keen: Monitors data updates and tracks portal usage
Lambda makes another appearance here. We have a function that checks log files in our Amazon buckets and sends information to [Keen.io](https://keen.io/). We then use Keen to track specific events of interest taken out of the log information, like when a dataset is uploaded, or when someone visits a page on the portal.

We use Keen’s API to put metrics for daily dataset updates on the portal homepage. But that’s just the beginning.

We offer this overview because we want you to be able to copy our work. Open source code is important to us  —  after all, our work IS taxpayer funded. Please, visit our [Github repo](https://github.com/cityofsandiego/seaboard) where you can copy our data portal and use it as a basis for your own. But know that copying those files is only part of the work involved. Knowledge of the extra tools and processes will help you get the job done.
