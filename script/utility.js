function getUsersFromLocalStorage() {
    const users = localStorage.getItem('users')
    console.log(users);
    if (!users){
        return []
    }
    return JSON.parse(users)
}

function saveUsersTolocalStorage(user) {
    let users = getUsersFromLocalStorage()
    users = [...users, user]
    localStorage.setItem('users', JSON.stringify(users))
}

const logOut = document.querySelector('#logout')

logOut.addEventListener('click', function () {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    location.href = '../html folder/login.html'
})




// dashName.textContent =
// dashName2.textContent = 
