---
schema: default
title: RIPA police stop data - basic details
department: Police
category:
  - Public Safety
resources:
  - name: Stop details
    url: >-
      https://seshat.datasd.org/police_ripa_stops/ripa_stops_datasd.csv
    format: csv
  - name: Stop details - Historic
    url: >-
      https://seshat.datasd.org/police_ripa_stops/ripa_stops_historic.csv
    format: csv
  - name: Dictionary
    url: >-
      https://seshat.datasd.org/police_ripa_stops/ripa_stops_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2019-04-16'
date_modified: '2025-04-24'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
All stops made by the San Diego Police Department. Data collected from these stops conforms to requirements set forth in Government Code section 12525.5 that was enacted as a result of the Racial and Identity Profiling Act of 2015 (AB 953). RIPA stops data collection began on July 1, 2018. Data on stops made before July is limited to vehicle stops and can be found in the [police vehicle stops dataset](/datasets/police-vehicle-stops/)

<!--more-->

This dataset includes basic information about a police stop that occurred, including stop date, time, duration and location, as well as a few details about the person stopped. Each row is a person stopped with both a `pid`, a unique identifier for the person, and a `stop_id`, a unique identifier for the stop. A single stop may involve multiple people, so any given `stop_id` may have more than one associated `pid`.

The dataset is divided into two files, historic and current, because of changes in data collection requirements. Stop ids are unique only within each file and may repeat across files.

To get additional details about the person stopped, such as the race, gender, and disability, as well as more information about the stop, such as actions taken and reason for the stop, join this basic stop data to the other datasets (only joining together historic datasets to other historic datasets)

{% include ripa-list.html %}

For more information about RIPA regulations, see the [California Code of Regulations final text](https://oag.ca.gov/system/files/media/ripa-final-text-of-proposed-regulations.pdf).