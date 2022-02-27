const debounce = function (func, wait = 300) {
    let timeout = null

    return (...args) => {
        const later = () => {
            timeout = null
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

const emailInput = document.querySelector('#email')

const validateEmail = function (event) {
    event.preventDefault()

    const { target } = event
    target.classList.toggle('valid', target.checkValidity())
}

// add a 600ms delay after last key press before processing validation
emailInput.addEventListener('keyup', debounce(validateEmail, 600))
