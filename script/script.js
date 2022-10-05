let nombre,apellido,nobre_usuario,Email,direccion,ciudad


let formulario = document.getElementById('form')

formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    LeerData()
    
})  

function LeerData() {
 nombre =document.getElementById('firstName').value
 apellido =document.getElementById('lastName').value
 nobre_usuario =document.getElementById('username').value
 Email = document.getElementById('email').value
 direccion = document.getElementById('address').value
 ciudad = document.getElementById('country').value

 GuardarLocalStorage(nombre,apellido,nobre_usuario,Email,direccion,ciudad)
}
function GuardarLocalStorage(nombre,apellido,nobre_usuario,Email,direccion,ciudad) {
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Username',nobre_usuario)
    localStorage.setItem('Email',Email)
    localStorage.setItem('Dirección',direccion)
    localStorage.setItem('Ciudad',ciudad)
    extraerLocalstorage()
}

function extraerLocalstorage(){
    let nom = localStorage.getItem('Nombre')
    let ape = localStorage.getItem('Apellido')
    let user = localStorage.getItem('Username')
    let mail = localStorage.getItem('Email')
    let dir = localStorage.getItem('Dirección')
    let city = localStorage.getItem('Ciudad')
    alert('Bienvenido',nom,ape,user,mail,dir,city)
}

