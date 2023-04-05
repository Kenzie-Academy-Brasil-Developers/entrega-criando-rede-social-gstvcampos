import { users } from './database.js'
import { posts } from './database.js'
import { suggestUsers } from './database.js'


function handleModal() {
    const buttons = document.querySelectorAll('.button__modal')
    const modal = document.querySelectorAll('.modal__container')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            modal[i].showModal()

            closeModal()
        })
    }
}

function closeModal() {
    const button = document.querySelectorAll('.close__modal')
    const modal = document.querySelectorAll('.modal__container')

    for (let i = 0; i < button.length; i++){
        button[i].addEventListener('click', () =>{
            modal[i].close()
        })
    }

}

function follow() {
    const button = document.querySelectorAll('.follow')

    for (let i = 0; i < button.length; i++){
        button[i].addEventListener('click', () => {
            button[i].classList.toggle('follow-button')
            button[i].classList.toggle('primary-button')
            if (button[i].classList.contains('primary-button')) {
                button[i].textContent = 'Seguindo'                
            } else {
                button[i].textContent = 'Seguir'    
            }
        })
    }
}

function like() {
    const button = document.querySelectorAll('.like-button')
    const count = document.querySelectorAll('.count-likes')
    const like = document.querySelectorAll('.like')
    const unlike = document.querySelectorAll('.unlike')

    for (let i = 0; i < button.length; i++) {
        let valor = parseInt(count[i].innerHTML) + 1

        button[i].addEventListener('click', () => {
            like[i].classList.toggle('hide')
            unlike[i].classList.toggle('hide')
            if(like[i].classList.contains('hide')) {
                count[i].textContent = valor++
            } else {
                count[i].textContent = valor--
            }
        })
    }
}

function createSuggestUsers(array) {
    const listUser = document.querySelector('.list__user')

    listUser.innerHTML = ''

    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li')
        const userItem = createUserItem(array[i])
        const button = document.createElement('button')

        button.innerText = 'Seguir'
        button.classList.add('follow')
        button.classList.add('follow-button')

        li.append(userItem, button)
        listUser.appendChild(li)
    }
}

function createUserItem(user) {
    const figure = document.createElement('figcaption')
    const div1 = document.createElement('div')
    const img = document.createElement('img')
    const div2 = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    figure.classList.add('user__item')
    div1.classList.add('user__img')
    div2.classList.add('user__info')

    img.src = user.img
    img.alt = user.user
    h2.innerText = user.user
    p.innerText = user.stack

    div1.appendChild(img)
    div2.append(h2, p)
    figure.append(div1, div2)

    return figure
}

createSuggestUsers(suggestUsers)

like()
follow()
handleModal()