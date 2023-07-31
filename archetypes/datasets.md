---
{{- $datasetJSON := getJSON "https://raw.githubusercontent.com/COSD-PANDA/data-inventory/add-distros/data.json" }}
{{- $datasetList :=  $datasetJSON.dataset }}
{{- $thisTitle := (replace .Name "-" "_") }}
{{- range where $datasetList ".identifier" $thisTitle }}
title: {{ .title }}
menu:
    main:
        name: {{ .title }}
        parent: Data
colorbar: green
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
resources: 
{{- $distroList := .distribution }}
{{- range $i, $e := $distroList}}
  - name: {{ $e.title }}
    url: >-
      {{ $e.downloadURL }}
    format: {{ $e.format }}
    filter: All
{{- end }}

summary: {{ .description }}
described_by: https://seshat.datasd.org/{{ .describedBy }}
date_issued: {{ .issued }}
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