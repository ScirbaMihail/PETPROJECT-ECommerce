import { register } from "/frontend/assets/js/services/api.js"

const form = document.getElementById('register-form')

function validateForm() {
    const passwordElem = document.getElementById('password')
    const confirmPasswordElem = document.getElementById('confirm-password')
    if (passwordElem.value !== confirmPasswordElem.value) {
        const err_elem = document.getElementById('error-message')
        err_elem.style.display = 'block'
        err_elem.innerText = 'Passwords do not match'
        return false
    }
    return true
}

async function submitForm() {
    const formData = new FormData(form)
    const registered = await register(formData.get('email'), formData.get('password'))
    if (registered) {
        window.location.href = "/frontend/pages/login.html"
    } else {
        const err_elem = document.getElementById("error-message")
        err_elem.style.display = "block"
        err_elem.innerText = "Email already in use"
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (validateForm()) {
        await submitForm()
    }
})