import TmplListGroupItem from '../templates/list-group-item.js'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util.js'

export default class {
  constructor (opts) {
    const departments = this._departmentsWithCount(opts.datasets, opts.params)
    const departmentsMarkup = departments.map(TmplListGroupItem)
    setContent(opts.el, departmentsMarkup)
    collapseListGroup(opts.el)
  }

  _departmentsWithCount (datasets, params) {
    return _.chain(datasets)
      .groupBy('department')
      .map(function (datasetsInOrg, department) {
        const filters = createDatasetFilters(_.pick(params, ['category']))
        const filteredDatasets = _.filter(datasetsInOrg, filters)
        const orgSlug = slugify(department)
        const selected = params.department && params.department === orgSlug
        const itemParams = selected ? _.omit(params, 'department') : _.defaults({department: orgSlug}, params)
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
