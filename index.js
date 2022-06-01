
let form = document.getElementById('form')
let input = document.getElementById('input')
// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     formValidation();

// })
form.addEventListener('submit', function (e) {
    e.preventDefault()
    formValidation()

})

// form validation 

function formValidation() {
    if (input.value === '') {
        console.log('failure')

    }
    else {
        console.log('success')

    }
}




