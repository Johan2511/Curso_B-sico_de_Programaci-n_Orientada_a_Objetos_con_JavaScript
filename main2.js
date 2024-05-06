class Course {
    constructor({
    id,
    name,
    teacher,
    lessons = [],
    comements = [],
    }) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
    this.lessons = lessons;
    }
}

class LearningPath {
    constructor({
    id,
    name,
    courses = [],
    }) {
    this.id = id;
    this.name = name;
    this.courses = courses;
    }

    addCourse(course) {
    this.courses.push(course);
    }

    replaceCourse(oldCourse, newCourse) {
    const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);

    if (oldCourseIndex !== -1) {
        this.courses[oldCourseIndex] = newCourse;
    }

    return this.courses;
    }

    deleteCourse(oldCourse) {
    const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
    this.courses.splice(courseIndex, 1);

    return this.courses;
    }
}

// Cursos

const CursoPromBasica = new Course({
    name: 'Curso Gratis de Programación basica',
})
const CursoJavascript = new Course({
    name: 'Curso Básico de JavaScript',
})
const CursoHtmlCss = new Course({
    name: 'Curso definitivo de HTML y CSS',
})


// Escuelas

const reactNativeLearningPath = new LearningPath({
    id: 'react-native',
    name: 'Desarrollo de Apps con React Native',
    courses: [
    CursoJavascript,
    new Course({
        id: 'ecmascript-6',
        name: 'Curso de ECMAScript 6+',
        teacher: 'Orlando Naipes',
    }),
      // etc...
    ]
})

const EscuelaWeb = new LearningPath({
    id: 'Escuela desarrollo web',
    courses: [
        new Course({
            id: 'ecmascript-6',
            name: 'Curso de ECMAScript 6+',
            teacher: 'Orlando Naipes',
        }),
        CursoHtmlCss,
    ]
})
const EscuelaVideojuegos = new LearningPath({
    id: 'Escuela de Videojuegos',
    courses: [
        CursoPromBasica,
        new Course({
            id: 'Curso Unity',
            name: 'Curso Unity',
            teacher: 'Carlos Acosta',
        }),
        new Course({
            id: 'Curso Unreal',
            name: 'Curso Unreal',
            teacher: 'Carlos Acosta',
        })
    ]
})


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };

        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const johan2 = new Student({
    name: "johan",
    username: "johan2511",
    email: "johanfalse@gmail.com",
    twitter: "JohanMauricioP9",
    learningPaths: [
        EscuelaWeb,
        EscuelaVideojuegos
    ]
});
const Miguel2 = new Student({
    name: "Miguel Angel",
    username: "Miguel03",
    email: "miguelfalse@gmail.com",
    facebook: "miguelangel.lopezcastillo.71",
    learningPaths: [
        EscuelaVideojuegos,
    ]
});


// //Objetos literales
// const johan1 = {
//     name: "Johan",
//     username: "johan2511",
//     points: 7800,
//     socialMedia: {
//         twitter: "JohanMauricioP9",
//         instagram: "johan1125_e",
//         facebook: undefined,
//     },
//     approvedCouses: [
//         "Curso Definitivo de HTML y CSS",
//         "Curso Práctico de HTML y CSS",
//     ],
//     learningPaths: [
//         {
//             name:"Escuela de Desarrollo Web",
//             courses: [
//                 "Curso Definitivo de HTML y CSS",
//                 "Curso Práctico de HTML y CSS",
//                 "Curso de responsive desing",
//             ]
//         },
//         {
//             name:"Escuela de Videojuegos",
//             courses: [
//                 "Curso introducción a la Producción de VideoJuegos",
//                 "Curso de Unreal Engine",
//                 "Curso de Unity 3D",
//             ]
//         },
//     ]
// };

// const Miguel1 = {
//     name: "Miguel",
//     username: "Miguel11",
//     points: 6500,
//     socialMedia: {
//         twitter: "Miguel24",
//         instagram: "miguel@1",
//         facebook: undefined,
//     },
//     approvedCouses: [
//         "Curso DataBusiness",
//         "Curso DaraViz",
//     ],
//     learningPaths: [
//         {
//             name:"Escuela de Desarrollo Web",
//             courses: [
//                 "Curso Definitivo de HTML y CSS",
//                 "Curso Práctico de HTML y CSS",
//                 "Curso de responsive desing",
//             ]
//         },
//         {
//             name:"Escuela de Data Science",
//             courses: [
//                 "Curso DataBusiness",
//                 "Curso DaraViz",
//                 "curso Tablue",
//             ]
//         },
//     ]
// }