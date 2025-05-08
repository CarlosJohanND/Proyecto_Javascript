tokenValidate()

function getUsers(){
    document.getElementById('cardHeader').innerHTML = '<h4>Listado de usuarios</h4>'
    
    fetch("https://reqres.in/api/users?page=1", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            'x-api-key': 'reqres-free-v1'
        },
    })
    .then((result) =>{
        return result.json().then(
            data => {
                return {
                    status: result.status,
                    body: data
                }
            }
        )
    })
    .then((response) =>{
        if(response.status === 200){
            let listusers = `
                <table class="table table-striped table-bordered">
                <thead>
                    <tr >
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Avatar</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
            `
            response.body.data.forEach(user => {
                listusers = listusers.concat(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td><img src="${user.avatar}" class="img-thumbnail" alt="Avatar de usuario"> </td>
                    </tr>
                    `)
            });
            listusers = listusers.concat(`
                </tbody>
            </table>
            `)
            document.getElementById('info').innerHTML = listusers
        }
        else{
            document.getElementById('info').innerHTML = '<h3>No se encontraron usuarios</h3>'
        }
    })
}

function getProducts(){
    document.getElementById('cardHeader').innerHTML = '<h4>Listado de productos</h4>'
    document.getElementById('info').innerHTML = ''
    fetch("https://reqres.in/api/unknown", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            'x-api-key': 'reqres-free-v1'
        },
    })
    .then((result) =>{
        return result.json().then(
            data => {
                return {
                    status: result.status,
                    body: data
                }
            }
        )
    })
    .then((response) =>{
        if(response.status === 200){
            let listproducts = `
                <table class="table table-striped table-bordered border-dark">
                <thead>
                    <tr >
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Year</th>
                    <th scope="col">Color</th>
                    <th scope="col">Pantone Value</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
            `
            response.body.data.forEach(user => {
                listproducts = listproducts.concat(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.year}</td>
                        <td><input type="color" value="${user.color}"></td>
                        <td>${user.pantone_value}</td>
                    </tr>
                    `)
            });
            listproducts = listproducts.concat(`
                </tbody>
            </table>
            `)
            document.getElementById('info').innerHTML = listproducts
        }
        else{
            document.getElementById('info').innerHTML = '<h3>No se encontraron productos</h3>'
        }
    })
}

function logout(){
    localStorage.removeItem('token')
    location.href = '/index.html'
}

function tokenValidate(){
    const TOKEN = localStorage.getItem('token')
    if(TOKEN === 'QpwL5tke4Pnpja7x4'){
        location.href = '../index.html'
    }
    console.log('Autenticado ', TOKEN)   
}