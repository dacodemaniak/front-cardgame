const apiRoot = 'http://127.0.0.1:8080/api/v1/'

// Get api resource
fetch(
    `${apiRoot}battle` // http://127.0.0.1:8080/api/v1/battle
).then((httpResponse) => httpResponse.json())
.then((httpBody) => {
    const documentBody = document.querySelector('[app]')
    documentBody.innerHTML = '<h1>' + httpBody.message + '</h1>'
})

const waiter = document.querySelector('[app]')
waiter.innerHTML = '<strong>Loading...</strong>'