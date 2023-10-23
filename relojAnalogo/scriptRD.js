function calcularTiempo(){
    //Capturar la hora que tenga localmente el sistema DATE
    let tiempo = new Date();
    //Métodos para capturar individualmente la estrutura de la hora (hora/minutos/segundos)
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    let horario = hora <= 12 ? "am" : "pm";

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo + horario;

    let relojDigital = document.querySelector(".relojDigital");
    //propiedad inner- devuelve sintaxis html
    relojDigital.innerHTML = pantallaReloj; 
}

//se actualiza cada 1000 milisegundos
setInterval(calcularTiempo, 1000);