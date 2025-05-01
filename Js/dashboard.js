function getUsers(){
    document.getElementById('info').innerHTML = '<h3>Lista de usuarios</h3>'
}

function getProducts(){
    document.getElementById('info').innerHTML = '<h3>Lista de productos</h3>'
}

function logout(){
    localStorage.removeItem('token')
    location.href = '../index-html'
}