/* global settings */
import DatasetsList from './components/datasets-list.js'
import CategoriesFilter from './components/categories-filter.js'
import departmentsFilter from './components/departments-filter.js'
import DatasetDisplay from './components/dataset-display.js'
import {queryByComponent, setParams} from './util.js'


(function() {
      'use strict';

      document.addEventListener('DOMContentLoaded', function(e) {

        // The filter buttons are link tags with query string
        const params = $.deparam(window.location.search.substr(1))

        // Check for these components on the page and initialize them
        const components = [
          {tag: 'dataset-display', class: DatasetDisplay},
          {tag: 'datasets-list', class: DatasetsList, usesDatasets: true},
          {tag: 'categories-filter', class: CategoriesFilter, usesDatasets: true},
          {tag: 'departments-filter', class: departmentsFilter, usesDatasets: true}
        ]
        for (let component of components) {
          const els = queryByComponent(component.tag)
          if (els.length) {
            // If the component depends on datasets.json, fetch it first (once per page) and pass it
            if (component.usesDatasets) {
              getDatasets().then((datasets) => {
                els.each((index, el) => new component.class({el: $(el), params, datasets})) // eslint-disable-line
                checkActiveFilters(component)
              })
            // Otherwise simply initialize the component
            } else {
              els.each((index, el) => new component.class({el: $(el), params})) // eslint-disable-line
            }
          }
        }

        // Helper function to ensure datasets.json is only fetched once per page
        //let datasetsCache
        function getDatasets () {
          console.log("Loading datasets json")
          if (typeof datasetsCache === 'undefined') {
            let datasetsCache = $.getJSON(`/assets/datasets.json`)
            return datasetsCache
          } else {
            return datasetsCache
          }
        }

        function checkActiveFilters(component) {
          // Check for active filters
            // To keep dropdown open
            if (component.tag === 'categories-filter' | component.tag === 'departments-filter') {
              const filterButtons = document.getElementsByClassName('ds-filter-btn btn btn-primary')
              if (filterButtons.length){
                const catFilterDD = document.getElementById('catalogFilters')
                if (catFilterDD.classList.contains('show')) {
                  console.log('already showing')
                } else {
                  catFilterDD.classList.add('show')
                }
                
              }
            }
        }
    })
})();        
