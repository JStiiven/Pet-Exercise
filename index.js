let petQuesition = prompt("Qué mascota desea saber sobre su ejercicio? \n- Perro \n- Gato \n- Ave");

if (petQuesition !== "Perro" && petQuesition !== "Gato" && petQuesition !== "Ave") {
    alert("Tipo de mascota inválida");
} else {
    let questionAge = parseInt(prompt("Qué edad tiene su mascota?"));
    if (isNaN(questionAge)) {
        alert("Por favor, ingrese una edad válida.");
    } else {
        getPetExerciseInfo(petQuesition, questionAge);
    }
}

function getPetExerciseInfo(pet, age) {
    if (pet === "Perro") {
        if (age < 1) {
            alert("Los cachorros necesitan pequeñas y frecuentes sesiones de juego")
        } else if (age > 1 && age < 7) {
            alert("Los perros a esta edad necesitan caminatas diarias y sesiones de juego")
        } else if (age >= 7) {
            alert("Los perros viejos necesitan caminatas más cortas")
        }

    } else if (pet === "Gato") {
        if (age <= 1) {
            alert("Los gatitos necesitan frecuentes sesiones de juego")
        } else if (age > 1 && age < 7) {
            alert("Los gatos a esta edad necesitan jugar diariamente")
        } else if (age >= 7) {
            alert("Los gatos viejos necesitan sesiones de juego más cortas")
        }
    } else if (pet === "Ave") {
        if (age <= 1) {
            alert("Las aves jóvenes necesitan mucho espacio para volar")
        } else if (age > 1 && age < 7) {
            alert("Las aves necesitan jugar diariamente y un lugar para volar")
        } else if (age >= 7) {
            alert("Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar")
        }
    }
}
getPetExerciseInfo(petQuesition, questionAge)