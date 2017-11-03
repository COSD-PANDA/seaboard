---
schema: default
title: Solar Permits Prediction
date: 2017-10-27 00:00:00
thumbnail: /assets/img/stories/solar_prediction_screenshot.png
author:
    name: Randy Askin
---
The [2017 GE Minds & Machines](https://www.ge.com/digital/minds-machines) conference featured an "Appathon" where teams were challenged to come up with a working application in a day and a half. The challenge theme was all about decarbonization, decentralization, and digitization in the global energy sector. Each team was provided with a Predix Kit that included an Intel Nook and various sensors, sample data from power grid feeders in Ireland, and access to the [CityIQ API](http://developer.currentbyge.com/cityiq) for accessing the intelligent street lamps in the city of San Diego.

<!--more-->

Our team took inspiration from [Google's "Project Sunroof,"](https://www.google.com/get/sunroof/data-explorer/) which analyzes satellite imagery and 3D renderings of rooftops in various cities to calculate potential savings from solar energy. Our idea was to take this data for solar potential, subtract the existing installations extrapolated from the [permit dataset on data.sandiego.gov](https://data.sandiego.gov/datasets/solar-permits/), and use the city budget and other financial information to provide city planners with strategic information around solar subsidies.

We also built a regression model using [Predix](http://predix.io) analytics and services to calculate the best way to balance residential, commercial, and industrial solar installations to arrive at the city's goal of carbon neutrality by 2035. Our basic finding was that, even though commercial and industrial buildings generally have larger rooftop footprints, the most economical and scalable solution would be to target widespread residential installations. We then used income data for households in the area to estimate the relative affordability and required subsidies for various income brackets in San Diego.

### Check it out!

* [Devpost](https://devpost.com/software/mm17)
* [Running Application](https://solar-sd.run.aws-usw02-pr.ice.predix.io/)
* [Github](https://github.com/randyaskin/mm17)
