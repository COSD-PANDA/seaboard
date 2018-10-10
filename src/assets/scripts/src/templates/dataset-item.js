export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  <p class="dataset-modified">Last modified: ${data.modified || ''}</p>
  <p class="dataset-tag"><span class="${data.tags}">${data.tags || ''}</span></p>
  ${data.notes || ''}
</dataset>`
)
