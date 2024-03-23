'strict mode'

const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
        boton.addEventListener("click",()=> {
        const botonUndido = boton.textContent;
        
        if(boton.id === "vaciar"){
            pantalla.textContent = "0";
            return
        }

        if(boton.id === "eliminar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!"){
                pantalla.textContent = "0";
            } else {pantalla.textContent = pantalla.textContent.slice(0,-1);}
            return;
        }

        if(boton.id === "res"){
            try {
                pantalla.textContent = eval(pantalla.textContent); 
            } catch {
                pantalla.textContent = "ERROR!";
            }
            return;
        }
       
        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!"){
            pantalla.textContent = botonUndido;
        } else {
            pantalla.textContent += botonUndido;
        }

    })
})



