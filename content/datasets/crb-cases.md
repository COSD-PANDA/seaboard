---
title: Complaints Evaluated by the Community Review Board on Police Practices 
departments: Community Review Board on Police Practices
categories:
  - Public Safety
  - City Management
resources:
  - name: Cases FY20
    url: >-
      https://seshat.datasd.org/crb/crb_cases_fy2020_datasd.csv
    format: csv
  - name: Allegations FY20
    url: >-
      https://seshat.datasd.org/crb/crb_allegations_fy2020_datasd.csv
    format: csv
  - name: Body worn camera details FY20
    url: >-
      https://seshat.datasd.org/crb/crb_cases_bwc_fy2020_datasd.csv
    format: csv
  - name: Cases and allegations, FY19
    url: >-
      https://seshat.datasd.org/crb/crb_cases_fy19_datasd.csv
    format: csv
  - name: Body worn camera details FY19
    url: >-
      https://seshat.datasd.org/crb/crb_cases_bwc_fy19_datasd.csv
    format: csv
  - name: Dictionary
    url: >-
      https://seshat.datasd.org/crb/dictionary.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2019-09-04'
date_modified: '2020-11-24'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
The Community Review Board on Police Practices, known as the CRB, was established by San Diego voters in 1988 to review and evaluate complaints filed by the public against members of the City of San Diego Police Department. The CRB reviews and evaluates the administration of discipline arising from sustained complaints, all officer-involved shootings, and all in-custody death cases.  In addition, the Board makes recommendations to the Chief of Police regarding the San Diego Police Department’s policies and procedures.

<!--more-->

This dataset includes all cases the CRB reviewed and closed out since the beginning of FY 2019, identified by a unique case `id` and case number. A single case may involve multiple allegations and multiple officers. In the FY2019 file, each row represents one allegation and finding per officer in the complaint. Each officer named in the complaint is assigned an anonymous person id in the `pid` field that is unique for that case `id`. Starting in FY2020, cases and allegation are in separate files that can be joined on the `id` and `case_number` fields.

The body worn camera details file included with this dataset lists each officer (`pid`) per complaint and whether that officer had a body worn camera on or off during the incident under review.