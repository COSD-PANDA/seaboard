---
schema: default
title: Complaints Evaluated by the Commission on Police Practices 
department: Commission on Police Practices
category:
  - Public Safety
  - City Management
resources:
  - name: Cases FY22
    url: >-
      https://seshat.datasd.org/crb/crb_cases_fy2022_datasd.csv
    format: csv
  - name: Allegations FY22
    url: >-
      https://seshat.datasd.org/crb/crb_allegations_fy2022_datasd.csv
    format: csv
  - name: Body worn camera details FY22
    url: >-
      https://seshat.datasd.org/crb/crb_cases_bwc_fy2022_datasd.csv
    format: csv
  - name: Cases FY21
    url: >-
      https://seshat.datasd.org/crb/crb_cases_fy2021_datasd.csv
    format: csv
  - name: Allegations FY21
    url: >-
      https://seshat.datasd.org/crb/crb_allegations_fy2021_datasd.csv
    format: csv
  - name: Body worn camera details FY21
    url: >-
      https://seshat.datasd.org/crb/crb_cases_bwc_fy2021_datasd.csv
    format: csv
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
date_modified: '2022-12-02'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
In 2020, voter-approved Measure B created a new independent Commission on Police Practices (CPP) that replaced the Community Review Board on Police Practices (CRB). The CPP independently investigates officer-involved shootings, in-custody deaths, & other significant incidents in a process that is transparent and accountable to the community. The CPP also evaluates SDPD policies, practices, training, and protocols. This dataset includes all cases the CPP reviewed and closed out since the beginning of FY 2019.

<!--more-->

The mission of the Commission is to hold law enforcement accountable to the community and to increase community trust in law enforcement, resulting in increased safety for both the community and law enforcement. To learn more, visit [sandiego.gov/cpp/about](https://www.sandiego.gov/cpp/about)

Each case in this dataset is identified by a unique case `id` and case number. A single case may involve multiple allegations and multiple officers. In the FY2019 file, each row represents one allegation and finding per officer in the complaint. Each officer named in the complaint is assigned an anonymous person id in the `pid` field that is unique for that case `id`. Starting in FY2020, cases and allegation are in separate files that can be joined on the `id` and `case_number` fields.

The body worn camera details file included with this dataset lists each officer (`pid`) per complaint and whether that officer had a body worn camera on or off during the incident under review.