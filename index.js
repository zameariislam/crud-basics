
let form = document.getElementById('form')
let input = document.getElementById('input')
let posts = document.getElementById('posts')
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
        acceptData()
        input.value = ''

    }
}

// Accept and store Data

let data = {}
let acceptData = () => {
    data.message = input.value
    createPost(data.message)

}

// create post 
let createPost = (data) => {
    posts.innerHTML += `<div>
    <p>${data}</p>
    <span class="option">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash-can"></i>
    </span>
</div>`
}








