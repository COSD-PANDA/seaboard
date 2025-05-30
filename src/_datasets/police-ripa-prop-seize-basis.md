---
schema: default
title: RIPA police stop data - basis for property seizure
department: Police
category:
  - Public Safety
resources:
  - name: Basis for property seizure
    url: >-
      https://seshat.datasd.org/police_ripa_prop_seize_basis/ripa_prop_seize_basis_datasd.csv
    format: csv
  - name: Basis for property seizure - Historic
    url: >-
      https://seshat.datasd.org/police_ripa_prop_seize_basis/ripa_prop_seize_basis_historic.csv
    format: csv
  - name: Dictionary
    url: >-
      https://seshat.datasd.org/police_ripa_prop_seize_basis/ripa_prop_seize_basis_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2019-04-16'
date_modified: '2025-04-24'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
Basis for seizing property from persons stopped by the San Diego Police Department. This data is collected according to requirements set forth in Government Code section 12525.5 that was enacted as a result of the Racial and Identity Profiling Act of 2015 (AB 953), also known as RIPA.

<!--more-->

The file contains one row per property seizure basis per person stopped by police, if property were seized. Police may have seized multiple types of property per person stopped, or none. The person stopped is uniquely identified in the `pid` field, and the stop is uniquely identified in the `stop_id` field. These two fields can be used to join this dataset to the other RIPA datasets available at the following links:

{% include ripa-list.html %}

For more information about RIPA regulations, see the [California Code of Regulations final text](https://oag.ca.gov/system/files/media/ripa-final-text-of-proposed-regulations.pdf).