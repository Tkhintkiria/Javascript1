describe('creating and edit account', () => {
 it('registration with correct data', () => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login')
  cy.get('#customer_menu_top > li > a').should('have.text', "Login or register")
  cy.get('#accountFrm > fieldset > .btn').click()
  cy.get('#AccountFrm_firstname').type("tako")
  cy.get('#AccountFrm_lastname').type('khintk')
  cy.get('#AccountFrm_email').type('takotakoo@gmail.com')
  cy.get('#AccountFrm_address_1').type('localaddress')
  cy.get('#AccountFrm_city').type('localcity')
  cy.get('#AccountFrm_zone_id').select('Newport')
  cy.get('#AccountFrm_postcode').type('45009')
  cy.get('#AccountFrm_country_id').select('United Kingdom')
  cy.get('#AccountFrm_loginname').type('takokh')
  cy.get('#AccountFrm_password').type('cruella13245')
  cy.get('#AccountFrm_confirm').type('cruella13245')
  cy.get('#AccountFrm_newsletter0').check();
  cy.get('#AccountFrm_agree').check()
cy.get('.col-md-2 > .btn').click()
 })
 it('should edit account details',()=>{
  cy.visit('https://automationteststore.com/index.php?rt=account/success')
  cy.get('.mb40 > .btn').click()
 })
});
