describe('Select field', () => {
  it('selects all options of a select field', () => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')

    const products = [
      'Blog',
      'Cursos',
      'Mentoria',
      'YouTube'
    ]

    products.forEach(product => {
      cy.get('#product')
        .select(product)
        .should('have.value', product.toLowerCase())
    })
  })
})
