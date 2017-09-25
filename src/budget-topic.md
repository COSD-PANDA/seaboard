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

The information available in the datasets is meant to help data users be able to look through the data and know a little bit about each line item at-a-glance. However, anyone who wants to analyze the data should consider pulling in additional variables, or columns, that are available in some reference datasets we have also published.

### Funds

Fund number and fund type are included in both the capital and operating datasets. You can get a fund description by joining the **fund_number** column for either of those datasets with **fund_number** in the [Funds reference dataset](/datasets/budget-reference-funds/).

### Departments

The [Departments reference dataset](/datasets/budget-reference-depts/) has the same department column that is available in the Operating Budget dataset, but it also includes the department group, division, section, and funds center. The funds center represents the lowest level of organizational detail within a department. Department group, department, division, and section represent groupings of funds centers.

The hierarchy in this reference dataset is ***department_group > department > division > section > fund_center***.

### Accounts

The account number and name is already available in the capital and operating budgets and is as low-level as you can get it. But, if you want to roll up items, you can join on **item_number** with the [Items reference dataset](/datasets/budget-reference-items/). The hierarchy here is ***type > class > group > description***.

### Projects

In the capital budgets, two project variables are already included: the project department and the project description. But by joining on **project_number** with the [Projects reference dataset](/datasets/budget-reference-projects/), you can roll the item up from description to project type or asset type. Putting owning_department aside, the hierarchy for the remaining columns is ***asset_type_project > asset_type > project_description***.