class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.like + " likes");
        console.log(this.content);

    }
}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}
class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        videoID = videoID; 
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}


class Course {
    constructor({
    id,
    name,
    teacher,
    lessons = [],
    coments = [],
    isFree = false,
    Lang = 'spanish',
    }) {
    this.id = id;
    this._name = name;
    this.teacher = teacher;
    this.lessons = lessons;
    this.isFree = isFree;
    this.Lang = Lang;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre){
        if(nuevoNombre === "Curso Malo de Programación Básica"){
            console.error("Web... no");
        } else {
            this._name = nuevoNombre;
        }
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
    isFree: true,
})

CursoPromBasica.name = "Programación Basica"
// CursoPromBasica.changeName("Curso Programación")
//'Curso Gratis de Programación basica'

const CursoJavascript = new Course({
    name: 'Curso Básico de JavaScript',
    Lang: 'English',
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

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name
        });
        comment.publicar();
    }
}


class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse (newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    } 
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse (newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos en inglés");
        }
    } 
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse (newCourse) {
            this.approvedCourses.push(newCourse);
    } 
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse (newCourse) {
            this.approvedCourses.push(newCourse);
    } 

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor"
        });
        comment.publicar();
    }
}









const johan2 = new FreeStudent({
    name: "johan",
    username: "johan2511",
    email: "johanfalse@gmail.com",
    twitter: "JohanMauricioP9",
    learningPaths: [
        EscuelaWeb,
        EscuelaVideojuegos
    ]
});
const Miguel2 = new BasicStudent({
    name: "Miguel Angel",
    username: "Miguel03",
    email: "miguelfalse@gmail.com",
    facebook: "miguelangel.lopezcastillo.71",
    learningPaths: [
        EscuelaVideojuegos,
    ]
});
const Freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "freddt@ada.com",
    facebook: "freddiert",
    instagram: "freddiervega",
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