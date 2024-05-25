describe('audio recording', () => {
  it('captures audio', () => {
    cy.visit('https://mdn.github.io/dom-examples/media/web-dictaphone/')
    
    cy.wait(500)
    cy.contains('Record').click()
    cy.wait(2000)
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('Test')
      cy.contains('Stop').click()
    })
  })
})
