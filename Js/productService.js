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