const InputValor = document.querySelector(".input-email");
const BtnValidacion= document.querySelector(".subscription");
const $body = document.querySelector('body');

const CardSucess = `
      <section class="card-sucess">
            <img src="assets/images/icon-list.svg" alt="imagen de un visto">
            <h2 class="title-card__sucess">Thank for Subscribing!</h2>
            <p class="parrafo-card__sucess">A confirmation email has been sent to <b>ash@lorencompany.com</b>.Please open it and click the button inside to confirm your subscription</p>
            <button class="btn-sucess">Dismiss message</button>
      </section>
`;


const Error = ()=>{
    const InputForm = document.querySelector('.input-email');
    const labelForm = document.querySelector('.label-form');  
    
    InputForm.classList.add('Error');
    let CreateSpan = document.createElement("span");
    CreateSpan.textContent = "valid email required";
    CreateSpan.classList.add("validError");
    
    labelForm.appendChild(CreateSpan);
    
    setTimeout(()=>{
        DeleteMesaggeError(InputForm);
    },3000)
}

const DeleteMesaggeError= (InputForm)=>{
    const MesaggeError = document.querySelector('.validError');
    InputForm.classList.remove('Error');
    MesaggeError.remove();
}

const Sucess = ()=>{
    $body.innerHTML = CardSucess;

    EliminarSucess();
}

const EliminarSucess = ()=>{

    let $card = $body.querySelector('.card-sucess');
    let $btnCard = $card.querySelector('.btn-sucess');

    $btnCard.addEventListener('click', ()=>{
        location.reload();
    })

}


//Validadndo el valor de el input con una expresion regular
const ValidacionInput = ()=>{
  BtnValidacion.addEventListener('click', (e)=>{
      e.preventDefault();
      
      let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(validEmail.test(InputValor.value)){
        Sucess();
    }else{
        Error();
    }
  })   
}

ValidacionInput()