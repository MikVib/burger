

    const coverBtn = document.querySelector('.cover__button')
    const backdropModal = document.querySelector('.backdrop')
    const modal = document.querySelector('.modal')
    const modalCloseButton = document.querySelector('.modalCloseButton')
    const thankYou = document.querySelector('.thankYou')

    thankYou.innerHTML=`
        <h2>THANK YOU</h2>
        <p>Out operators call you back</p>
    `



    coverBtn.addEventListener('click',()=>{
        backdropModal.classList.add('backdropActive')
        modal.classList.add('modalActive')
    })

    modalCloseButton.addEventListener('click',()=>{
        backdropModal.classList.remove('backdropActive')
        modal.classList.remove('modalActive')
    })

    backdropModal.addEventListener('click',()=>{
        backdropModal.classList.remove('backdropActive')
        modal.classList.remove('modalActive')
    })

    modal.addEventListener('click',(e)=>{
       e.stopPropagation()
    })