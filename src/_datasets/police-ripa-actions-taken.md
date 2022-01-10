---
schema: default
title: RIPA police stop data - actions taken
department: Police
category:
  - Public Safety
resources:
  - name: Actions taken
    url: >-
      https://seshat.datasd.org/pd/ripa_actions_taken_datasd.csv
    format: csv
  - name: Dictionary
    url: >-
      https://seshat.datasd.org/pd/ripa_actions_taken_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2019-04-16'
date_modified: '2021-09-30'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
Actions an officer took toward a person stopped by the San Diego Police Department. This data is collected according to requirements set forth in Government Code section 12525.5 that was enacted as a result of the Racial and Identity Profiling Act of 2015 (AB 953), also known as RIPA.

<!--more-->

The file contains one row per action per person stopped by Police. An officer may have taken more than one action toward a person. The person stopped is uniquely identified in the `pid` field, and the stop is uniquely identified in the `stop_id` field. These two fields can be used to join this dataset to the other RIPA datasets available at the following links:

{% include ripa-list.html %}

For more information about RIPA regulations, see the [California Code of Regulations final text](https://oag.ca.gov/sites/all/files/agweb/pdfs/ripa/stop-data-reg-final-text-110717.pdf?).