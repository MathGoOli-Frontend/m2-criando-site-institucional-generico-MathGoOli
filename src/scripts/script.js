/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function make_modal(){
    const button = document.querySelector('#btnSubmit')
    const modal = document.querySelector('.modal__controller')
    
    
    button.addEventListener('click', () =>{
        modal.showModal()
        modalClose()
    })
}

function modalClose(){
    const close = document.querySelector('.modal__close')
    const modal = document.querySelector('.modal__controller')

    close.addEventListener('click', () =>{
        modal.close()
    })
}

make_modal()