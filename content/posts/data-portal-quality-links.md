---
schema: default
title: Dataset download links have changed
date: 2019-06-10 14:00:00
thumbnail:
author:
    name: Andrell Bower
---

Most of the data published on this portal is updated via our automation system, which allows us to provide daily updates to hundreds of files. This would not be possible if we manually updated the data. The other side of this coin is that because we are not manually updating data, we are not manually checking the quality. Things happen to the data that we don't always catch until someone in the community spots the problem and lets us know. 

We've been working on a project to build quality checks into our automation process so that this happens less frequently. As a result of this, we've had to make some changes across all of our data files, including standardizing field names.

We know that changing field names could cause scripts that pull our data to break, so starting June 10, 2019, we are outputting the updated data files with file names that have a version number added to the end. The old files will still be available under the existing file names, but the data will not be updated at that location. 

If you normally download our data by clicking the little blue arrow button on the dataset pages, then you don't need to worry about this! However, if you ingest our data by making a request via URL, you will need to update your scripts. The links to all of our data files will have "_v1" appended to indicate they are version 1. If we ever need to make changes to the schemas in the future, we will increase the version number for that data file.

Some of the quality issues we will be addressing by the end of the project include unexpected missing values, dates that are outside of the temporal coverage for that file, geocodes that are outside of the bounding box for that file, numeric values that are suddenly much higher or much lower than the average or median, and many others. The automation system will alert us when it finds these problems, and we'll look into it and fix it if needed.