let curso = {};

curso.nombre = prompt("Como se llama el curso?");
curso.profesor = prompt("como se llama el profesor?");

curso.participantes = [];

curso.participantes.push( prompt("1er participante"));
curso.participantes.push( prompt("2do participante"));
curso.participantes.push( prompt("3er participante"));
curso.estaIniciado = confirm("El curso esta iniciado?");

console.dir(curso);