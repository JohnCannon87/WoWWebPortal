describe('MoviePicker App', () => {
it('displays Hello, World! on the homepage', () => {
// Visit the running app (backend runs on port 8080 by default)
cy.visit('http://localhost:8080');
// Check that the greeting text appears
cy.contains('Hello, World!');
});
});