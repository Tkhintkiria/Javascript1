describe('log in and edit account', () => {
  it('login on website', () => {
    cy.login('Tkhintkiria', 'KEn@z73u8US8SZU5')
    cy.get('.side_account_list > :nth-child(5) > a').click()
    cy.get('tr > .pull-right > .btn').click()
    cy.get('#AddressFrm_address_2').type('kvemo kartli')
    cy.get('.col-md-12 > .btn-orange').click()
   /*cy.get('.side_account_list > :nth-child(4) > a').click()
   cy.get('#PasswordFrm_current_password').type('KEn@z73u8US8SZU4')
   cy.get('#PasswordFrm_password').type('KEn@z73u8US8SZU5')
   cy.get('#PasswordFrm_confirm').type('KEn@z73u8US8SZU5')
   cy.get('.col-md-12 > .btn-orange').click()*/
   //cy.get('.alert alert-success').should('contain.text', 'Success: Your password has been successfully updated.')
  });
 /* it('should change firstname', () => {
   cy.get('#AccountFrm_lastname')
  .clear()
  .type('NewFirstName');*/

   
    
  })



