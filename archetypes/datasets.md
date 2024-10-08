---
{{- $datasetJSON := getJSON "https://raw.githubusercontent.com/COSD-PANDA/data-inventory/temporal/data.json" }}
{{- $datasetList :=  $datasetJSON.dataset }}
{{- $thisPop := (len | $datasetList) }}
{{- $thisTitle := (replace .Name "-" "_") }}
{{- range where $datasetList ".identifier" $thisTitle }}
title: "{{ .title }}"
menu:
    main:
        name: "{{ .title }}"
        parent: Data
departments: 
    - {{ .publisher.name }}
categories:
    - City Management
{{- $kwList := .keyword }}
{{- with $kwList }}
tags:
{{- range $kwList }}
    - {{ . }}
{{- end }}
{{- end  }}
distributions: 
{{- range .distribution }}
  - name: "{{ .title }}"
    url: >-
      {{ .downloadURL }}
    format: {{ .format }}
    filter: "{{ .description }}"
    bytes: {{ .byteSize }}
    {{- with .compressFormat }}
    compression: {{ . }}
    {{- end }}
    weight: 0
    filterGroup: 
        - none
{{- end }}
popularity: $thisPop
summary: "{{ .description }}"
described_by: {{ .describedBy }}
date_issued: {{ .issued }}
date_updated: {{ .modified }}
update_frequency: {{ .accrualPeriodicity }}
{{- with .spatial }}
spatial: {{ . }}
{{- end }}
{{- with .temporal }}
temporal: {{ . }}
{{- end }}
license: http://www.opendefinition.org/licenses/odc-pddl
maintainer: City of San Diego
maintainer_email: data@sandiego.gov
---

Additional details here.

{{- end }}