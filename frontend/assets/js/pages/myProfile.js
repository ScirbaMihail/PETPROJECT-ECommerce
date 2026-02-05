import { logout } from "/frontend/assets/js/services/api.js"

const logoutBtn = document.getElementById("logout-form")
logoutBtn.addEventListener('submit', async (event) => {
    event.preventDefault()
    await logout()
})