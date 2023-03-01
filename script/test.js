const logOut = document.querySelector('#logout')

logOut.addEventListener('click', function () {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    location.href = '../html folder/login.html'
})

const names = document.querySelector('.top')
const showMyImage = document.querySelector('.img-dashboard')





function init() {
    let user =  JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);
    names.textContent = user.username
    showMyImage.src = user.profileImage || "../img/1000_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct (1).jpg"
}

init()



logOut.addEventListener('click', function () {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    location.href = '../html folder/login.html'
})


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
     



    const math = document.querySelector('.math')
const sport = document.querySelector('.sport')



math.addEventListener('click', function (selectedQuestion) {
    localStorage.setItem('selectedQuestion','math')
    location.href = '../html folder/question.html'
})
sport.addEventListener('click', function (selectedQuestion) {
    localStorage.setItem('selectedQuestion','sport')
    location.href = '../html folder/question.html'
})