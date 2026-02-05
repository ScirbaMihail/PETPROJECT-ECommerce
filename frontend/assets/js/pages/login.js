import { login } from "/frontend/assets/js/services/api.js"

const form = document.getElementById('login-form')

async function submitForm() {
    const formData = new FormData(form)
    const logged = await login(formData.get('email'), formData.get('password'))
    if (logged) {
        window.location.href = "/frontend"
    } else {
        const err_elem = document.getElementById("error-message")
        err_elem.style.display = "block"
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    await submitForm()
})

