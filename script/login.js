// localStorage.setItem('fruit', 'banana')
const formFields = document.querySelectorAll('.form-field')
const keyFields = ['login', 'password']
const form = document.querySelector('.form')

form.addEventListener('submit', function() {
    let successLogin = false
    formFields.forEach(function(element, index){
        if (element.value == localStorage.getItem(keyFields[index])){
            successLogin = true
        } else{ 
            successLogin = false
        }

    })
    if (successLogin){
        alert('Welcome')
    }
    else{
        alert('Error')
    }
})