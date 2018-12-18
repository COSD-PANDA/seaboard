---
schema: default
title: Police Vehicle Stops
department: Police
category:
  - Public Safety
resources:
  - name: Vehicle Stops (Oct 2017 - June 2018, new format)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_final_datasd.csv
    format: csv
  - name: Vehicle Stops (2017 - June 2018, old format)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_2017_datasd.csv
    format: csv
  - name: Vehicle Stops Search Details (Oct 2017 - June 2018, new format)
    url: >-
      http://seshat.datasd.org/pd/vehicle_stops_search_details_final_datasd.csv
    format: csv
  - name: Vehicle Stops Search Details (2017 - June 2018, old format)
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
date_modified: '2018-11-27'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
Vehicle stops made by the San Diego Police Department between 2014 and June 26, 2018. For stops made after June 26, 2018, please see the [Police RIPA Stops dataset](/datasets/police-ripa-stops/).

<!--more-->

For 2014 - 2016, all vehicle stops for that year are contained in one file. Stops occuring during 2017 and 2018 (through June 26) are divided into two files: one that matches the format of previous years, and one that matches the format of a new database the department began using in October 2017. Stop IDs are only unique within each file.

In certain cases, a search is conducted following a vehicle stop. To get information on any searches Police conducted, as well as the outcome of the stop, refer to the accompanying search details datasets. Search details can be joined to vehicle stops using a common `stop_id` field. A single `stop_id` could occur multiple times in the details datasets if Police took more than one action following a stop.

Field descriptions for this data are available in the <b>Vehicle Stops Dictionary</b>,
and race codes are documented in the <b>Vehicle Stops Race Codes</b> file.
