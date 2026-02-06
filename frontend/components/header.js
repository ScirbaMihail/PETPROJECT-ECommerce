export function getHeader() {
    return `
        <div class="nav-left">
            <a href="#" class="logo">EccoMi</a>
            <ul class="nav-links">
                <li><a href="/frontend">Home</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="nav-right">
            <button class="btn-login" id="authBtn">
                <span id="authLabel">Loading ...</span>
            </button>
        </div>
    `
}
