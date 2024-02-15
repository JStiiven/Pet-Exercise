let petQuesition = prompt("Qué mascota desea saber sobre su ejercicio? \n- Perro \n- Gato \n- Ave");

if (petQuesition !== "Perro" && petQuesition !== "Gato" && petQuesition !== "Ave") {
    alert("Tipo de mascota inválida");
} else {
    let questionAge = parseInt(prompt("Qué edad tiene su mascota?"));
    if (isNaN(questionAge)) {
        alert("Por favor, ingrese una edad válida.");
    }else {
        getPetExerciseInfo(petQuesition, questionAge);
    }
}

function getPetExerciseInfo(pet, age) {

}