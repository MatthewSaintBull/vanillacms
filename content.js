
function renderContent() { //this will render the content based on the route position
    window.location.hash.replace('#', '').length == 0 ? selectorContent.innerHTML = _.find(content, function (o) { return o.route == "home" }).content :
    selectorContent.innerHTML = _.find(content, function (o) { return o.route == window.location.hash.replace('#', '') }).content
}

function routeTo(page) { //changes the route based on what the user selects
    window.location.hash = page.route
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
