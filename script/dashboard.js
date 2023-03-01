const names = document.querySelector('.top')
const nams = document.querySelector('.naming')
const showMyImage = document.querySelector('.img-dashboard')
const showSecondImage = document.querySelector('.round')


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





function init() {
    let user =  JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);
    names.textContent = user.username
    nams.textContent = user.username
    showMyImage.src = user.profileImage || "../img/1000_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct (1).jpg"
    showSecondImage.src = user.profileImage || "../img/1000_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct (1).jpg"
}

init()
     