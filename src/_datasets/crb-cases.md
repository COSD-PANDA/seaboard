---
schema: default
title: Complaints Evaluated by the Community Review Board on Police Practices 
department: Community Review Board on Police Practices
category:
  - Public Safety
  - City Management
resources:
  - name: Complaints FY20
    url: >-
      http://seshat.datasd.org/crb/crb_cases_fy2020_datasd.csv
    format: csv
  - name: Body worn camera details FY20
    url: >-
      http://seshat.datasd.org/crb/crb_cases_bwc_fy2020_datasd.csv
    format: csv
  - name: Complaints FY19
    url: >-
      http://seshat.datasd.org/crb/crb_cases_fy19_datasd.csv
    format: csv
  - name: Body worn camera details FY19
    url: >-
      http://seshat.datasd.org/crb/crb_cases_bwc_fy19_datasd.csv
    format: csv
  - name: Dictionary
    url: >-
      http://seshat.datasd.org/crb/dictionary.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2019-09-04'
date_modified: '2019-09-04'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
The Community Review Board on Police Practices, known as the CRB, was established by San Diego voters in 1988 to review and evaluate complaints filed by the public against members of the City of San Diego Police Department. The CRB reviews and evaluates the administration of discipline arising from sustained complaints, all officer-involved shootings, and all in-custody death cases.  In addition, the Board makes recommendations to the Chief of Police regarding the San Diego Police Department’s policies and procedures.

<!--more-->

This dataset includes all cases the CRB reviewed and closed out since the beginning of FY 2019, identified by a unique case ID. A single case may involve multiple allegations and multiple officers. Each row in this data represents one allegation and finding per officer in the complaint. Each officer named in the complaint is assigned an anonymous person id in the pid field that is unique for that case ID.

The body worn camera details file included with this dataset lists each officer (pid) per complaint and whether that officer had a body worn camera on or off during the incident under review.