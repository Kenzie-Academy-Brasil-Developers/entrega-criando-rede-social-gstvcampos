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

like()
follow()
handleModal()