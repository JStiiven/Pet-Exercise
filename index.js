let petQuesition = prompt("Qué mascota desea saber sobre su ejercicio? \n- Perro \n- Gato \n- Ave");

if (petQuesition !== "Perro" && petQuesition !== "Gato" && petQuesition !== "Ave") {
    alert("Tipo de mascota inválida");
}