/* global settings */
import $ from 'jquery'
import 'jquery-deparam'
import 'bootstrap/js/tab'
import {omit} from 'lodash'

import UserModel from './models/user'
import Navigation from './components/navigation'
import DatasetsList from './components/datasets-list'
import CategoriesFilter from './components/categories-filter'
import departmentsFilter from './components/departments-filter'
import DatasetDisplay from './components/dataset-display'
import ViewSwitcher from './components/view-switcher'
import {queryByComponent, setParams} from './util'

const params = $.deparam(window.location.search.substr(1))
if (window.location.hash === '#adminify') {
    $( "a[data-hook='login-link']").removeClass('hidden');
}

// Initialize user
const user = new UserModel({
  clientId: params.clientId || settings.GITHUB_CLIENT_ID,
  proxyHost: params.proxyHost || settings.GATEKEEPER_HOST,
  repoOwner: settings.REPO_OWNER,
  repoName: settings.REPO_NAME,
  repoOrg: settings.REPO_ORG
})

// If user is mid-login, finish the login process
if (params.code) {
  setParams(omit(params, 'code'))
  user.finishLogin(params.code)
}

// Show administrator elements if/when logged in and a collaborator
const adminOnlyEls = $('.admin-only')
if (user.username && user.isCollaborator) adminOnlyEls.show()
user.on('change', (changedUser) => {
  if (changedUser.username && changedUser.isCollaborator) adminOnlyEls.show()
})

// Check for these components on the page and initialize them
const components = [
  {tag: 'navigation', class: Navigation},
  {tag: 'dataset-display', class: DatasetDisplay},
  {tag: 'view-switcher', class: ViewSwitcher},
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
        els.each((index, el) => new component.class({el: $(el), user, params, datasets})) // eslint-disable-line
      })
    // Otherwise simply initialize the component
    } else {
      els.each((index, el) => new component.class({el: $(el), user, params})) // eslint-disable-line
    }
  }
}

// Helper function to ensure datasets.json is only fetched once per page
let datasetsCache
function getDatasets () {
  datasetsCache = datasetsCache || $.getJSON(`${settings.BASE_URL}/datasets.json`)
  return datasetsCache
}
