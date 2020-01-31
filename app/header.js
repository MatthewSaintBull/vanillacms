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
