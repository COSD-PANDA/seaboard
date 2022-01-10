---
schema: default
title: RIPA police stop data - basis for searches conducted
department: Police
category:
  - Public Safety
resources:
  - name: Basis for searches conducted
    url: >-
      https://seshat.datasd.org/pd/ripa_search_basis_datasd.csv
    format: csv
  - name: Dictionary
    url: >-
      https://seshat.datasd.org/pd/ripa_search_basis_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2019-04-16'
date_modified: '2021-09-30'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
The basis for any search conducted as part of stop by the San Diego Police Department. This data is collected according to requirements set forth in Government Code section 12525.5 that was enacted as a result of the Racial and Identity Profiling Act of 2015 (AB 953), also known as RIPA.

<!--more-->

The file contains one row for each reason a search was conducted per person stopped by police, if a search occurred. Police may not have conducted any searches during a stop, or police may have had more than one reason to search a stopped person and/or the person's property. The person stopped is uniquely identified in the `pid` field, and the stop is uniquely identified in the `stop_id` field. These two fields can be used to join this dataset to the other RIPA datasets available at the following links:

{% include ripa-list.html %}

For more information about RIPA regulations, see the [California Code of Regulations final text](https://oag.ca.gov/sites/all/files/agweb/pdfs/ripa/stop-data-reg-final-text-110717.pdf?).