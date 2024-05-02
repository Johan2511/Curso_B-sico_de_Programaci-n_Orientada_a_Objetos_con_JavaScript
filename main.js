const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso: function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};


function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados
    // this.aprobarCurso = function(nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}

Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de creación de Personajes",
    ]
);

// // Hacer que Natalia apruebe otro curso

// natalia.cursosAprobados.push("Curso de Responsive Desing");

// Prototipos con las sintaxis de clases

class Student2 {
    constructor({
        name,
        age,
        instagram,
        twitter,
        facebook,
        cursosAprobados = [],
        email,
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const Miguel = new Student2({
    name: "Miguel",
    age: 28,
    cursosAprobados: [
        "Curso análisis de Negocios para ciencia de Datos",
        "Curso de Principios de visualizaciín de Datos para BI",
    ],
})