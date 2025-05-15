tokenValidate()

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