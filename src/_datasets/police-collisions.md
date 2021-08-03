---
schema: default
title: Traffic collisions - basic reports
department: Police
category:
  - Public Safety
resources:
  - name: Traffic collisions (2015 through year-to-date)
    url: >-
      https://seshat.datasd.org/pd/pd_collisions_datasd_v1.csv
    format: csv
  - name: Traffic collisions dictionary
    url: >-
      https://seshat.datasd.org/pd/pd_collisions_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2017-05-03'
date_modified: '2021-08-02'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
Traffic collision reports recorded by the San Diego Police Department.
<!--more-->

Generally a report is not taken for property damage-only collisions that do not involve hit & run or DUI. The California Highway Patrol is responsible for handling collisions occurring on the freeway.

This dataset includes basic information about collisions. Each row has a `report_id`, a unique identifier for the collision. A single collision may involve multiple people and/or vehicles. For collisions data that includes details about people and vehicles, use the [Traffic Collisions Details](/datasets/police-collisions-details/) dataset.