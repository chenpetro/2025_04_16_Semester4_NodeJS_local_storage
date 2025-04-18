const listBanana = document.querySelector('.list-banana')
const listData = document.querySelectorAll('.list-data')
const deleteAnAccount = document.querySelector('.delete')

listBanana.style.width = localStorage.getItem('width')
listBanana.style.height = localStorage.getItem('height')
listBanana.style.background = localStorage.getItem('color')

listData[0].innerHTML+= localStorage.getItem('login')
listData[1].innerHTML+= localStorage.getItem('country')
listData[2].innerHTML+= localStorage.getItem('password')

const keyFields = ['login', 'height', 'width', 'color', 'country', 'password']

deleteAnAccount.addEventListener('click', function(){
    const confirmo = confirm ('Are you sure you want to delete your account?')
    if(confirmo){
        keyFields.forEach(function(element, index){
            localStorage.removeItem(element)
        })
        document.querySelector('.form').setAttribute('action', '/pages/regist.html')

    }
    else {
        return null
    }
})
