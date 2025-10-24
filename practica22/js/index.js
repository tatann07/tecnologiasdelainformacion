let alumnos = ["Johan", "Salomon", "Miguel Sebastian", "Augusto", "Rene"];
console.log("Lista de alumnos: ", alumnos);
console.log("Numero de alumnos: ", alumnos.length);
alumnos.push("Mia");
console.log("Lista de alumnos actualizada: ", alumnos);
alumnos[6] = "Angel";
console.log("Lista final de alumnos: ", alumnos);
console.log(alumnos[2]);
console.log(alumnos[8]);
console.log(alumnos[-3]);
alumnos[10] = "Sofia";
console.log("Lista con indice 10 asignado: ", alumnos);
alumnos.pop();//Elimina el ultimo elemento
console.log("Lista despues de eliminar el ultimo elemento: ", alumnos);
alumnos.shift();//Elimina el primer elemento
console.log("Lista despues de eliminar el primer elemento: ");
console.log(alumnos);

for (let i = 0; i < alumnos.length; i++) {
    console.log("Alumno en indice " + i + ": " + alumnos[i]);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros[5]);

console.log(alumnos)
let listaAlumnos = document.getElementById("listaAlumnos");
listaAlumnos.innerHTML = alumnos.join(" * ");

