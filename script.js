function login(element) {
    console.log(element) 
    if (element.innerText="Login"){
        element.innerText="Logout"
    }
}

function definition(element) {
    element.remove()
}

function hide(element) {
    element.remove();
}