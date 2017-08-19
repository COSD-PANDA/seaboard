---
schema: default
title: Our geo data has become more relevant
date: 2017-08-19 00:00:00
thumbnail: /assets/img/stories/zoning-workflow.jpg
author:
    name: Arnaud Vedy
---

Dear readers  / followers, we have some exciting news!
Our geographic data is now integrated with [Poseidon](https://data.sandiego.gov/stories/why-data-automation-matters-data-portals/){:target="_blank"}, our data automation system.

**What does this mean for you?**

<!--more-->

### Current geo data

It means you now have access to the most current geographic data at all times. Some data sources are updated every month. For others, this process occurs on a daily basis. No matter the schedule of the dataset, our portal will now automatically update along with it. This ensures that as a user of the portal, you will be retrieving the most up-to-date data available.
![Data automation workflow for our zoning geo datasets](/assets/img/stories/zoning-workflow.jpg)

### New formats

Until recently, we were sharing geo data exclusively as shapefiles - one of the most commonly used format for geo data. Nevertheless, there are a few reasons why it should not be the only format of geo data offered on an open data portal:

+ It is not an open standard format.
+ It is actually multiple files. These files need to be zipped, making it inconvenient to share.
+ It is not a practical format for web developers. Few web mapping javascript libraries support shapefiles natively, which usually leads to data conversion.
+ It is not the most practical format for non-technical users. It requires software installation to be visualized / used for data analysis.


For these reasons, we have decided to provide you with additional geo data formats. For now (and we will be adding more) they are: GeoJSON, TopoJSON, and Geobuf.
![New geo data formats on the open data portal](/assets/img/stories/zoning-files.png)

- **GeoJSON**: This is the most common alternative to shapefiles. [GeoJSON](http://geojson.org/){:target="_blank"} is an open standard format based on the JSON specification. It is supported by most desktop and web based mapping/GIS solutions. Geo data in this format is also human-readable. This means it can be opened with a text editor, which make it very easy to use. The only drawback with GeoJSON when compared to shapefile is size. This is a consequence of GeoJSON's lack of topology support.

- **TopoJSON**: This [format](https://github.com/topojson/topojson){:target="_blank"} is an extension of GeoJSON that encodes topology. As a result, TopoJSON files that contain line and polygon geometries are significantly smaller than both GeoJSON and shapefiles.

- **Geobuf**: [Geobuf](https://github.com/mapbox/geobuf){:target="_blank"} is a relatively new format introduced by Mapbox. Geobuf provides lossless compression of GeoJSON data into [protocol buffers](https://developers.google.com/protocol-buffers/){:target="_blank"}. It is fast to decode and very light, making it attractive for developers who want to use large geo datasets in their web applications.
Here is a comparative table to demonstrate the compression power of the Geobuf specification on our data:

<!-- Dataset               | Data Type | GeoJSON | Geobuf  | Compression factor
----------------------|-----------|---------| --------|-------------------
right_of_way_datasd   |  Polygon  |138.1 MB | 4.7 MB  | ~ 29.4 x
roads_datasd          | LineString|92.7 MB  | 7.9 MB  | ~ 11.7 x
address_datasd        | Point     |175.3 MB | 15.7 MB | ~ 11.2 x -->

![comparative table](/assets/img/stories/comparative-table-geobuf.png)

So, you now have access to the most current geo data in multiple formats and we are pretty excited about it. What will you do with it? Let us know at [data@sandiego.gov](data@sandiego.gov) and stay tuned for more announcements!
