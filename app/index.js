'use strict'

const navbar = document.querySelector('#navigation') //id for the navbar selection
const selectorContent = document.querySelector("#content") //id for the content selection

window.addEventListener('hashchange', renderContent); //observable for the route change




window.dispatchEvent(new Event('hashchange')) //trigger of the observable for the first route check

