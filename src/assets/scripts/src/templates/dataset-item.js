export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  <p>Last modified: ${data.modified || ''}</p>
  ${data.notes || ''}
</dataset>`
)
