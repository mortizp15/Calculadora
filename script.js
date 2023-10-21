document.querySelector('grid-container-abajo').addEventListener('click', (evento) => {
    const target = evento.target
    if(target.classList.contains('num-igual') || target.classList.contains('operaciones2')){
        const textoBoton = target.textContent
        const numeroPantalla = document.querySelector('.resultado')


        switch(textoBoton) {
            case '7':
                numeroPantalla.textContent = '7'
            break;
        }
    }
})



// document.querySelector('.grid-container-arriba').addEventListener('click', (e) => {
//     const target = e.target
//     if(target.classList.contains('operaciones1')){
//         const textoBoton = target.textContent

//         switch(textoBoton) {
//             case '√':

//         }
//     }
// })