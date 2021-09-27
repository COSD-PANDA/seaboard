---
schema: default
title: RIPA police stop data - property seized
department: Police
category:
  - Public Safety
resources:
  - name: Property seized
    url: >-
      https://seshat.datasd.org/pd/ripa_prop_seize_type_datasd.csv
    format: csv
  - name: Dictionary
    url: >-
      https://seshat.datasd.org/pd/ripa_prop_seize_type_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2019-04-16'
date_modified: '2021-06-30'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
Type of property seized from persons stopped by the San Diego Police Department. This data is collected according to requirements set forth in Government Code section 12525.5 that was enacted as a result of the Racial and Identity Profiling Act of 2015 (AB 953), also known as RIPA.

<!--more-->

The file contains one row per type of property seized per person stopped by Police, if property were seized. Police may have seized multiple types of property per person stopped, or none. The person stopped is uniquely identified in the `pid` field, and the stop is uniquely identified in the `stop_id` field. These two fields can be used to join this dataset to the other RIPA datasets available at the following links:

{% include ripa-list.html %}

For more information about RIPA regulations, see the [California Code of Regulations final text](https://oag.ca.gov/sites/all/files/agweb/pdfs/ripa/stop-data-reg-final-text-110717.pdf?).