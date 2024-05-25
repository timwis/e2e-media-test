describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://webrtc.github.io/samples/src/content/getusermedia/record/')
    
    cy.contains('Start camera').click()
    cy.contains('Start Recording').click()
    cy.wait(2000)
    cy.contains('Stop Recording').click()
    cy.contains('Play').click()
  })
})
