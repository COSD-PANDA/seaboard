import $ from 'jquery'
import {chain, pick, omit, filter, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util'

export default class {
  constructor (opts) {
    const departments = this._departmentsWithCount(opts.datasets, opts.params)
    const departmentsMarkup = departments.map(TmplListGroupItem)
    setContent(opts.el, departmentsMarkup)
    collapseListGroup(opts.el)
  }

  _departmentsWithCount (datasets, params) {
    return chain(datasets)
      .groupBy('department')
      .map(function (datasetsInOrg, department) {
        const filters = createDatasetFilters(pick(params, ['category']))
        const filteredDatasets = filter(datasetsInOrg, filters)
        const orgSlug = slugify(department)
        const selected = params.department && params.department === orgSlug
        const itemParams = selected ? omit(params, 'department') : defaults({department: orgSlug}, params)
        return {
          title: department,
          url: '?' + $.param(itemParams),
          count: filteredDatasets.length,
          unfilteredCount: datasetsInOrg.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
