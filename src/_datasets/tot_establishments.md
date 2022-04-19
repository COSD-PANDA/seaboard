---
schema: default
title: TOT Vacation Certificates
department: City Treasurer
category:
  - Economy & Community
resources:
  - name: Active certificates
    url: >-
      https://seshat.datasd.org/tot_establishments/tot_establishments_datasd.csv
    format: csv
  - name: Dictionary
    url: >-
      https://seshat.datasd.org/dictionaries/tot_establishments_datasd_dict.csv
    format: csv

license: 'http://www.opendefinition.org/licenses/odc-pddl'
date_issued: '2022-04-19'
date_modified: '2022-04-19'
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---
Cerficates for active operators renting occupancy to transients, as defined and required by San Diego Municipal Code. Lodging businesses required to obtain a certificate include short-term residential occupancy properties of any kind, which are generally registered in the City’s TOT system as Vacation certificate type.
<!--more-->

San Diego Municipal Code (SDMC) §35.0113 requires within 30 days of commencing business, each Operator, renting occupancy* to transients*, register with the City Treasurer and obtain a Transient Occupancy Registration Certificate (certificate).  The certificate must include the name of the operator, the address, the date upon which the certificate was issued, and the following statement: "This Transient Occupancy Registration certificate signifies that the person named on the face hereof is required to collect a transient occupancy tax from transients and to remit the same to the City Treasurer and has fulfilled the requirements of the Transient Occupancy Tax Ordinance by registering with the City Treasurer for the purpose of collecting from transients the Transient Occupancy Tax and remitting said tax to the City Treasurer. This certificate does not constitute a permit to operate a hotel, recreational vehicle park or campground business."

Except for `date_created`, the fields in the dataset are those that are required to appear on the certificate per the SDMC. The `date_created` is the date the certificate was created in the City’s TOT system. Due to a system upgrade, many certificates with a creation date of 01/01/2012 were created on or before that date. This date is different from the issue date printed on the TOT certificates, which is the date the City prints and sends the certificate to the Operator.

For additional information on Transient Occupancy Registration Certificates and the Transient Occupancy Tax, please visit our website at (sandiego.gov/treasurer/taxesfees/tot/)[https://www.sandiego.gov/treasurer/taxesfees/tot].

*see “Transient” and “Occupancy” definitions in San Diego Municipal Code §35.0102