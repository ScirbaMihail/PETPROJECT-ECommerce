export function getHeader() {
    return `
        <nav id="header__navigation">
            <ul>
                <li><a href="/frontend">Home</a></li>
                <li><a href="/frontend/products">Products</a></li>
                <li><a href="/frontend/about">About</a></li>
                <li><a href="/frontend/contact">Contact</a></li>
            </ul> 
        </nav>
        <div id="header__profile">
            <a id="header__profile__title" href="">Loading ...</a>
            <div id="header__profile__icon"></div>
        </div>
    `
}
