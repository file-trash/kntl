Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // https://docs.cypress.io/api/events/catalog-of-events.html#Examples
    return false
})

let url = '/trending/1/berita-terkini';
let title = 'Berita Terkini, Viral dan Terbaru Dalam Negeri dan Internasional - RCTI+';
let desc = 'Baca berita terkini yang sedang viral dari dalam negeri dan luar yang dikumpulkan dari berbagai situs terpercaya dan teraktual';
let keyword = 'berita terkini';

it('Meta Berita Terkini', () => { 
    // https://docs.cypress.io/guides/references/error-messages.html#Cypress-detected-that-an-uncaught-error-was-thrown-from-a-cross-origin-script
    cy.visit(url);
});

it('Validate Meta Title', () => {
    cy.get('head meta[name="title"]')
        .should('have.attr', 'content', title);
});

it('Validate Meta Description', () => {
    cy.get('head meta[name="description"]')
        .should('have.attr', 'content', desc);
});

it('Validate Meta Keyword', () => {
    cy.get('head meta[name="keywords"]')
    .should('have.attr', 'content', keyword)
})

