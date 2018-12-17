---
schema: default
title: Police RIPA Stops
department: Police
category:
  - Public Safety
resources:
  - name: RIPA stops (July to September 2018)
    url: >-
      http://seshat.datasd.org/pd/pd_ripa_stops_datasd.csv
    format: csv
  - name: RIPA stops details (July to September 2018)
    url: >-
      http://seshat.datasd.org/pd/pd_ripa_details_datasd.csv
    format: csv
  - name: RIPA stops dictionary
    url: >-
      http://seshat.datasd.org/pd/pd_ripa_stops_dictionary_datasd.csv
    format: csv
  - name: RIPA stops details dictionary
    url: >-
      http://seshat.datasd.org/pd/pd_ripa_details_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2018-11-09'
date_modified: '2018-11-09'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
RIPA stops made by the San Diego Police Department for a given year.  RIPA stops files conform to the data collection requirements set forth in Government Code section 12525.5 that was enacted as a result of the Racial and Identity Profiling Act of 2015 (AB 953). RIPA stops data collection began on July 1, 2018.

<!--more-->

This data is divided into two datasets: one stops dataset and one stops details dataset.

The stops dataset contains one row per person stopped by Police with information such as race, gender, age, stop reason, and stop result. Each row has a pid for the person stopped and a stop_id for the stop. Multiple people involved in the same stop have the same stop_id. Some of the person and stop attributes in this data had multiple values. In this case, the values are split into multiple columns with incrementing numbers appeneded. The total number of columns is equal to the number of values for the pid with the most, but not every pid will have a value for every column.

The details dataset contains information about actions taken as a result of the stop, such as searches and arrests, and other details, such as search details, contraband or evidence found, and property seized. Each piece of detail has its own row, with the stop_id and pid in common with the main stops data.

For more information about RIPA regulations, see the [California Code of Regulations final text](https://oag.ca.gov/sites/all/files/agweb/pdfs/ripa/stop-data-reg-final-text-110717.pdf?).