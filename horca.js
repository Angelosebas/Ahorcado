//Pizaron
function dibujarTablero() {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#F3F5FC"
    tablero.strokeStyle = "#8ad0f0"
    tablero.fillRect(0,0,1750,860)
    tablero.beginPath();
    tablero.moveTo(750,500)
    tablero.lineTo(1000,500)
    tablero.stroke()
    tablero.closePath()
}

function dibujarLineas() {
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#8ad0f0"
    tablero.beginPath()
    let ancho=650/palabraSecreta.length
    for (let i=0;i<palabraSecreta.length;i++){
        tablero.moveTo(600+(ancho*i),640)
        tablero.lineTo(650+(ancho*i),640)
    }
    tablero.stroke()
    tablero.closePath()
}
function escrribirLetraCorrecta(index) {
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#8ad0f0"
    let ancho=650/palabraSecreta.length
    tablero.fillText(palabraSecreta[index],607+(ancho*index),620)
    tablero.stroke()
}

function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.lineWidth=6
    tablero.font = 'bold 40px Inter';
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#8ad0f0"
    tablero.fillText(letra,635+(40*(10-errorsLeft)),710,40)
}

function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#8ad0f0"
    if(puntaje===8){
    //poste lateral
    tablero.moveTo(800,500)
    tablero.lineTo(800,100)
    }
    if(puntaje===7){//poste
    tablero.moveTo(950,100)
    tablero.lineTo(800,100)
    }
    if(puntaje===6){//cuerda
    tablero.moveTo(950,100)
    tablero.lineTo(950,171)
    }
    if(puntaje===5){//para cara
    tablero.moveTo(1000,230)
    tablero.arc(950,230,50,0,Math.PI*2)
    }
    if(puntaje===4){//para dorso
    tablero.moveTo(950,389)
    tablero.lineTo(950,289)
    }
    if(puntaje===3){//para pierna izquierda
    tablero.moveTo(950,389)
    tablero.lineTo(900,450)
    }
    if(puntaje===2){//para pierna derecha
    tablero.moveTo(950,389)
    tablero.lineTo(990,450)
    }
    if(puntaje===1){//para mano izquierda
    tablero.moveTo(950,330)
    tablero.lineTo(900,389)
    }
    if(puntaje===0){//para mano derecha
    tablero.moveTo(950,330)
    tablero.lineTo(990,389)
    }
    tablero.stroke()
    tablero.closePath()
}

function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Fin del juego!",700,320)
}

function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="green"
    tablero.fillText("Ganaste,",750,320)
    tablero.fillText("Felicidades!",730,360)
    setTimeout( recargar , 1000)
}   

function recargar(){
    location.reload(); 
}