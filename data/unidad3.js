/* data/unidad3.js */
const unidad3 = {
  titulo: "Unidad 3",
  descripcion: "Fundamentos de programación, estructuras de control y Python.",
  galeria: ['u3_img1.jpg'],
  temas: [
    {
      id: 'lenguajes-paradigmas',
      titulo: 'Lenguajes y paradigmas',
      introduccion: 'Los lenguajes de programación se clasifican según paradigmas que influyen en la forma de escribir soluciones.',
      concepto: 'Un paradigma es un estilo o modelo que guía cómo se organiza el código y se resuelve el problema.',
      definicion: 'Ejemplos de paradigmas incluyen imperativo, orientado a objetos, funcional y declarativo.',
      caracteristicas: ['Imperativo: paso a paso', 'Orientado a objetos: clases y objetos', 'Funcional: funciones puras', 'Declarativo: describe el resultado'],
      aplicaciones: ['Desarrollo de aplicaciones web', 'Análisis de datos', 'Sistemas embebidos', 'Automatización de tareas'],
      preguntas: [
        { pregunta: '¿Qué es un paradigma de programación?', respuesta: 'Un estilo o enfoque para escribir código.', nivel: 'Fácil', tipo: 'Conceptual', explicacion: 'Define cómo se modelan las soluciones y se organiza el software.' },
        { pregunta: 'Menciona un paradigma usado en Python.', respuesta: 'Orientado a objetos.', nivel: 'Medio', tipo: 'Aplicación', explicacion: 'Python soporta objetos, funciones y programación imperativa.' }
      ],
      evaluaciones: [
        { pregunta: 'Python es un lenguaje típicamente ___', tipoPregunta: 'Opción múltiple', tipo: 'Conceptual', opciones: ['Imperativo', 'Orientado a objetos', 'Funcional', 'Básico'], respuesta: 'Orientado a objetos', nivel: 'Fácil', explicacion: 'Python es multiparadigma, pero su uso común es orientado a objetos.' },
        { pregunta: 'Los paradigmas determinan la estructura del código.', tipoPregunta: 'Verdadero/Falso', tipo: 'Terminología', respuesta: 'verdadero', nivel: 'Fácil', explicacion: 'Influyen en cómo se organizan las instrucciones y los datos.' }
      ]
    },
    {
      id: 'introduccion-python',
      titulo: 'Introducción a Python',
      introduccion: 'Python es un lenguaje de alto nivel, legible y muy utilizado para aplicaciones web, científicas y de automatización.',
      concepto: 'Se caracteriza por su sintaxis clara, tipado dinámico y amplia biblioteca estándar.',
      definicion: 'Es un lenguaje interpretado que facilita la escritura rápida de código con menos líneas que otros lenguajes.',
      caracteristicas: ['Sintaxis legible', 'Tipado dinámico', 'Gran ecosistema de librerías', 'Multiparadigma'],
      aplicaciones: ['Desarrollo web con frameworks', 'Análisis de datos', 'Inteligencia artificial', 'Scripting y automatización'],
      preguntas: [
        { pregunta: '¿Por qué Python es popular en educación?', respuesta: 'Porque su sintaxis es simple y fácil de leer.', nivel: 'Fácil', tipo: 'Conceptual', explicacion: 'Esto permite aprender lógica sin detalles complejos de sintaxis.' },
        { pregunta: 'Da un ejemplo de aplicación de Python.', respuesta: 'Análisis de datos con pandas.', nivel: 'Medio', tipo: 'Aplicación', explicacion: 'Python es muy usado en ciencia de datos y automatización.' }
      ],
      evaluaciones: [
        { pregunta: 'Python es un lenguaje compilado.', tipoPregunta: 'Verdadero/Falso', tipo: 'Terminología', respuesta: 'falso', nivel: 'Fácil', explicacion: 'Python es interpretado, aunque algunas herramientas lo compilan en bytecode.' },
        { pregunta: '¿Cuál es una característica de Python?', tipoPregunta: 'Opción múltiple', tipo: 'Conceptual', opciones: ['Sintaxis compleja', 'Tipado estático', 'Sintaxis legible', 'Sin librerías'], respuesta: 'Sintaxis legible', nivel: 'Fácil', explicacion: 'Su diseño prioriza la legibilidad del código.' }
      ]
    },
    {
      id: 'operadores',
      titulo: 'Operadores',
      introduccion: 'Los operadores combinan valores y variables para realizar cálculos y comparaciones en un programa.',
      concepto: 'Incluyen operadores aritméticos, lógicos, relacionales y de asignación.',
      definicion: 'Son símbolos o palabras reservadas que indican operaciones específicas sobre datos.',
      caracteristicas: ['Aritméticos: +, -, *, /', 'Relacionales: ==, !=, >, <', 'Lógicos: and, or, not', 'De asignación: =, +=, -='],
      ejemplos: ['x = 10 + 5', 'if a > b:', 'resultado = a and b'],
      preguntas: [
        { pregunta: '¿Qué operador se usa para sumar en Python?', respuesta: '+', nivel: 'Fácil', tipo: 'Terminología', explicacion: 'El símbolo + realiza la suma de valores numéricos y la concatenación de cadenas.' },
        { pregunta: '¿Cómo se expresa la negación lógica?', respuesta: 'not', nivel: 'Medio', tipo: 'Conceptual', explicacion: 'not invierte el valor booleano de una expresión.' }
      ],
      evaluaciones: [
        { pregunta: '¿Cuál es un operador relacional?', tipoPregunta: 'Opción múltiple', tipo: 'Conceptual', opciones: ['+', 'not', '==', '='], respuesta: '==', nivel: 'Medio', explicacion: '== compara dos valores para verificar igualdad.' },
        { pregunta: 'not True es igual a False.', tipoPregunta: 'Verdadero/Falso', tipo: 'Terminología', respuesta: 'verdadero', nivel: 'Fácil', explicacion: 'not invierte el valor booleano.' }
      ]
    },
    {
      id: 'condicionales',
      titulo: 'Condicionales',
      introduccion: 'Las estructuras condicionales permiten ejecutar código solo cuando se cumple una condición específica.',
      concepto: 'En Python se usan if, elif y else para controlar el flujo de ejecución.',
      definicion: 'Son decisiones dentro del programa que cambian el comportamiento según las condiciones.',
      caracteristicas: ['Permiten ramificar el código', 'Evalúan expresiones booleanas', 'Incluyen bloques anidados', 'Mejoran la lógica del programa'],
      ejemplos: ['if edad >= 18:', 'elif temperatura > 30:', 'else: print("Frío")'],
      preguntas: [
        { pregunta: '¿Qué palabra clave inicia una condición en Python?', respuesta: 'if', nivel: 'Fácil', tipo: 'Terminología', explicacion: 'if marca el comienzo del bloque condicional.' },
        { pregunta: '¿Para qué sirve else?', respuesta: 'Para ejecutar código si no se cumple la condición anterior.', nivel: 'Medio', tipo: 'Aplicación', explicacion: 'Es la rama alternativa cuando la condición es falsa.' }
      ],
      evaluaciones: [
        { pregunta: 'El bloque else se ejecuta cuando la condición if es falsa.', tipoPregunta: 'Verdadero/Falso', tipo: 'Conceptual', respuesta: 'verdadero', nivel: 'Fácil', explicacion: 'else captura el caso contrario del if inicial.' },
        { pregunta: '¿Cuál es la sintaxis correcta para una condición en Python?', tipoPregunta: 'Opción múltiple', tipo: 'Terminología', opciones: ['if x = 5:', 'if x == 5:', 'if x === 5:', 'if(x == 5)'], respuesta: 'if x == 5:', nivel: 'Medio', explicacion: 'En Python se usa == para comparar valores.' }
      ]
    },
    {
      id: 'repetitivas',
      titulo: 'Repetitivas',
      introduccion: 'Las estructuras repetitivas ejecutan un bloque de código varias veces según una condición o una secuencia.',
      concepto: 'Incluyen bucles for y while en Python.',
      definicion: 'Permiten recorrer listas, iterar rangos y repetir operaciones sin duplicar código.',
      caracteristicas: ['Ejecución repetida de instrucciones', 'Condición de fin definida', 'Permiten iterar colecciones', 'Pueden anidarse'],
      ejemplos: ['for i in range(5):', 'while contador < 10:'],
      preguntas: [
        { pregunta: '¿Qué estructura se usa para iterar un rango de valores en Python?', respuesta: 'for', nivel: 'Fácil', tipo: 'Conceptual', explicacion: 'for recorre cada elemento de una secuencia.' },
        { pregunta: '¿Qué palabra clave detiene un bucle en Python?', respuesta: 'break', nivel: 'Medio', tipo: 'Terminología', explicacion: 'break rompe la repetición inmediatamente.' }
      ],
      evaluaciones: [
        { pregunta: 'while True crea un bucle infinito si no hay break.', tipoPregunta: 'Verdadero/Falso', tipo: 'Aplicación', respuesta: 'verdadero', nivel: 'Medio', explicacion: 'La condición siempre es verdadera a menos que se interrumpa.' },
        { pregunta: '¿Cuál es un bucle válido en Python?', tipoPregunta: 'Opción múltiple', tipo: 'Terminología', opciones: ['for i from 1 to 5:', 'for i in range(5):', 'for (i=0; i<5; i++)', 'repeat 5 times'], respuesta: 'for i in range(5):', nivel: 'Medio', explicacion: 'Es la forma correcta de iterar un rango en Python.' }
      ]
    }
  ]
};
