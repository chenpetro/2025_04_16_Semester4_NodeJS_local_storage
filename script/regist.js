// localStorage.setItem('fruit', 'banana')
const formFields = document.querySelectorAll('.form-field')
const keyFields = ['login', 'height', 'width', 'color', 'country', 'password']
const form = document.querySelector('.form')

form.addEventListener('submit', function() {
    formFields.forEach(function(element, index){
        localStorage.setItem(keyFields[index],element.value)
    })
})