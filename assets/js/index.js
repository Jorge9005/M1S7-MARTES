'use strict'

console.log("Entro index.js");

let mascota = {
    nombre: "Chocolata",
    color: "Cafe",
    raza: "Labrador",
    edad: 4,
    peso: 8,
    vacunas: ["Vacuna 1", "Vacuna 2"]
};

console.log(mascota);
console.log(mascota.nombre); //para acceder a la propiedas de un objeto, prrimero se escribe el objeto y luego la propiedad.
console.log(mascota.raza);
console.log(mascota.vacunas[1]);
console.log(mascota["vacunas"]);

const colors = [
    {
        name: 'Red',
        code: '#ff0000'
    },
    {
        name: 'Green',
        code: '#00ff00'
    },
    {
        name: 'Yellow',
        code: '#ffff00'
    },
    {
        name: 'Blue',
        code: '#800000'
    }
];

colors[1].spanish = "Verde"; //Aquí estamos asignando un valor que no existe
console.log(colors[1]);
console.log(colors);

//Quiero una función que reciba un arreglo (?) E IMPRIMA EL ARREGLO
//FILTRANDO O BUSCANDO EL COLOR MANDADO (?)
function filtrarColor(arreglo, color){ //lo que está entre paréntesis es un parámetro
    let arregloFiltrado = arreglo.find(item => {
        return item.name == color; //se usan dos iguales porque no se está haciendo asignación, sino una comparación o igualdad.
    }); //se le puso de nombre item porque puede ser cualquier cosa lo que busquemos
    return arregloFiltrado;
};
//"find" solo regresa un valor, por lo cual no puede usarse cuando quieran buscarse más de una propiedad

console.log(filtrarColor(colors, "Blue"), "Colores filtrados");


//DESTRUCTURACIÓN DE OBJETOS
let {nombre, raza} = mascota; //extrae las propiedades que se encuentran en el arreglo mascota, y las convierte en variables
console.log('raza: ', raza);
console.log(nombre);



let employeesWithSalary = [
    {
        name: "Jesus Cardenas",
        age: 32,
        position: "Manager",
        salary: 500
    },
    {
        name: "Manuel Martinez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        "name": "Carlos Perez",
        "age": 27,
        "position": "Developer",
        "salary": 300
    },
    {
        "name": "Arturo Lopez",
        "age": 27,
        "position": "Developer",
        "salary": 300
    },
    {
        "name": "Juan Hernandez",
        "age": 27,
        "position": "Developer",
        "salary": 300
    },
    {
        "name": "Bob Johnson",
        "age": 35,
        "position": "Designer",
        "salary": 300
    },
    {
        "name": "Emily Davis",
        "age": 29,
        "position": "QA Engineer",
        "salary": 300
    },
    {
        "name": "William Brown",
        "age": 31,
        "position": "Product Manager",
        "salary": 300
    }
];

//FUNCION (NORMAL) QUE RECIBA UN ARREGLO Y BUSQUE LOS EMPLEADOS CON
//LA POSICIÓN "DEVELOPER"

//Función tradicional o Normal
function filtrarTrabajo(empleados){
    let arregloFiltrado2 = empleados.filter(empleado => {
        return empleado.position == "Developer";
    });
    return arregloFiltrado2;
};

//función de flecha
let flitrarTrabajo = (empleados) => {
    let arregloFiltrado2 = empleados.filter(empleado => {
        return empleado.position == "Developer";
    });
    return arregloFiltrado2;
};

console.log(filtrarTrabajo(employeesWithSalary));

//RETO SEMANAL: OBTENER LA SUMA DEL SALARIO DE TODOS LOS EMPLEADOS
//Pueden usar for each  y reduce