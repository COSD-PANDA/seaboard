---
layout: page
title: Budget data on this portal
permalink: /budget-topic/
---

The City's annual budget estimates expenses and revenues for each fiscal year. Budget items related to City operations and services are found in the [Operating Budget](/datasets/operating-budget/). Budget items related to building and upgrading City infrastructure are found in the [Capital Improvement Projects (CIP) Budget](/datasets/capital-budget-fy/). 

Citizens have a few ways of viewing the budget: [by PDF](https://www.sandiego.gov/fm/annual), by an interactive tool at [budget.sandiego.gov](https://budget.sandiego.gov/transparency#/), and by downloading the datasets published on this portal. The datasets you can download here is the same data that is uploaded to the online budget tool.

These datasets are at the line-item level. This means that each row in the dataset represents one expense item or one revenue item and gives an amount, a description of that item, and the fund it comes from. The operating budget also shows the department responsible for the line item. The capital budgets have additional information about the project responsible for the line item, including the department that owns the piece of infrastructure (or, asset) and a description of the project.

The corresponding information available in the datasets is meant to help data users be able to look through the data and know a little bit about each line item at-a-glance. However, anyone who wants to analyze the data should consider pulling in additional variables, or columns, that are available in some reference datasets we have also published.

### Funds

The fund information in both the capital and operating datasets is fund type. You can get even more specific fund information by joining the **fund_number** column for either of those datasets with **fund_number** in the [Funds reference dataset](/datasets/budget-reference-funds/).

### Departments

The [Departments reference dataset](/datasets/budget-reference-depts/) has the same department column that is available in the Operating Budget dataset, but it also includes the department group, division, section, and fund center.

The hierarchy in this reference dataset is ***department_group > department > division > section > fund_center***.

### Items

The item description already available in the capital and operating budgets is as low-level as you can get it. But, if you want to roll up items, you can join on **item_number** with the [Items reference dataset](/datasets/budget-reference-items/). The hierarchy here is ***type > class > group > description***.

### Projects

In the capital budgets, two project variables are already included: the project department and the project description. But by joining on **project_number** with the [Projects reference dataset](/datasets/budget-reference-projects/), you can roll the item up from description to project type or asset type. Putting owning_department aside, the hierarchy for the remaining columns is ***asset_type_project > asset_type > project_description***.