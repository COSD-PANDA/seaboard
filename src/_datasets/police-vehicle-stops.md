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
Vehicle stops made by the San Diego Police Department between 2014 and June 26, 2018. For stops made after June 26, 2018, please see the Police RIPA Stops dataset.

<!--more-->

For 2014 - 2016, all stops are contained in the vehicle stops files for each year. Additional information, including searches and stop outcomes, can be found in the vehicle stops search details dataset for that same year. These companion datasets can be joined using a common stop_id field.

Beginning in October 2017, SDPD began using a second database to store vehicle stop information. Vehicle stops for the years 2017 and 2018 are combined and  

Field descriptions for this data are available in the <b>Vehicle Stops Dictionary</b>,
and race codes are documented in the <b>Vehicle Stops Race Codes</b> file.

In certain cases a search is conducted following a vehicle stop.
Details about these searches are available in the <b>Vehicle Stops Search Details</b> files.
Field descriptions for this data are available in the <b>Vehicle Stops Search Details Dictionary</b>.
The stop outcomes are also listed in the <b>Vehicle Stops Search Details</b> files.

<b>NOTE</b>: Both Vehicle Stops and Vehicle Stops Search Details datasets
can be joined using the common `stop_id` field. There could be one more than one `search_id` per `stop_id`.
