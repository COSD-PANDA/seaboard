export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  ${data.modified || ''}
  ${data.notes || ''}
</dataset>`
)
