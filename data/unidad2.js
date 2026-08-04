/* data/unidad2.js */
const unidad2 = {
  titulo: "Unidad 2",
  descripcion: "Programación, algoritmos y diseño de soluciones.",
  galeria: ['u2_img1.jpg'],
  temas: [
    {
      id: 'algoritmos',
      titulo: 'Algoritmos',
      introduccion: 'Un algoritmo es una secuencia finita de pasos ordenados diseñada para resolver un problema o realizar una tarea específica.',
      concepto: 'Los algoritmos definen el proceso exacto que un programa debe seguir para llegar a una solución correcta.',
      definicion: 'Es un conjunto de instrucciones bien definidas y ordenadas que transforman datos de entrada en resultados esperados.',
      caracteristicas: ['Secuencia de pasos clara', 'Entradas y salidas definidas', 'Finito y determinista', 'Eficiencia en tiempo y espacio'],
      aplicaciones: ['Ordenación de datos', 'Búsqueda de información', 'Solución de problemas matemáticos', 'Automatización de tareas repetitivas'],
      ejemplos: ['Algoritmo de búsqueda binaria', 'Ordenamiento por burbuja', 'Cálculo del máximo común divisor', 'Algoritmos de enrutamiento en redes'],
      preguntas: [
        { pregunta: '¿Qué es un algoritmo?', respuesta: 'Una serie de pasos ordenados para resolver un problema.', nivel: 'Fácil', tipo: 'Conceptual', explicacion: 'Define cómo se transforma la entrada en salida a través de instrucciones precisas.' },
        { pregunta: 'Menciona una característica clave de un algoritmo.', respuesta: 'Debe ser finito y tener un número determinado de pasos.', nivel: 'Medio', tipo: 'Propiedad', explicacion: 'Un algoritmo debe terminar tras un número finito de pasos para ser válido.' }
      ],
      evaluaciones: [
        { pregunta: '¿Cuál es la característica principal de un algoritmo?', tipoPregunta: 'Opción múltiple', tipo: 'Conceptual', opciones: ['Es infinito', 'Es determinista', 'No requiere orden', 'No produce salida'], respuesta: 'Es determinista', nivel: 'Fácil', explicacion: 'Un algoritmo produce resultados previsibles para las mismas entradas.' },
        { pregunta: 'Los algoritmos deben tener un número finito de pasos.', tipoPregunta: 'Verdadero/Falso', tipo: 'Terminología', respuesta: 'verdadero', nivel: 'Fácil', explicacion: 'Si no terminan, no son algoritmos prácticos.' }
      ]
    },
    {
      id: 'diagramas-flujo',
      titulo: 'Diagramas de Flujo',
      introduccion: 'Los diagramas de flujo representan visualmente un proceso o algoritmo usando símbolos estandarizados.',
      concepto: 'Permiten entender la secuencia y la lógica de un programa antes de codificarlo.',
      definicion: 'Es una representación gráfica de pasos, decisiones y acciones que conforman un algoritmo.',
      caracteristicas: ['Símbolos estándar', 'Dirección de flujo clara', 'Decisiones condicionales', 'Secuencia de actividades'],
      aplicaciones: ['Diseño de procesos', 'Planificación de software', 'Educación en programación', 'Documentación técnica'],
      ejemplos: ['Diagrama de flujo para suma de dos números', 'Proceso de registro de usuarios', 'Cálculo de promedio de notas'],
      preguntas: [
        { pregunta: '¿Para qué sirve un diagrama de flujo?', respuesta: 'Para representar visualmente la lógica de un proceso o algoritmo.', nivel: 'Fácil', tipo: 'Conceptual', explicacion: 'Hace visible el orden y las decisiones dentro de un sistema.' },
        { pregunta: '¿Qué símbolo se usa para decisiones?', respuesta: 'Un rombo.', nivel: 'Medio', tipo: 'Símbolos', explicacion: 'El rombo indica una condición que puede ser verdadera o falsa.' }
      ],
      evaluaciones: [
        { pregunta: '¿Qué símbolo representa una operación en un diagrama de flujo?', tipoPregunta: 'Opción múltiple', tipo: 'Terminología', opciones: ['Rombo', 'Óvalo', 'Rectángulo', 'Flecha'], respuesta: 'Rectángulo', nivel: 'Fácil', explicacion: 'El rectángulo se usa para acciones u operaciones.' },
        { pregunta: 'Los diagramas de flujo muestran la dirección del proceso.', tipoPregunta: 'Verdadero/Falso', tipo: 'Terminología', respuesta: 'verdadero', nivel: 'Fácil', explicacion: 'Las flechas indican el flujo de ejecución.' }
      ]
    },
    {
      id: 'pseudocodigo',
      titulo: 'Pseudocódigo',
      introduccion: 'El pseudocódigo es una forma de escribir algoritmos usando palabras simples sin la sintaxis estricta de un lenguaje de programación.',
      concepto: 'Actúa como puente entre el pensamiento algorítmico y la implementación en código.',
      definicion: 'Es una descripción estructurada de un algoritmo con elementos similares a la programación, pero en lenguaje natural.',
      caracteristicas: ['Legible para humanos', 'Estructura clara', 'No requiere compilación', 'Facilita la traducción a código'],
      aplicaciones: ['Planificación de programas', 'Explicación de lógica', 'Colaboración entre desarrolladores', 'Educación en programación'],
      ejemplos: ['Pseudocódigo para calcular el área de un rectángulo', 'Pseudocódigo para leer datos y mostrarlos por pantalla'],
      preguntas: [
        { pregunta: '¿Qué es el pseudocódigo?', respuesta: 'Una descripción simplificada de un algoritmo en lenguaje natural.', nivel: 'Fácil', tipo: 'Conceptual', explicacion: 'No requiere sintaxis exacta, pero sí claridad en los pasos.' },
        { pregunta: '¿Por qué es útil el pseudocódigo?', respuesta: 'Porque ayuda a estructurar la lógica antes de programar.', nivel: 'Medio', tipo: 'Aplicación', explicacion: 'Permite validar el algoritmo antes de usar un lenguaje formal.' }
      ],
      evaluaciones: [
        { pregunta: 'El pseudocódigo debe seguir la sintaxis exacta de un lenguaje de programación.', tipoPregunta: 'Verdadero/Falso', tipo: 'Terminología', respuesta: 'falso', nivel: 'Fácil', explicacion: 'El pseudocódigo es flexible y legible, no una sintaxis formal.' },
        { pregunta: '¿Cuál es una ventaja del pseudocódigo?', tipoPregunta: 'Opción múltiple', tipo: 'Conceptual', opciones: ['Es rápido de ejecutar', 'Es difícil de leer', 'Facilita el diseño', 'Requiere compilación'], respuesta: 'Facilita el diseño', nivel: 'Medio', explicacion: 'Ayuda a planificar el algoritmo antes de programar.' }
      ]
    },
    {
      id: 'modelado-problemas',
      titulo: 'Modelado de Problemas',
      introduccion: 'El modelado de problemas consiste en traducir una situación real a un conjunto de elementos que permitan su resolución computacional.',
      concepto: 'Ayuda a identificar datos, restricciones y pasos necesarios para una solución.',
      definicion: 'Es el proceso de representar un problema en términos de entradas, salidas y operaciones lógicas.',
      caracteristicas: ['Análisis de requisitos', 'Representación clara', 'Identificación de variables', 'Definición de procedimientos'],
      aplicaciones: ['Creación de diagramas de flujo', 'Modelado de casos de uso', 'Generación de algoritmos', 'Preparación de pruebas'],
      ejemplos: ['Encontrar el número mayor entre tres valores', 'Calcular el total de una compra con descuento'],
      preguntas: [
        { pregunta: '¿Qué busca el modelado de problemas?', respuesta: 'Representar un problema de forma clara para diseñar una solución.', nivel: 'Fácil', tipo: 'Conceptual', explicacion: 'Conocer el problema facilita su resolución con un algoritmo.' },
        { pregunta: '¿Qué elemento se identifica primero al modelar un problema?', respuesta: 'Las entradas y las salidas esperadas.', nivel: 'Medio', tipo: 'Proceso', explicacion: 'Saber qué datos se reciben y qué resultados se entregan guía la solución.' }
      ],
      evaluaciones: [
        { pregunta: '¿Cuál es el primer paso en el modelado de problemas?', tipoPregunta: 'Opción múltiple', tipo: 'Proceso', opciones: ['Escribir el código', 'Identificar entradas y salidas', 'Comprar software', 'Ignorar restricciones'], respuesta: 'Identificar entradas y salidas', nivel: 'Fácil', explicacion: 'Esto define qué información se necesita y qué produce la solución.' },
        { pregunta: 'El modelado de problemas ayuda a evitar errores de diseño.', tipoPregunta: 'Verdadero/Falso', tipo: 'Aplicación', respuesta: 'verdadero', nivel: 'Medio', explicacion: 'Permite validar la lógica antes de implementar el programa.' }
      ]
    }
  ]
};
