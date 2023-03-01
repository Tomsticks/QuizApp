const form = document.querySelector('.register')
const file = document.querySelector('input[type=file]');
let profileImage;


form.addEventListener('submit', function (event) { 
    event.preventDefault()
    const fullname = form.fullname.value
    const username = form.username.value
    const password = form.password.value
 

    
     if (!fullname || !username || !password) {
        return alert('All fields required')
    }
   
    if (!isUserExists(username)) {
        saveUserToLocalStorage({ fullname, username, password, profileImage })
        alert(`Welcome ${fullname}}`)
    } else {
        alert('username is in use')
    }
})

file.addEventListener('change', function (event) {
    const file = event.target.files[0]
    // console.log(file)
    // if (file.size > 100000) {
    //     alert('File size should be less than or equal to 100kb')
    //     return
    // }
    const preview = document.querySelector('.preview')
    console.log(preview
        
        
        
        
        );
    
    const reader = new FileReader();
    reader.onloadend = function () {
        console.log(reader.result)
        preview.setAttribute('src', reader.result)
        profileImage = reader.result
    }

    reader.readAsDataURL(file);
})



function isUserExists(username) { 
    const users = getUsersFromLocalStorage()
    const user = users.find(user => {
        return user.username === username
    })
    return user ? true : false
}


