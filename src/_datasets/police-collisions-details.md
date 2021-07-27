---
schema: default
title: Traffic collisions - people and vehicles involved
department: Police
category:
  - Public Safety
resources:
  - name: Traffic collisions details (2015 through year-to-date)
    url: >-
      https://seshat.datasd.org/pd/pd_collisions_details_datasd.csv
    format: csv
  - name: Traffic collisions details dictionary
    url: >-
      https://seshat.datasd.org/pd/pd_collisions_details_dictionary_datasd.csv
    format: csv
  - name: person_veh_type dictionary
    url: >-
      https://seshat.datasd.org/pd/person_veh_type_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2020-08-12'
date_modified: '2021-07-26'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
Traffic collision reports recorded by the San Diego Police Department with additional details on people and vehicles involved.
<!--more-->

Generally a report is not taken for property damage-only collisions that do not involve hit & run or DUI. The California Highway Patrol is responsible for handling collisions occurring on the freeway.

A single collision may involve multiple people and/or vehicles. This dataset contains one row per person involved in a collision. Each collision is uniquely identified in the `report_id` field.

Throughout 2018 and 2019, a new collision reporting process was introduced that resulted in more detailed data collection. Data fields listed in the Data Dictionary that include ** in the description may have incomplete data values for history records.