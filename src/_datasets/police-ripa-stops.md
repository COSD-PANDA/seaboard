---
schema: default
title: Police RIPA Stops
department: Police
category:
  - Public Safety
resources:
  - name: RIPA stops (July to September 2018)
    url: >-
      http://seshat.datasd.org/pd/ripa_stops_datasd.csv
    format: csv
  - name: RIPA stops dictionary
    url: >-
      http://seshat.datasd.org/pd/ripa_stops_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2018-11-09'
date_modified: '2018-11-09'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
RIPA stops made by the San Diego Police Department for a given year.  RIPA stops files conform to the data collection requirements set forth in Government Code section 12525.5 that was enacted as a result of the Racial and Identity Profiling Act of 2015 (AB 953). RIPA stops data collection began on July 1, 2018.

<!--more-->

This dataset represents the basic stop data that is available. The file contains one row per person stopped by Police with both a `pid`, a unique identifier for the person stopped, and a `stop_id`, a unique identifier for the stop. A single stop may involve multiple people, so any given `stop_id` may have more than one associated `pid`.

To get additional details about the person stopped, such as the race, gender, and age , and about the stop, such as actions taken and reason for the stop, join this basic stop data to one of 12 other datasets available at the following links:

[Stops basic](/datasets/police-ripa-stops/)
[Race](/datasets//)
[Gender](/datasets//)
[Disability](/datasets//)
[Stop reason](/datasets//)
[Stop result](/datasets//)
[Actions taken](/datasets//)
[Search basis](/datasets//)
[Contraband/Evidence](/datasets//)
[Property seized](/datasets//)
[Property seizure basis](/datasets//)

For more information about RIPA regulations, see the [California Code of Regulations final text](https://oag.ca.gov/sites/all/files/agweb/pdfs/ripa/stop-data-reg-final-text-110717.pdf?).