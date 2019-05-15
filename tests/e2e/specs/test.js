// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    // 访问首页
    cy.visit('/')

    // 检查页面包好指定内容
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})
