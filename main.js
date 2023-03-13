document.getElementById('button1').addEventListener("click", e=> {
    calcNumbers();
});
document.getElementById('button3').addEventListener("click", e=> {
    opciones();
});

let n1 = 0;
let n2 = 0;
let contadorPuntos = 0;
let respuesta
function calcNumbers(){
    n1 = (Math.floor(Math.random()*100)+1)
    n2 = (Math.floor(Math.random()*100)+1)
    document.getElementById('cont1').innerHTML=n1
    document.getElementById('cont2').innerHTML=n2
}
function calc(){
    let result = n1 * n2
    return result  
}

function opciones(){
    const container = document.getElementById("container");
    container.innerHTML='';
    const n1 = parseInt(document.getElementById('cont1').innerHTML);
    const n2 = parseInt(document.getElementById('cont2').innerHTML);
    const correctAnswer = n1 * n2;
    
    for (let cont = 1; cont <= 4; cont++) {
        const button = document.createElement("button");
        if (cont == 1){
            button.innerHTML = correctAnswer;
        } else {
            button.innerHTML = (Math.floor(Math.random()*100)+1) * n1;
        }
        button.id = 'buttonsAdd';
        button.style.position = "relative";
        button.style.top = "100px";
        button.style.marginRight = "50px";
        button.style.marginLeft = "50px";
        container.appendChild(button);
    }

    const contador = document.getElementById("contador");
        let segundos = 5;
        const temporizador = setInterval(() => {
        contador.innerHTML = `${segundos}`;
        segundos--;
        if (segundos < 0) {
            clearInterval(temporizador);
            calcNumbers()
            calc()
            opciones()
            document.getElementById('contadorPuntos').innerHTML= contadorPuntos-=10
        }
        }, 1000);

    const buttons = document.querySelectorAll("#container button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", e=> {
            if (parseInt(buttons[i].innerHTML) === correctAnswer){
                respuesta = true;
                document.getElementById('contadorPuntos').innerHTML= contadorPuntos+=10
                console.log(contadorPuntos)
                clearInterval(temporizador)
                calcNumbers()
                calc()
                opciones()
            } else {
                respuesta = false;
                console.log('incorrecto');
                document.getElementById('contadorPuntos').innerHTML= contadorPuntos-=10
                clearInterval(temporizador)
                calcNumbers()
                calc()
                opciones()
            }
            console.log(respuesta)
        });  
    }
}







