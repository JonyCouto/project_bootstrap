function submitForm(){
    const btnForm = document.getElementById('submitForm');
    btnForm.addEventListener('click', () => {
        console.log('Enviou');
    })
}

submitForm();