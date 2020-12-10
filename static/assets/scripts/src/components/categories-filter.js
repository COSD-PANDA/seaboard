import TmplListGroupItem from '../templates/list-group-item.js'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util.js'

export default class {
  constructor (opts) {
    const categories = this._categoriesWithCount(opts.datasets, opts.params)
    const categoriesMarkup = categories.map(TmplListGroupItem)
    setContent(opts.el, categoriesMarkup)
    collapseListGroup(opts.el)
  }

  // Given an array of datasets, returns an array of their categories with counts
  _categoriesWithCount (datasets, params) {
    return _.chain(datasets)
      .filter('category')
      .flatMap(function (value, index, collection) {
        // Explode objects where category is an array into one object per category
        if (typeof value.category === 'string') return value
        const duplicates = []
        value.category.forEach(function (category) {
          duplicates.push(_.defaults({category: category}, value))
        })
        return duplicates
      })
      .groupBy('category')
      .map(function (datasetsInCat, category) {
        const filters = createDatasetFilters(_.pick(params, ['department']))
        const filteredDatasets = _.filter(datasetsInCat, filters)
        const categorySlug = slugify(category)
        const selected = params.category && params.category === categorySlug
        const itemParams = selected ? _.omit(params, 'category') : _.defaults({category: categorySlug}, params)
        return {
          title: category,
          url: '?' + $.param(itemParams),
          count: filteredDatasets.length,
          unfilteredCount: datasetsInCat.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
