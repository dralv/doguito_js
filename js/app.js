import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
  input.addEventListener('blur',(evento)=>{
    valida(evento.target)
  })
})

// refarando para deixar o código mais genérico