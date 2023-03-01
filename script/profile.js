const profileForm = document.querySelector('.input-form')
const file = document.querySelector('.imageChange')
let preview = document.querySelector('.preview')

let profileImage;



const profileBtn = document.querySelector('.profile')
profileBtn.addEventListener('click', ()=>{
    location.href = '../html folder/profile.html'
})
const userinfoBtn = document.querySelector('.user-details')
userinfoBtn.addEventListener('click', ()=>{
    location.href = '../html folder/dashboard.html'
})
const testBtn = document.querySelector('.test')
testBtn.addEventListener('click', ()=>{
    location.href = '../html folder/test.html'
})





const editBtn = document.querySelector('.edit-btn')
const overlay = document.querySelector('.overlay')
let profileDetails =  JSON.parse(localStorage.getItem('currentUser'));




const FULLNAME = document.querySelector('.fullname')
const EMAIL = document.querySelector('.email').textContent  = profileDetails.email                      
const DATEANDBIRTH = document.querySelector('.dateofbirth')
const GENDER = document.querySelector('.gender')
const PHONE = document.querySelector('.phonenumber')

let allUsers = getUsersFromLocalStorage()
let {email,phoneNo,username} = JSON.parse(localStorage.getItem('currentUser')) 




editBtn.addEventListener('click', ()=>{
    if (profileForm.style.display = 'none' , overlay.style.display = 'none') {
        profileForm.style.display = 'flex'
        overlay.style.display = 'block'
    }
})


overlay.addEventListener('click' ,()=>{
    if (profileForm.style.display = 'flex' , overlay.style.display = 'block') {
        profileForm.style.display = 'none'
        overlay.style.display = 'none'
    }

})

const updateBtn = document.querySelector('.update')

updateBtn.addEventListener('click', (e)=>{
    e.preventDefault();

let fullname = profileForm.fullname.value || profileDetails.username
let dateOfBirth = profileForm.dateofbirth.value || profileDetails.dateofbirth
let gender = profileForm.gender.value || profileDetails.gender
let phone = profileForm.phonenumber.value  || profileDetails.phoneNo



let temi = allUsers.map(user =>{
    if (user.email === email){
    return {
        ...user,
        username:fullname || username,
        phoneNo:phone || phoneNo,
        profileImage: profileImage,
        gender: gender || 'Nill ',
        dateOfBirth: dateOfBirth || 'Nill'
        
    }
    }
    else{
        return user
    }
})

localStorage.setItem('users' ,JSON.stringify(temi))



    if (profileForm.style.display = 'flex' , overlay.style.display = 'block') {
        profileForm.style.display = 'none'
        overlay.style.display = 'none'
    }

    FULLNAME.textContent = fullname || profileDetails.username
    DATEANDBIRTH.textContent = dateOfBirth || 'Nill'
    GENDER.textContent = gender || 'Nill'
    PHONE.textContent = phone || profileDetails.phoneNo

} )

file.addEventListener('change', function (event){
    console.log('working');
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onloadend = function () {
        preview.setAttribute('src',reader.result)
        profileImage = reader.result
    }
    reader.readAsDataURL(file)
 
})