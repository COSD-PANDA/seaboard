/**
 * Usage:
 * <div data-component="datasets-list">
 *   <h3 class="datasets-count" data-hook="datasets-count"></h3>
 *   <input type="text" data-hook="search-query" placeholder="Search..." class="form-control">
 *   <div data-hook="datasets-items"></div>
 * </div>
 *
 * Optionally, add filters to the component element such as
 *   data-department="sample-department"
 *   data-category="education"
 */
import {pick, defaults, filter} from 'lodash'

import TmplDatasetItem from '../templates/dataset-item'
import {queryByHook, setContent, createDatasetFilters} from '../util'

export default class {
  constructor (opts) {
    const elements = {
      datasetsItems: queryByHook('datasets-items', opts.el),
      datasetsCount: queryByHook('datasets-count', opts.el),
      searchQuery: queryByHook('search-query', opts.el)
    }

    // Filter datasets and render in items container
    const paramFilters = pick(opts.params, ['department', 'category'])
    const attributeFilters = pick(opts.el.data(), ['department', 'category'])
    const filters = createDatasetFilters(defaults(paramFilters, attributeFilters))
    const filteredDatasets = filter(opts.datasets, filters)
    const datasetsMarkup = filteredDatasets.map(TmplDatasetItem)
    setContent(elements.datasetsItems, datasetsMarkup)

    // // Dataset count
    const datasetsCountMarkup = filteredDatasets.length + ' datasets'
    setContent(elements.datasetsCount, datasetsCountMarkup)

    // Search datasets listener
    const searchFunction = this._createSearchFunction(filteredDatasets)
    elements.searchQuery.on('keyup', (e) => {
      const query = e.currentTarget.value

      // Datasets
      const results = searchFunction(query)
      const resultsMarkup = results.map(TmplDatasetItem)
      setContent(elements.datasetsItems, resultsMarkup)

      // Dataset count
      const resultsCountMarkup = results.length + ' datasets'
      setContent(elements.datasetsCount, resultsCountMarkup)
    })
  }

  // Returns a function that can be used to search an array of datasets
  // The function returns the filtered array of datasets
  _createSearchFunction (datasets) {
    const keys = ['title', 'notes']
    return function (query) {
      const lowerCaseQuery = query.toLowerCase()
      return filter(datasets, function (dataset) {
        return keys.reduce(function (previousValue, key) {
          return previousValue || (dataset[key] && dataset[key].toLowerCase().indexOf(lowerCaseQuery) !== -1)
        }, false)
      })
    }
  }
}

