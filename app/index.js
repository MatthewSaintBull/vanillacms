'use strict'

const navbar = document.querySelector('#navigation') //id for the navbar selection
const selectorContent = document.querySelector("#content") //id for the content selection

window.addEventListener('hashchange', renderContent); //observable for the route change


const content = [ //those contents are a mock for what that will be the server in the future
    {
        'route': 'home',
        'page': 'home',
        'content': `<h3>home</h3>`
    },
    {
        'route': 'chi-sono',
        'page': 'chi sono',
        'content': `<h3>chi sono</h3>`
    },
    {
        'route': 'contattaci',
        'page': 'contattaci',
        'content': `<h3>contattaci</h3>`
    }
]

window.dispatchEvent(new Event('hashchange')) //trigger of the observable for the first route check

