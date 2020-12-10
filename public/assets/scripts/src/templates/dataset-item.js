export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  <p class="item-date">Last modified: ${data.modified || ''}</p>
  ${data.notes || ''}
</dataset>`
)
