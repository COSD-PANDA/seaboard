---
layout: page
title: Budget data on this portal
permalink: /budget-topic/
---

The City's annual budget allocates or appropriates expenses and revenues for each fiscal year. Budget items related to City operations and services are found in the [Operating Budget](/datasets/operating-budget/). Budget items related to building and upgrading City infrastructure are found in the [Capital Improvement Projects (CIP) Budget](/datasets/capital-budget-fy/). 

Citizens have a few ways of viewing the budget: 

* Read a PDF of the published budget document with narratives at [sandiego.gov/fm](https://www.sandiego.gov/fm)
* Interact with charts and graphs via an online budget tool at [budget.sandiego.gov](https://budget.sandiego.gov/transparency#/)
* Download the datasets published on this portal. The datasets you can download here include the same data that is uploaded to the online budget tool.

These datasets are at the account level. This means that each row in the dataset represents an expense or revenue account, and includes a dollar amount, an expense or revenue account number and name, and a fund type and fund number to categorize and specify the funding repository. Operating budget is further separated by a funds center number, indicating an organizational unit within a department, and the name of the responsible department. Capital budget is further separated by the department that owns the project (asset owning department).

The information available in the datasets is meant to help data users be able to look through the data and know a little bit about each revenue or expense at-a-glance. However, anyone who wants to analyze the data should consider pulling in additional variables, or columns, that are available in some reference datasets we have also published.

### Funds

Fund number and fund type are included in both the capital and operating datasets. You can get a fund description by joining the **fund_number** column for either of those datasets with **fund_number** in the [Funds reference dataset](/datasets/budget-reference-funds/).

### Departments

The [Departments reference dataset](/datasets/budget-reference-depts/) has the same department name column that is available in the Operating Budget dataset, but it also includes the department group, division, section, and funds center. The funds center represents the lowest level of organizational detail within a department. Department group, name, division, and section represent groupings of funds centers. Join on **funds_center_number**.

The hierarchy in this reference dataset is ***dept_group > dept_name > dept_division > dept_section > funds_center***.

### Accounts

The account number and name is already available in the capital and operating budgets and is as low-level as you can get it. But, if you want to roll up items, you can join on **account_number** with the [Accounts reference dataset](/datasets/budget-reference-items/). The hierarchy here is ***account_type > account_class > account_group > account***.

### Projects

In the capital budgets, two project variables are already included: the project department, also known as the asset-owning department, and the project name. But by joining on **project_number** with the [Projects reference dataset](/datasets/budget-reference-projects/), you can roll the account up from name to type of project, or asset type. Putting asset-owning department aside, the hierarchy for the remaining columns is ***asset_type > asset_subtype > project_name***.