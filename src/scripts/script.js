/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function make_modal(){
    const button = document.querySelector('#btnSubmit')
    const modal = document.querySelector('.modal__controller')
    
    button.addEventListener('click', () =>{
        modal.showModal()
    })
}

make_modal()