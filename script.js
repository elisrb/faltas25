document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const feriados = {
        1 : {
            "2" : 1,
            "3" : 0,
            "4" : 0,
            "5" : 2,
            "6" : 3
        },
        2 : {
            "2" : 1,
            "3" : 0,
            "4" : 0,
            "5" : 1,
            "6" : 0
        }
    };

    const semanas = {
        1 : 18,
        2 : 17
    };

    const semestre = parseInt(document.getElementById('semestre').value);
    const horario = document.getElementById('horario').value;

    let dias = 0;
    let folga = 0;

    while (dias < horario.length && !horario[dias].isAlpha()) {
        folga += feriados[semestre][horario[dias]] || 0;
        dias++;
    }

    const aulas = dias * semanas[semestre] - folga;
    const maxFaltas = Math.floor(aulas / 4);

    document.getElementById('resultado').innerText = `Você pode faltar essa matéria no máximo ${maxFaltas} vezes.`;
});

document.getElementById('form').addEventListener('reset', function(event) {
    event.preventDefault();
    document.getElementById('resultado').innerText = `Falte com sabedoria!`;
    document.getElementById('semestre').value = '';
    document.getElementById('horario').value = '';
});

String.prototype.isAlpha = function() {
    return /^[A-Za-z]+$/.test(this);
};