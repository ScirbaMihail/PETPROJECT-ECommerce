import { login } from "/frontend/assets/js/services/api.js"

const form = document.getElementById('login-form')

async function submitForm() {
    const formData = new FormData(form)
    const logged = await login(formData.get('email'), formData.get('password'))
    window.location.href = logged == true ? "/frontend" : "/frontend/login.html"
}

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    await submitForm()
})

