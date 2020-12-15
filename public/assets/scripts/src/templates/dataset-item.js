export default (data) => (
`<dataset>
  <h2><a href="${data.url}">${data.title}</a></h2>
  <p class="item-date">Last modified: ${data.modified || ''}</p>
  ${data.notes || ''}
</dataset>`
)
