function formSendded(){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');


    if (nome.value == '' || email.value == '') {
        alert('ups, algo deu errado.');
    } else {
        alert(`Olá ${nome.value}, lhe enviamos um e-mail com instruções para o proximo passo`);
    }
    
}





