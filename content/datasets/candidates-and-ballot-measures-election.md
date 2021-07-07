---
title: Candidates and Ballot Measures Receiving Financial Support
departments: City Clerk
categories:
  - Economy & Community
resources:
  - name: Candidates and Ballot Measures
    url: >-
      https://seshat.datasd.org/campaign_fin/financial_support_recipients_datasd.csv
    format: csv
  - name: Candidates and Ballot Measures Dictionary
    url: >-
      https://seshat.datasd.org/campaign_fin/financial_support_recipients_dictionary_datasd.csv
    format: csv
license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2017-06-14'
date_modified: '2017-06-14'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
Included here are election committees and candidates for office who received donations, goods and services, or loans, or had money spent independently in support, according to campaign finance data reported to the City Clerk. This is a companion dataset to the [campaign finance transactions dataset](https://data.sandiego.gov/datasets/financial-support-candidates-and-ballot-measures-election/) and was created by compiling the unique recipients from all years of financial transactions.
<!--more-->

By joining the two datasets on **recipient_name**, you can get correct and consistent recipient names using the **corrected_name** column. This will be useful for calculating total amount received per candidate and committee. If you want a total amount received for just candidates (including any committees that accept and spend money for that candidate), sum totals using the **candidate_or_measure** column and filtering for support in the **support_or_oppose** column.

The [campaign finance transactions dataset](https://data.sandiego.gov/datasets/financial-support-candidates-and-ballot-measures-election/) contains transactions between election committees and financial supporters, including loans, contributions of money, contributions of goods and services, and money spent independently to support a candidate or ballot measure.

Transactions come from electronic filings with the City of San Diego Clerk's office that are required by local and state campaign laws. Committees are required to report a variety of financial transactions, but the ones included here come from California Form 460 schedules A, B1, C and D.
