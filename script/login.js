const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event)
    const email = loginForm.email.value
    const password = loginForm.password.value

    if (!email || !password) {
        return alert('all field required')
    }
    // console.log(email,password)
    loginUser(email,password)
} )

function loginUser(email,password) {
    const users = getUsersFromLocalStorage()
    const currentUser = users.find(user =>{
        console.log(user);
        console.log(email , password);
        return user.email === email && user.password === password

    })

    if (currentUser === undefined){
        return alert('invalid email or password')
    }

    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    localStorage.setItem('token', currentUser.email)
    location.href = '../html folder/dashboard.html'


}