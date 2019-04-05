---
schema: default
title: Reason for stop for persons stopped by Police (RIPA reporting)
department: Police
category:
  - Public Safety
resources:
  - name: Reason for stop
    url: >-
      http://seshat.datasd.org/pd/ripa_stop_reason_datasd.csv
    format: csv
  - name: Dictionary
    url: >-
      http://seshat.datasd.org/pd/ripa_stop_reason_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2019-04-04'
date_modified: '2019-04-04'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
The primary reason a person was stopped by the San Diego Police Department. This data is collected according to requirements set forth in Government Code section 12525.5 that was enacted as a result of the Racial and Identity Profiling Act of 2015 (AB 953), also known as RIPA.

<!--more-->

The file contains one row per detailed reason per person stopped by Police. An officer may only record one primary reason for stopping a person; however additional details related to the primary reason may result in multiple rows per person stopped by Police. The person stopped is uniquely identified in the `pid` field, and the stop is uniquely identified in the `stop_id` field. These two fields can be used to join this dataset to the other RIPA datasets available at the following links:

{% include ripa-list.html %}

For more information about RIPA regulations, see the [California Code of Regulations final text](https://oag.ca.gov/sites/all/files/agweb/pdfs/ripa/stop-data-reg-final-text-110717.pdf?).