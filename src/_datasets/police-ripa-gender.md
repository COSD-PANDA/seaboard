---
schema: default
title: RIPA police stop data - gender of persons stopped
department: Police
category:
  - Public Safety
resources:
  - name: (Deprecated) Gender of persons
    url: >-
      https://seshat.datasd.org/police_ripa_gender/ripa_gender_datasd.csv
    format: csv
  - name: Gender of persons - Historic
    url: >-
      https://seshat.datasd.org/police_ripa_gender/ripa_gender_historic.csv
    format: csv
  - name: Dictionary
    url: >-
      https://seshat.datasd.org/police_ripa_gender/ripa_gender_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2019-04-16'
date_modified: '2024-10-16'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---

**This dataset has been retired and similar information is contained within the [Stops](https://data.sandiego.gov/datasets/police-ripa-stops/) data.**

The gender of persons stopped by the San Diego Police Department, as perceived by the officer conducting the stop. This data is collected according to requirements set forth in Government Code section 12525.5 that was enacted as a result of the Racial and Identity Profiling Act of 2015 (AB 953), also known as RIPA.

<!--more-->

The file contains one row per perceived gender per person stopped by Police. An officer may perceive more than one gender for a person stopped. The person stopped is uniquely identified in the `pid` field, and the stop is uniquely identified in the `stop_id` field. These two fields can be used to join this dataset to the other RIPA datasets available at the following links:

{% include ripa-list.html %}

For more information about RIPA regulations, see the [California Code of Regulations final text](https://oag.ca.gov/sites/all/files/agweb/pdfs/ripa/stop-data-reg-final-text-110717.pdf?).