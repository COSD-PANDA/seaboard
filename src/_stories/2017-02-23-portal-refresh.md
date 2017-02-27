---
schema: default
title: A better open data portal
date: 2017-02-23 00:00:00
thumbnail: /assets/img/stories/portal-compare.png
author:
    name: Andrell Bower
---

We are excited - and somewhat exhausted - to present to San Diegans a new and improved Open Data portal today.

The portal has a fresh look, but more importantly, we rebuilt the technology behind the portal and upgraded our workflow for keeping data up-to-date.

<!--more-->

### Just yesterday

![Screenshot of San Diego's old open data portal](/assets/img/stories/old-portal.png)

We initially launched our data portal by buying a ready-made portal product from a company. As our team was newer, this made a lot of sense, and the portal the vendor made for us was exactly what we needed at that time.

But we’ve always had a long-term vision for open data that relied on high-tech strategies. We never wanted to publish data that was manually updated. We want City employees to spend their time using data to serve residents, not trying to remember to update data on an open data portal. We also want our data to be put to use helping the City perform better. This means the data needs to be accessible not only for simple downloads, but also for alerting, prediction, and other advanced analytics.

Ready-made portal products are more geared toward a manual update process, so when we started working to automate data updates late last year, our automation solution didn’t work as well with our portal product as we had hoped.

Normally, a client uploads a dataset to its cloud, and then that dataset is available for download, for preview in the browser, and through its data API.

But we were not hosting our data in the cloud service our portal provider offered. We used Amazon’s S3 cloud service to host our data and then linked the files to the portal. Not using a direct upload limited our ability to show a preview in the browser or make the data API available without manual intervention. We also couldn’t trigger a change in the extremely important metadata field of “Date Updated” without a manual upload.

Although a ready-made portal product is convenient, it is also expensive. Adding functionality and features as we sought continuous improvement in our program would end up costing taxpayers money that could be better spent. 

Taking all of these factors together, we decided to take San Diego’s open data program to another level and build a portal ourselves. We have an amazing team with the technical expertise to run our own data portal, so we went for it!

### Today

![Screenshot of San Diego's new open data portal](/assets/img/stories/new-portal.png)

At a minimum, a data portal is just a website. All it really needs is a page with a list of datasets (the catalog) and individual pages for each dataset that contain links to download the data. A ready-made portal product is a website with an admin interface that makes it easy for just about anybody to manually update data. But driven by our desire to be a government as innovative as the people we serve, our expectations far exceed the minimum.

The reality is that some open data programs do depend on employees to upload data manually. This is because open data became a thing long after government and technology were invented. In fact, doing open data well is very, very, very complex (did we say very?). Not all departments and divisions of a government use the same database technology. Government information is housed in hundreds of different systems or even on spreadsheets in shared drives. Some data even comes from third-parties that are contracted to provide services on behalf of a government, and therefore maintain data on their own servers.

Our team spent a significant amount of time writing code to build our automation process that pulls in data from our City’s various systems, transforms it, and puts it into the our cloud. We could have probably scripted a solution that would copy files from our cloud to the portal cloud. But it would have taken some work, and the effort would be hampered by the fact that we don’t have control over a product made by an outside company. As they upgraded their product, our script might have broken over, and over again.

A portal we created that worked perfectly with our automation process was the obvious solution. However, we can’t take ALL the credit for this new portal. We based our new portal on an open-source project by [Tim Wisniewski](http://github.com/timwis), Chief Data Officer for the City of Philadelphia. The open-source portal he created, called [JKAN](https://github.com/timwis/jkan), was instrumental in getting us up and running with our own version. (Thanks, Tim!!!)

### Tomorrow+

Moving forward, this data portal is the new hub for all open data and analytics projects for the Performance & Analytics Department. We used to maintain a separate informational site, datasd.org, that we no longer need since we have full control over this one. Keep checking back for the latest news, how-tos, data stories, visualizations, and of course, the most up-to-date City data.

If you are intrigued by the work we’ve done, our portal is also open-source! [Check out our code](https://github.com/cityofsandiego/seaboard), copy it, and make your own data portal, aka website with a catalog. We use [Jekyll](https://jekyllrb.com/docs/home/), a static site generator, to manage all the files and pages of our portal.

You also need to check out our [automation process](https://github.com/mrmaksimize/docker-airflow). We are using Airflow, another open-source tool, [originally developed by AirBnB](http://nerds.airbnb.com/airflow/) to improve workflow for employees who crunch data. 

Basically, each little task that we need to complete when we extract and transform data is handled with bits of Python code. Examples of these tasks include connecting to a database, pulling a file from one of the City’s shared drives, detecting the current date and using that to grab the correct time interval of data, etc.

Airflow keeps all these bits organized into a hierarchy of jobs, and we get alerts if anything fails. We can also use Airflow to schedule automatic kick-off of jobs, which is one of the major headaches of automation. Keep an eye on this blog for more in-depth and technical explanations of how we are using Airflow.

If you are a person who was using the data API from our previous portal, you will have to instead have to work with the link to the csv. We also had to change how we stored data in our cloud, so please plan on updating any previous links to csv files by the end of March. You can get updated links by checking the dataset pages on this new portal.

We hope you love this new portal, and we especially hope you love having automatically updated data!  Let us know what you think.