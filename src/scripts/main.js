// Inicialização da biblioteca AOS (Animate On Scroll) para animações de rolagem
AOS.init();

// Define a data e hora do evento como 00:00 de 21 de maio de 2024
const dataDoEvento = new Date("May 21, 2024 19:00:00");
// Pega o timestamp (milissegundos desde 01 de Janeiro de 1970) dessa data/hora
const timeStampDoEvento = dataDoEvento.getTime();

// Inicia uma função de intervalo que será executada a cada segundo (1000 milissegundos)
const contaAsHoras = setInterval(function() {
    // Pega a data/hora atual
    const agora = new Date();
    // Pega o timestamp atual
    const timeStampAtual = agora.getTime();

    // Calcula a distância (em milissegundos) até o evento
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    // Define constantes para dia, hora e minuto em milissegundos
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    // Calcula quantos dias, horas, minutos e segundos faltam para o evento
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    // Exibe o tempo restante para o evento em um elemento HTML com id 'contador'
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    // Se o evento já passou (distanciaAteOEvento é negativa), limpa o intervalo e exibe 'Evento expirado'
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000); // Fim do setInterval
