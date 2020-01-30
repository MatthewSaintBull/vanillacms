'use strict'


const pages = ["home", "chi sono", "contattaci"] //those pages are a mock for what that will be the server in the future
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


function renderContent() { //this will render the content based on the route position
    window.location.hash.replace('#', '').length == 0 ? selectorContent.innerHTML = _.find(content, function (o) { return o.route == "home" }).content :
    selectorContent.innerHTML = _.find(content, function (o) { return o.route == window.location.hash.replace('#', '') }).content
}
function routeTo(page) { //changes the route based on what the user selects
    window.location.hash = page.route
}
function loadNavbar() { //loads the navbar with custom links given by the server
    //const pages = fetch from server the pages
    for (let page of pages) {
        const item = document.createElement('LI')
        item.classList.add("nav-item")
        const itemContent = document.createElement('a')
        itemContent.classList.add("nav-link")
        const itemText = document.createTextNode(page)
        itemContent.appendChild(itemText)
        itemContent.addEventListener("click", (event) => { loadContent(event).then((res) => { routeTo(res.obj); res.event.target.classList.add('active') }) })
        item.appendChild(itemContent)
        console.log(item)
        navbar.appendChild(item)
    }
}

function loadContent(event) { //promise for the content research on the server. If the server response contains the content, then can change the route
    return new Promise((resolve, reject) => {
        document.querySelectorAll('li.nav-item').forEach(element => element.getElementsByTagName('a')[0].classList.remove('active'))
        console.log(event.target)
        const obj = _.find(content, function (o) { return o.route == event.target.text.replace(' ', '-') })
        console.log("obj  : ", obj)
        obj ? resolve({ obj, event }) : reject("error")
    })
}
