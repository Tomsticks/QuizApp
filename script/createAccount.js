const form = document.querySelector('.register')
console.log(form);
// const file = document.querySelector('input[type=file]')
// console.log(file);
// let profileImage;

function isUserExists(email) {
    const users = getUsersFromLocalStorage()
    const user = users.find(user => {
        return user.email === email
        
    })

    console.log(users);
    return user ? true : false
}


form.addEventListener('submit',function(event) {
    event.preventDefault();
    const username = form.username.value
    const email = form.email.value
    const phoneNo = form.phoneNumber.value
    const password = form.password.value
    if (!username || !email || !phoneNo || !password) {
        return alert('all field required')
    }
    if (!isUserExists(email)) {
        saveUsersTolocalStorage({username,email,phoneNo,password,});
        

    clearInput()
        alert(`wellcome ${username}`) 
        setTimeout(()=>{
            location.replace('../html folder/login.html')
        },1500)       
    }
    else{
        alert('Email in use')
    }

   
})




function clearInput() {
    document.querySelector('.username').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('.phoneNumber').value = '';
    document.querySelector('#password').value = '';
}



getUsersFromLocalStorage()




























































































































































































// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let fullName = form.username.value;
//     let email = form.email.value;
//     let phoneNo = form.phoneNumber.value;
//     let password = form.password.value;
    
//     let canSave = [fullName,email,phoneNo,password].every(Boolean)
//     if (!canSave){
//         return alert('all fields required')
//     }
//     console.log(canSave);

//     const user = {
//         fullName,
//         email,
//         phoneNo,
//         password,
//         id : Math.random()
//     }
//     console.log(user);

//     saveUser(user)

    
// })

// function saveUser(user) {
//     let users = getUsers()
//     const isUserExists = users.find(u => {
//         return u.user === users.username
//     })

//     if (isUserExists) {
//         return alert('username is in use')
//     }
//     saveUserToLocalStorage(user)
// }




// function getUsers() {
//     let data = localStorage.getItem('users')
//     if (data === null) {
//         return []
//     }
//     return JSON.parse(data)
// }

// function saveUserToLocalStorage(user) {
//     let users = getUsers()
//     users.push(user)
//     localStorage.setItem('users',JSON.stringify(user))
// }

 