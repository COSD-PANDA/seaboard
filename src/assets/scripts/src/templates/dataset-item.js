export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  <p>${data.date_modified}</p>
  ${data.notes || ''}
</dataset>`
)
