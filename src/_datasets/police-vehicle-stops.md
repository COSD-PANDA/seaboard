---
schema: default
title: Police Vehicle Stops
department: Police
category:
  - Public Safety
resources:
  - name: Vehicle Stops (year-to-date)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_2017_datasd.csv
    format: csv
  - name: Vehicle Stops Search Details (year-to-date)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_search_details_2017_datasd.csv
    format: csv
  - name: Vehicle Stops (2016)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_2016_datasd.csv
    format: csv
  - name: Vehicle Stops Search Details (2016)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_search_details_2016_datasd.csv
    format: csv
  - name: Vehicle Stops (2015)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_2015_datasd.csv
    format: csv
  - name: Vehicle Stops Search Details (2015)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_search_details_2015_datasd.csv
    format: csv
  - name: Vehicle Stops (2014)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_2014_datasd.csv
    format: csv
  - name: Vehicle Stops Search Details (2014)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_search_details_2014_datasd.csv
    format: csv
  - name: Vehicle Stops Dictionary
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_dictionary.csv
    format: csv
  - name: Vehicle Stops Race Codes
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_race_codes.csv
    format: csv
  - name: Vehicle Stops Search Details Dictionary
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_search_details_dictionary.csv
    format: csv
  - name: Vehicle Stops Search Details Description List
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_search_details_description_list.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2016-11-14'
date_modified: '2017-01-31'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
Vehicle stops made by the San Diego Police Department.
Vehicle Stops files contain all vehicle stops for a given year.

<!--more-->

Field descriptions for this data are available in the <b>Vehicle Stops Dictionary</b>,
and race codes are documented in the <b>Vehicle Stops Race Codes</b> file.

In certain cases a search is conducted following a vehicle stop.
Details about these searches are available in the <b>Vehicle Stops Search Details</b> files.
Field descriptions for this data are available in the <b>Vehicle Stops Search Details Dictionary</b>.
The stop outcomes are also listed in the <b>Vehicle Stops Search Details</b> files.

<b>NOTE</b>: Both Vehicle Stops and Vehicle Stops Search Details datasets
can be joined using the common `stop_id` field. There could be one more than one `search_id` per `stop_id`.
