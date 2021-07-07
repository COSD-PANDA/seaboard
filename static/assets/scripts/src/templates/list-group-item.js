export default (data) => (
`<a href="${data.url}" class="ds-filter-btn btn ${data.selected ? 'btn-primary' : 'btn-outline-primary'} btn-sm rounded-pill my-1 mx-1" role="button">
  ${data.title}
  <span class="badge">${data.count}</span>
  ${data.selected ? '<span class="badge"><i class="fa fa-times"></i></span>' : ''}
</a>`
)
