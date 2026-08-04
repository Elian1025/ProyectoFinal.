/*
  data/unidad1.js
  Estructura de datos de la Unidad 1.
  - `temasUnidad1` contiene cada tema con apartados organizados para renderizar desde JavaScript.
  - Los campos de texto pueden contener múltiples párrafos dentro de literales de plantilla.
  - `imagenes` acepta rutas completas para facilitar la integración con la galería visual.
*/
const temasUnidad1 = [
  {
    id: 'von-neumann-harvard',
    titulo: 'Modelo de Von Neumann y Harvard',
    introduccion: `El modelo de Von Neumann y el modelo de Harvard representan dos arquitecturas clásicas en el diseño de computadoras. Ambos modelos describen la organización interna del sistema, pero proponen enfoques distintos para gestionar memoria e instrucciones.`,
    concepto: `El modelo de Von Neumann se basa en una memoria única compartida para datos e instrucciones. En esta arquitectura, el procesador extrae instrucciones de la misma memoria que usa para leer y escribir datos. Por su parte, el modelo de Harvard separa físicamente las memorias de datos y de programa, lo que permite accesos concurrentes y reduce los cuellos de botella en el acceso.`,
    definicion: `Von Neumann define una computadora como una máquina que combina unidad aritmético-lógica, unidad de control, memoria y dispositivos de entrada/salida en un solo sistema con una memoria común. Harvard propone una separación entre memoria de programa y memoria de datos, con buses independientes para cada una. Esta distinción es esencial para entender el comportamiento y las limitaciones de los sistemas de cómputo.`,
    explicacion: `Los sistemas basados en Von Neumann pueden presentar un cuello de botella cuando la unidad de control y la unidad aritmético-lógica compiten por el mismo canal de memoria. En cambio, Harvard mejora el rendimiento al permitir que las instrucciones y los datos se accedan simultáneamente por buses diferentes. Sin embargo, Harvard puede ser más complejo de implementar y menos flexible para la modificación de código en tiempo de ejecución.`,
    caracteristicas: [
      'Memoria única para instrucciones y datos en la arquitectura Von Neumann.',
      'Presencia de un bus de datos y un bus de direcciones compartidos en Von Neumann.',
      'Memorias separadas para instrucciones y datos en la arquitectura Harvard.',
      'Buses independientes en Harvard para permitir accesos concomitantes a código y datos.',
      'Mayor simplicidad estructural en Von Neumann y mayor velocidad de acceso en Harvard.'
    ],
    ventajas: [
      'Von Neumann es más sencillo de diseñar y resulta más fácil de programar.',
      'Harvard permite accesos paralelos a instrucciones y datos, mejorando el rendimiento.',
      'La arquitectura Harvard puede aumentar la seguridad al separar el código del almacenamiento de datos.',
      'Von Neumann facilita la autoinstrucción y la modificación de programas en memoria.'
    ],
    desventajas: [
      'El cuello de botella de Von Neumann limita la velocidad cuando el bus de memoria se congestionan.',
      'Harvard requiere más hardware y mayor costo por tener memorias y buses duplicados.',
      'Von Neumann puede ser menos eficiente en sistemas de alto rendimiento.',
      'La arquitectura Harvard es menos flexible para sistemas que requieren auto-modificación de código.'
    ],
    aplicaciones: [
      'Computadoras personales y sistemas embebidos que requieren simplicidad de diseño.',
      'Microcontroladores y DSP donde la arquitectura Harvard se aprovecha para un mayor rendimiento.',
      'Aplicaciones educativas que enseñan los fundamentos de la organización de computadores.',
      'Sistemas de realimentación donde el acceso rápido e independiente a datos e instrucciones mejora la latencia.'
    ],
    ejemplos: [
      'Un microprocesador clásico basado en Von Neumann ejecutando instrucciones desde la misma RAM donde almacena datos de usuario.',
      'Un microcontrolador de audio que utiliza una arquitectura Harvard para leer programas de control y datos de señal simultáneamente.',
      'Un simulador de computadoras que permite alternar entre el modelo Von Neumann y Harvard para comparar el rendimiento.'
    ],
    imagenes: [
      'assets/img/unidad1/vonneumann.png',
      'assets/img/unidad1/harvard.png'
    ],
    preguntas: [
      {
        pregunta: '¿Cuál es la diferencia principal entre la memoria del modelo de Von Neumann y la memoria del modelo Harvard?',
        respuesta: 'En Von Neumann la memoria es compartida para datos e instrucciones; en Harvard las memorias son separadas y pueden operar en paralelo.',
        nivel: 'Fácil',
        tipo: 'Conceptual',
        explicacion: 'Von Neumann usa un solo espacio de memoria para instrucciones y datos, mientras Harvard usa memorias distintas para evitar el cuello de botella del bus.'
      },
      {
        pregunta: '¿Por qué el modelo de Harvard puede ofrecer mayor rendimiento que Von Neumann?',
        respuesta: 'Porque permite accesos simultáneos a instrucciones y datos mediante buses separados.',
        nivel: 'Medio',
        tipo: 'Rendimiento',
        explicacion: 'Al tener buses independientes, la CPU puede cargar instrucciones al mismo tiempo que accede a datos, reduciendo esperas.'
      },
      {
        pregunta: '¿Qué problema clásico se asocia con la arquitectura de Von Neumann?',
        respuesta: 'El cuello de botella de Von Neumann en el acceso a memoria compartida.',
        nivel: 'Fácil',
        tipo: 'Terminología',
        explicacion: 'El cuello de botella ocurre cuando la CPU no puede acceder a datos e instrucciones rápidamente porque usa el mismo bus.'
      },
      {
        pregunta: 'Describe una ventaja del modelo Von Neumann en términos de flexibilidad.',
        respuesta: 'Su memoria compartida facilita la modificación de programas en tiempo de ejecución y la autoinstrucción.',
        nivel: 'Medio',
        tipo: 'Conceptual',
        explicacion: 'Como instrucciones y datos conviven en la misma memoria, el sistema puede cambiar código dinámicamente.'
      },
      {
        pregunta: '¿Qué tipo de sistemas suelen usar la arquitectura Harvard de forma preferente?',
        respuesta: 'Los microcontroladores y DSP suelen preferir Harvard por su mayor rendimiento en streaming de datos.',
        nivel: 'Medio',
        tipo: 'Aplicación',
        explicacion: 'En aplicaciones de señal digital se beneficia el acceso paralelo a código y datos para cálculos rápidos.'
      },
      {
        pregunta: '¿Por qué la arquitectura Harvard puede ser más costosa de implementar que Von Neumann?',
        respuesta: 'Porque requiere memorias y buses duplicados, aumentando el hardware necesario.',
        nivel: 'Fácil',
        tipo: 'Costo',
        explicacion: 'Tener dos memorias separadas y sus buses independientes eleva el diseño y el coste físico del sistema.'
      },
      {
        pregunta: 'Explique cómo se organiza la CPU en ambos modelos arquitectónicos.',
        respuesta: 'En ambos hay ALU, unidad de control y memoria, pero Von Neumann usa un solo bus compartido y Harvard usa buses separados para datos e instrucciones.',
        nivel: 'Medio',
        tipo: 'Comparación',
        explicacion: 'La diferencia clave está en la conexión entre CPU y memoria: compartido en Von Neumann, separado en Harvard.'
      },
      {
        pregunta: '¿Cuál de los dos modelos facilita más el diseño de compiladores y por qué?',
        respuesta: 'Von Neumann, porque la misma memoria para código y datos simplifica la gestión de programas.',
        nivel: 'Difícil',
        tipo: 'Análisis',
        explicacion: 'Los compiladores y sistemas operativos encuentran más sencillo tratar un solo espacio de memoria para instrucciones y datos.'
      },
      {
        pregunta: '¿Qué significa que Harvard tiene “buses independientes”?',
        respuesta: 'Que existe un bus exclusivo para instrucciones y otro exclusivo para datos, lo que permite transferencias simultáneas.',
        nivel: 'Fácil',
        tipo: 'Terminología',
        explicacion: 'Un bus independiente evita que instrucciones y datos compitan por el mismo canal de comunicación.'
      },
      {
        pregunta: 'Menciona una desventaja de Harvard en términos de flexibilidad para programación dinámica.',
        respuesta: 'Es menos flexible para modificar código en memoria porque programa y datos están en espacios separados.',
        nivel: 'Medio',
        tipo: 'Limitación',
        explicacion: 'Si el código debe ajustarse en tiempo de ejecución, separar memorias complica la escritura dinámica de instrucciones.'
      }
    ],
    evaluaciones: [
      {
        pregunta: '¿Cuál es la ventaja principal del modelo Harvard frente a Von Neumann?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Conceptual',
        opciones: ['Buses separados para datos e instrucciones', 'Memoria compartida para datos e instrucciones', 'Mayor simplicidad de diseño', 'Menor costo de implementación'],
        respuesta: 'Buses separados para datos e instrucciones',
        nivel: 'Fácil',
        explicacion: 'Harvard usa buses separados, lo que permite accesos simultáneos y reduce cuellos de botella.'
      },
      {
        pregunta: 'En Von Neumann la memoria es compartida para datos e instrucciones.',
        tipoPregunta: 'Verdadero/Falso',
        tipo: 'Terminología',
        respuesta: 'verdadero',
        nivel: 'Fácil',
        explicacion: 'Von Neumann utiliza una memoria única para ambos tipos de información.'
      },
      {
        pregunta: 'Complete: En Harvard, las memorias de datos y de programa son ____.',
        tipoPregunta: 'Completar',
        tipo: 'Terminología',
        respuesta: 'separadas',
        nivel: 'Medio',
        explicacion: 'Harvard separa físicamente los espacios de memoria para datos y programa.'
      },
      {
        pregunta: 'Selecciona las afirmaciones correctas sobre Harvard.',
        tipoPregunta: 'Selección múltiple',
        tipo: 'Comparación',
        opciones: ['Tiene buses independientes', 'Usa memoria compartida', 'Mejora el rendimiento', 'Siempre es más barato'],
        respuesta: ['Tiene buses independientes', 'Mejora el rendimiento'],
        nivel: 'Difícil',
        explicacion: 'Harvard usa buses independientes y puede mejorar el rendimiento, pero no siempre es más barato.'
      },
      {
        pregunta: '¿Qué problema clásico resuelve Harvard respecto a Von Neumann?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Análisis',
        opciones: ['El cuello de botella de memoria', 'La falta de instrucciones', 'La incompatibilidad de software', 'La baja velocidad de NPU'],
        respuesta: 'El cuello de botella de memoria',
        nivel: 'Medio',
        explicacion: 'Harvard reduce el cuello de botella al separar accesos a instrucciones y datos.'
      }
    ]
  },
  {
    id: 'sistemas-operativos',
    titulo: 'Sistemas Operativos',
    introduccion: `El sistema operativo es el software que coordina y controla los recursos de hardware y software de un equipo. Este componente actúa como intermediario entre el usuario y la máquina, administrando procesos, memoria, dispositivos y comunicaciones.`,
    concepto: `Un sistema operativo gestiona la ejecución de aplicaciones, provee servicios básicos y garantiza que múltiples tareas puedan coexistir sin conflictos. Incluye un núcleo que ejecuta en modo privilegiado y una capa de servicios que atiende solicitudes de los programas de usuario.`,
    definicion: `Se define como un conjunto de programas que administra los recursos de la computadora, controla el acceso al hardware y facilita la interacción de aplicaciones con la máquina. Un buen sistema operativo proporciona estabilidad, seguridad y eficiencia en el uso de recursos.`,
    explicacion: `El OS organiza la CPU mediante planificación de procesos, administra la memoria asignada a cada aplicación y controla la entrada/salida de dispositivos. También supervisa la gestión de archivos, la comunicación entre procesos y la protección de datos. Mediante servicios como los sistemas de archivos y la gestión de dispositivos, el sistema operativo simplifica el desarrollo de software.`,
    caracteristicas: [
      'Planificación de procesos para distribuir tiempo de CPU entre múltiples tareas.',
      'Gestión de memoria que asigna y libera espacios de direcciones según demanda.',
      'Control de dispositivos y drivers que permiten usar periféricos de entrada/salida.',
      'Sistema de archivos que organiza datos en discos y soporta operaciones de lectura/escritura.',
      'Interfaz de usuario que puede ser gráfica (GUI) o basada en consola (CLI).' 
    ],
    ventajas: [
      'Facilita el uso del hardware proporcionando abstracciones y servicios comunes.',
      'Permite la ejecución concurrente de varias aplicaciones.',
      'Aumenta la seguridad mediante control de accesos y permisos.',
      'Optimiza el uso de recursos con técnicas de caché, paginación y planificación.'
    ],
    desventajas: [
      'Añade complejidad al sistema y aumenta el consumo de memoria y CPU.',
      'Los fallos en el sistema operativo pueden afectar a todas las aplicaciones.',
      'El desarrollo de un OS es costoso y requiere rigor en la gestión de errores.',
      'Puede limitar el acceso directo al hardware para aplicaciones que requieren control de bajo nivel.'
    ],
    aplicaciones: [
      'Servidores web y bases de datos que necesitan manejo eficiente de procesos y memoria.',
      'Computadoras personales que ejecutan entornos gráficos y aplicaciones de productividad.',
      'Sistemas embebidos que requieren tiempos de respuesta deterministas.',
      'Dispositivos móviles que gestionan energía, sensores y comunicaciones inalámbricas.'
    ],
    ejemplos: [
      'Un servidor Linux que atiende múltiples conexiones y gestiona servicios web.',
      'Un ordenador personal con Windows ejecutando aplicaciones de oficina y multimedia.',
      'Un teléfono inteligente con Android coordinando llamadas, mensajes y aplicaciones en segundo plano.'
    ],
    imagenes: [
      'assets/img/unidad1/so_nucleo.png',
      'assets/img/unidad1/so_planificacion.png'
    ],
    preguntas: [
      {
        pregunta: '¿Qué función principal realiza un sistema operativo?',
        respuesta: 'Gestiona recursos de la computadora, controla procesos y facilita la comunicación entre software y hardware.',
        nivel: 'Fácil',
        tipo: 'Conceptual',
        explicacion: 'El OS actúa como intermediario que organiza accesos a CPU, memoria y dispositivos de entrada/salida.'
      },
      {
        pregunta: 'Define brevemente qué es la planificación de procesos.',
        respuesta: 'Es la asignación de tiempo de CPU a tareas activas para ejecutar múltiples programas de forma concurrente.',
        nivel: 'Fácil',
        tipo: 'Conceptual',
        explicacion: 'La planificación decide qué proceso corre y cuándo para mejorar el uso de la CPU.'
      },
      {
        pregunta: '¿Cuál es la diferencia entre memoria virtual y memoria física?',
        respuesta: 'La memoria virtual es un espacio lógico gestionado por el OS; la física es la RAM real donde se almacenan los datos.',
        nivel: 'Medio',
        tipo: 'Memoria',
        explicacion: 'La memoria virtual permite usar disco como extensión de la RAM y da la ilusión de más memoria disponible.'
      },
      {
        pregunta: '¿Por qué los controladores de dispositivo son importantes en un sistema operativo?',
        respuesta: 'Porque traducen llamadas del OS en acciones específicas del hardware y permiten el uso seguro de periféricos.',
        nivel: 'Medio',
        tipo: 'Aplicación',
        explicacion: 'Sin drivers, el sistema no podría comunicarse con impresoras, discos, teclados y otros dispositivos.'
      },
      {
        pregunta: 'Menciona una ventaja de tener un sistema de archivos.',
        respuesta: 'Organiza los datos en carpetas y archivos, facilitando el acceso y la administración de información.',
        nivel: 'Fácil',
        tipo: 'Terminología',
        explicacion: 'El sistema de archivos provee una estructura ordenada para guardar y recuperar datos en almacenamiento persistente.'
      },
      {
        pregunta: '¿Qué papel juega la seguridad en un sistema operativo?',
        respuesta: 'Controla accesos, permisos y aisla procesos para proteger datos y evitar fallos de programas maliciosos.',
        nivel: 'Medio',
        tipo: 'Seguridad',
        explicacion: 'El OS aplica políticas de acceso para que usuarios y apps no interfieran entre sí.'
      },
      {
        pregunta: 'Explica qué es multitarea.',
        respuesta: 'Es la capacidad del sistema operativo de ejecutar o gestionar varios procesos casi simultáneamente.',
        nivel: 'Fácil',
        tipo: 'Conceptual',
        explicacion: 'Aunque la CPU ejecuta un proceso a la vez, el OS cambia rápidamente entre ellos para dar la sensación de simultaneidad.'
      }
    ],
    evaluaciones: [
      {
        pregunta: '¿Qué elemento NO pertenece a las funciones del sistema operativo?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Conceptual',
        opciones: ['Gestión de procesos', 'Control de memoria', 'Compilación de código fuente', 'Administración de dispositivos'],
        respuesta: 'Compilación de código fuente',
        nivel: 'Fácil',
        explicacion: 'La compilación la realizan herramientas externas, no el sistema operativo.'
      },
      {
        pregunta: 'La memoria virtual permite usar disco como extensión de la RAM.',
        tipoPregunta: 'Verdadero/Falso',
        tipo: 'Memoria',
        respuesta: 'verdadero',
        nivel: 'Fácil',
        explicacion: 'La memoria virtual funciona como un espacio lógico más grande que la memoria física.'
      },
      {
        pregunta: 'Complete: Un driver permite que el sistema operativo se comunique con ____.',
        tipoPregunta: 'Completar',
        tipo: 'Aplicación',
        respuesta: 'hardware',
        nivel: 'Medio',
        explicacion: 'Los controladores traducen instrucciones del OS al hardware específico.'
      },
      {
        pregunta: 'Selecciona los servicios típicos de un sistema operativo.',
        tipoPregunta: 'Selección múltiple',
        tipo: 'Aplicación',
        opciones: ['Manejo de archivos', 'Planificación de procesos', 'Diseño gráfico', 'Control de dispositivos'],
        respuesta: ['Manejo de archivos', 'Planificación de procesos', 'Control de dispositivos'],
        nivel: 'Difícil',
        explicacion: 'Un OS administra archivos, procesos y dispositivos, pero no diseña gráficos por sí mismo.'
      },
      {
        pregunta: '¿Qué describe mejor la multitarea en un sistema operativo?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Conceptual',
        opciones: ['Ejecutar varios procesos al mismo tiempo', 'Solo ejecutar un proceso en toda la sesión', 'Duplicar la memoria RAM', 'Aumentar la velocidad del CPU'],
        respuesta: 'Ejecutar varios procesos al mismo tiempo',
        nivel: 'Fácil',
        explicacion: 'La multitarea permite gestionar varios procesos concurrentes aunque la CPU ejecute uno por vez.'
      }
    ]
  },
  {
    id: 'sistemas-de-numeracion',
    titulo: 'Sistemas de Numeración',
    introduccion: `Los sistemas de numeración son métodos que el ser humano utiliza para representar cantidades. Cada sistema define una base, un conjunto de símbolos y reglas de posición para escribir números de forma compacta y consistente.`,
    concepto: `Un sistema de numeración posiciona valores según su lugar dentro de un número y calcula el valor total como la suma de términos ponderados por la base. Los sistemas más comunes en computación son binario, decimal y hexadecimal, cada uno con aplicaciones específicas.`,
    definicion: `Se considera un conjunto de reglas y símbolos que permiten expresar valores numéricos. En un sistema posicional, el valor de cada dígito depende de su posición y de la base del sistema. Esto facilita operaciones aritméticas y conversiones entre distintos formatos.`,
    explicacion: `En el sistema decimal, la base es 10 y cada posición representa potencias de diez. En el sistema binario, la base es 2 y solo existen los símbolos 0 y 1. El hexadecimal utiliza base 16 y agrupa bits en nibbles para facilitar la representación de direcciones y datos en computación.`,
    caracteristicas: [
      'Sistemas posicionales donde el peso de un dígito depende de su posición.',
      'Uso de una base numérica para definir el rango de símbolos disponibles.',
      'Representación compacta de valores grandes mediante potencias de la base.',
      'Conversión fácil entre sistemas mediante agrupación de bits o cambio de base.'
    ],
    ventajas: [
      'Permiten representar números de forma eficiente y sin ambigüedad.',
      'Facilitan las operaciones matemáticas y la programación de sistemas digitales.',
      'El binario es ideal para el hardware electrónico y el almacenamiento de datos.',
      'El hexadecimal mejora la lectura de números binarios largos en entornos técnicos.'
    ],
    desventajas: [
      'Algunos sistemas requieren más símbolos y son menos intuitivos para usuarios no técnicos.',
      'Las conversiones manuales entre bases pueden ser propensas a errores.',
      'El manejo del binario resulta complejo para cálculos aritméticos directos sin herramientas.'
    ],
    aplicaciones: [
      'Diseño de circuitos digitales y lógica de hardware.',
      'Representación de direcciones de memoria y valores en programación.',
      'Codificación de colores en pantallas mediante valores hexadecimales.',
      'Cálculos de checksum y algoritmos criptográficos que usan representaciones binarias.'
    ],
    ejemplos: [
      'El número decimal 42 se representa como 101010 en binario y como 2A en hexadecimal.',
      'Un desarrollador que inspecciona la memoria de un programa utiliza valores hexadecimales para identificar direcciones.',
      'Los códigos RGB en diseño web se expresan en hexadecimal, como #FF00CC.'
    ],
    imagenes: [
      'assets/img/unidad1/sistema_binario.png',
      'assets/img/unidad1/sistema_hexadecimal.png'
    ],
    preguntas: [
      {
        pregunta: 'Convierte el número decimal 13 al sistema binario.',
        respuesta: '1101',
        nivel: 'Fácil',
        tipo: 'Conversión',
        explicacion: '13 en decimal es 8+4+1, lo que corresponde a los bits 1101 en binario.'
      },
      {
        pregunta: '¿Cuál es la base del sistema hexadecimal y cuántos símbolos utiliza?',
        respuesta: 'Base 16 y utiliza 16 símbolos (0-9 y A-F).',
        nivel: 'Fácil',
        tipo: 'Terminología',
        explicacion: 'Hexadecimal cuenta de 0 a 15, usando letras para los valores mayores a 9.'
      },
      {
        pregunta: 'Convertir el número binario 101101 al decimal.',
        respuesta: '45',
        nivel: 'Medio',
        tipo: 'Conversión',
        explicacion: '101101 = 32 + 8 + 4 + 1 = 45 en decimal.'
      },
      {
        pregunta: '¿Qué representa el dígito más significativo en un número posicional?',
        respuesta: 'El mayor valor ponderado según la base, ubicado en la posición más a la izquierda.',
        nivel: 'Fácil',
        tipo: 'Conceptual',
        explicacion: 'En un número posicional, cada dígito tiene un peso según su posición y la base del sistema.'
      },
      {
        pregunta: '¿Cómo se convierte el número decimal 255 a hexadecimal?',
        respuesta: 'FF',
        nivel: 'Medio',
        tipo: 'Conversión',
        explicacion: '255 es 15*16 + 15, lo que se escribe como FF en hexadecimal.'
      },
      {
        pregunta: 'Enumera una ventaja de usar el sistema hexadecimal en programación.',
        respuesta: 'Es más compacto y legible para representar valores binarios largos.',
        nivel: 'Fácil',
        tipo: 'Aplicación',
        explicacion: 'Hex simplifica la lectura de direcciones y datos binarios agrupándolos en nibbles.'
      },
      {
        pregunta: '¿Cuál es el valor decimal del dígito hexadecimal B?',
        respuesta: '11',
        nivel: 'Fácil',
        tipo: 'Terminología',
        explicacion: 'En hexadecimal B equivale a 11 en decimal porque el sistema cuenta de 0 a 15.'
      },
      {
        pregunta: 'Convierte el número hexadecimal 3A al binario.',
        respuesta: '00111010',
        nivel: 'Difícil',
        tipo: 'Conversión',
        explicacion: '3 = 0011 y A = 1010, por lo que 3A = 00111010 en binario.'
      },
      {
        pregunta: '¿Qué sistema de numeración utiliza solamente los símbolos 0 y 1?',
        respuesta: 'El sistema binario.',
        nivel: 'Fácil',
        tipo: 'Conceptual',
        explicacion: 'Binario es base 2 y sólo admite dos símbolos, ideal para electrónica digital.'
      },
      {
        pregunta: 'Explica brevemente por qué las conversiones entre bases son importantes en computación.',
        respuesta: 'Porque diferentes capas del sistema usan bases distintas para diseño, representación y comunicación de datos.',
        nivel: 'Medio',
        tipo: 'Análisis',
        explicacion: 'El hardware usa binario, los humanos usan decimal y los desarrolladores usan hexadecimal para facilitar lectura.'
      }
    ],
    evaluaciones: [
      {
        pregunta: '¿Cuál es la base del sistema binario?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Terminología',
        opciones: ['2', '8', '10', '16'],
        respuesta: '2',
        nivel: 'Fácil',
        explicacion: 'El sistema binario usa solo los dígitos 0 y 1, por lo que su base es 2.'
      },
      {
        pregunta: 'El número hexadecimal FF equivale a 255 en decimal.',
        tipoPregunta: 'Verdadero/Falso',
        tipo: 'Conversión',
        respuesta: 'verdadero',
        nivel: 'Medio',
        explicacion: 'FF en hexadecimal representa 15*16 + 15 = 255 en decimal.'
      },
      {
        pregunta: 'Complete: El dígito más significativo en un número posicional tiene el peso ____.',
        tipoPregunta: 'Completar',
        tipo: 'Conceptual',
        respuesta: 'mayor',
        nivel: 'Medio',
        explicacion: 'El dígito más a la izquierda en un número posicional contribuye con el valor más alto según la base.'
      },
      {
        pregunta: 'Selecciona las afirmaciones correctas sobre los sistemas de numeración.',
        tipoPregunta: 'Selección múltiple',
        tipo: 'Conceptual',
        opciones: ['El binario usa base 2', 'El decimal usa 16 símbolos', 'El hexadecimal usa A-F', 'El binario usa símbolos 0-9'],
        respuesta: ['El binario usa base 2', 'El hexadecimal usa A-F'],
        nivel: 'Difícil',
        explicacion: 'El binario usa base 2 y el hexadecimal usa símbolos 0-9 y A-F. El decimal no usa 16 símbolos.'
      },
      {
        pregunta: '¿Por qué el sistema hexadecimal es útil en programación?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Aplicación',
        opciones: ['Representa bytes de forma compacta', 'Solo funciona en calculadoras', 'Es más lento de procesar', 'No admite letras'],
        respuesta: 'Representa bytes de forma compacta',
        nivel: 'Fácil',
        explicacion: 'Hexadecimal agrupa bits en nibbles, lo que facilita leer y escribir valores binarios largos.'
      }
    ]
  },
  {
    id: 'aritmetica-binaria',
    titulo: 'Aritmética Binaria',
    introduccion: `La aritmética binaria es la base de todas las operaciones numéricas en los sistemas digitales. A diferencia del sistema decimal, utiliza solo dos símbolos y reglas específicas para suma, resta, multiplicación y división.`,
    concepto: `En aritmética binaria, cada bit representa una potencia de dos. Las operaciones se realizan sobre secuencias de bits, y los resultados se ajustan según reglas que incluyen carry, borrow y complementos.`,
    definicion: `Se define como el conjunto de métodos aritméticos aplicados a números expresados en base 2. Incluye algoritmos para sumar y restar, así como técnicas para representar negativos y operar eficientemente sobre registros binarios.`,
    explicacion: `La suma binaria avanza de derecha a izquierda, igual que en decimal, pero solo hay dos dígitos. La resta puede implementarse con complemento a dos para simplificar el hardware. La multiplicación y la división se basan en desplazamientos y sumas parciales, aprovechando la naturaleza binaria del procesador.`,
    caracteristicas: [
      'Operaciones en base 2 con solamente los dígitos 0 y 1.',
      'Uso de carry para la suma y borrow para la resta.',
      'Representación de números negativos mediante complemento a dos.',
      'Multiplicación y división implementadas como desplazamientos y sumas parciales.'
    ],
    ventajas: [
      'Se adapta perfectamente al diseño lógico de circuitos digitales.',
      'Permite implementar operaciones aritméticas con circuitos simples y deterministas.',
      'El complemento a dos evita la necesidad de hardware separado para la resta.',
      'Es eficiente en sistemas embebidos y microprocesadores de propósito general.'
    ],
    desventajas: [
      'Los números binarios largos son difíciles de leer para humanos.',
      'El manejo de overflow requiere cuidados especiales en diseño de sistemas.',
      'La división binaria puede ser más costosa en tiempo de cálculo que las otras operaciones.'
    ],
    aplicaciones: [
      'Procesadores que suman y restan valores mediante circuitos aritmético-lógicos.',
      'Sistemas de comunicación que codifican datos en bits para transmisión digital.',
      'Algoritmos de cifrado que operan directamente sobre representaciones binarias.',
      'Sensores y dispositivos embebidos que ejecutan cálculos binarios de forma continua.'
    ],
    ejemplos: [
      'Suma binaria: 1011 + 0110 = 10001.',
      'Resta con complemento a dos: 0101 - 0011 = 0010.',
      'Multiplicación binaria en hardware con desplazamientos y acumuladores.'
    ],
    imagenes: [
      'assets/img/unidad1/aritmetica_suma.png',
      'assets/img/unidad1/aritmetica_complemento.png'
    ],
    preguntas: [
      {
        pregunta: 'Realiza la suma binaria 1010 + 0011.',
        respuesta: '1101',
        nivel: 'Fácil',
        tipo: 'Cálculo',
        explicacion: 'Sumando bit a bit con carry, el resultado es 1101 en binario.'
      },
      {
        pregunta: '¿Qué resultado obtiene la resta binaria 1001 - 0010 usando borrow?',
        respuesta: '0111',
        nivel: 'Medio',
        tipo: 'Cálculo',
        explicacion: 'Se pide un borrow en la posición de menor peso para restar 0 - 1, dando 0111.'
      },
      {
        pregunta: '¿Cuál es el complemento a dos del número binario 0110?',
        respuesta: '1010',
        nivel: 'Medio',
        tipo: 'Conceptual',
        explicacion: 'Invertir bits y sumar 1 transforma 0110 en 1010 como representación negativa.'
      },
      {
        pregunta: 'Explica por qué las operaciones binarias son adecuadas para el hardware digital.',
        respuesta: 'Porque los circuitos fácilmente distinguen dos estados eléctricos, lo que corresponde al 0 y 1 binarios.',
        nivel: 'Fácil',
        tipo: 'Aplicación',
        explicacion: 'Los transistores tienen estados encendido y apagado, ideales para representar bits.'
      },
      {
        pregunta: 'Multiplica 101 x 11 en binario.',
        respuesta: '1111',
        nivel: 'Medio',
        tipo: 'Cálculo',
        explicacion: 'La multiplicación binaria es similar a la decimal con sumas parciales desplazadas.'
      },
      {
        pregunta: '¿Qué valor decimal representa el binario 1110?',
        respuesta: '14',
        nivel: 'Fácil',
        tipo: 'Conversión',
        explicacion: '1110 = 8 + 4 + 2 = 14 en decimal.'
      },
      {
        pregunta: 'Describe cómo se realiza una división binaria básica.',
        respuesta: 'Se usan desplazamientos y restas sucesivas del divisor comparado con partes del dividendo.',
        nivel: 'Difícil',
        tipo: 'Conceptual',
        explicacion: 'La división binaria se parece a la división larga, ajustando el cociente por cada desplazamiento.'
      },
      {
        pregunta: '¿Qué es un carry en suma binaria?',
        respuesta: 'Es el bit que se transporta a la siguiente posición cuando la suma de dos bits supera 1.',
        nivel: 'Fácil',
        tipo: 'Terminología',
        explicacion: 'Por ejemplo, 1 + 1 = 10 en binario, el 1 extra es el carry.'
      },
      {
        pregunta: '¿Por qué el complemento a dos es útil para la resta?',
        respuesta: 'Porque convierte la resta en una suma, simplificando la lógica del circuito aritmético.',
        nivel: 'Medio',
        tipo: 'Conceptual',
        explicacion: 'En complemento a dos, restar B es lo mismo que sumar el negativo de B.'
      },
      {
        pregunta: 'Convierte la suma binaria 111 + 011 y explica el carry final.',
        respuesta: '1010, con un carry que extiende el resultado a 4 bits.',
        nivel: 'Difícil',
        tipo: 'Cálculo',
        explicacion: '111 + 011 produce 1010 porque el carry final añade un bit adicional en la izquierda.'
      }
    ],
    evaluaciones: [
      {
        pregunta: '¿Cuál es el resultado de 1010 + 0011 en binario?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Cálculo',
        opciones: ['10001', '1101', '1110', '1011'],
        respuesta: '1101',
        nivel: 'Fácil',
        explicacion: 'La suma binaria de 1010 y 0011 da 1101.'
      },
      {
        pregunta: 'La resta binaria 1000 - 0011 usando borrow es igual a 0101.',
        tipoPregunta: 'Verdadero/Falso',
        tipo: 'Cálculo',
        respuesta: 'verdadero',
        nivel: 'Medio',
        explicacion: '1000 - 0013 (binario) da 0101 cuando se maneja el borrow correctamente.'
      },
      {
        pregunta: 'Complete: El carry en una suma binaria se genera cuando la suma de dos bits es ____.',
        tipoPregunta: 'Completar',
        tipo: 'Terminología',
        respuesta: '2',
        nivel: 'Medio',
        explicacion: 'Un carry se mueve a la siguiente posición cuando el resultado de sumar bits supera 1, es decir, es 2 en decimal.'
      },
      {
        pregunta: 'Selecciona los elementos correctos en una operación binaria.',
        tipoPregunta: 'Selección múltiple',
        tipo: 'Conceptual',
        opciones: ['Carry', 'Borrow', 'Modulo 10', 'Complemento a dos'],
        respuesta: ['Carry', 'Borrow', 'Complemento a dos'],
        nivel: 'Difícil',
        explicacion: 'En aritmética binaria son relevantes carry, borrow y complemento a dos, no módulo 10.'
      },
      {
        pregunta: '¿Por qué el complemento a dos es útil en la resta binaria?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Aplicación',
        opciones: ['Convierte resta en suma', 'Hace la resta más lenta', 'Elimina el carry', 'Usa base 10'],
        respuesta: 'Convierte resta en suma',
        nivel: 'Medio',
        explicacion: 'El complemento a dos permite realizar la resta sumando el negativo del número, simplificando la lógica del circuito.'
      }
    ]
  },
  {
    id: 'algebra-de-boole',
    titulo: 'Álgebra de Boole',
    introduccion: `El álgebra de Boole es la rama de la matemática que estudia las operaciones lógicas sobre valores binarios. Sus principios son la base de la lógica digital y permiten construir expresiones que controlan circuitos y programas.`,
    concepto: `Se basa en variables que solo pueden tomar dos valores: verdadero o falso, uno o cero. Las operaciones más importantes son AND, OR y NOT, y se combinan para representar funciones lógicas complejas.`,
    definicion: `Es un sistema algebraico en el que las variables y las operaciones cumplen axiomas específicos que difieren de la aritmética tradicional. El álgebra de Boole define identidades y leyes que permiten simplificar expresiones lógicas y diseñar redes digitales.`,
    explicacion: `La simplificación booleana reduce el número de puertas lógicas necesarias en un circuito. Se aplican reglas como la conmutativa, asociativa, distributiva y las leyes de De Morgan. Estas operaciones permiten transformar condiciones lógicas en implementaciones físicas eficientes.`,
    caracteristicas: [
      'Variables binarias que solo admiten dos valores: 0 y 1.',
      'Operaciones lógicas fundamentales: AND, OR, NOT.',
      'Leyes algebraicas que permiten simplificar expresiones lógicas.',
      'Representación de circuitos digitales mediante funciones booleanas.'
    ],
    ventajas: [
      'Permite modelar decisiones lógicas y procesos de control de manera matemática.',
      'Reduce el hardware necesario al simplificar expresiones lógicas.',
      'Facilita el diseño de circuitos digitales y sistemas de control.',
      'Proporciona un lenguaje formal para el análisis de señales binarias.'
    ],
    desventajas: [
      'La simplificación de expresiones complejas puede ser difícil sin herramientas automáticas.',
      'Los sistemas digitales grandes pueden volverse difíciles de analizar manualmente.',
      'Requiere una comprensión clara de las leyes de Boole para evitar errores en diseño.'
    ],
    aplicaciones: [
      'Diseño de puertas lógicas y circuitos integrados.',
      'Sistemas de control en electrónica digital y automatización.',
      'Programación de condicionales y expresiones lógicas en software.',
      'Análisis y diseño de redes lógicas para procesamiento digital.'
    ],
    ejemplos: [
      'Expresión booleana: (A AND B) OR (NOT C) simplificada a B AND A OR NOT C.',
      'Ley de De Morgan: NOT (A AND B) = (NOT A) OR (NOT B).',
      'Uso de tablas de verdad para comprobar el valor lógico de una función con diferentes entradas.'
    ],
    imagenes: [
      'assets/img/unidad1/boole_and_or_not.png',
      'assets/img/unidad1/boole_tabla_verdad.png'
    ],
    preguntas: [
      {
        pregunta: '¿Qué operación booleana corresponde a la expresión A AND B?',
        respuesta: 'Es verdadera solo si A y B son verdaderos.',
        nivel: 'Fácil',
        tipo: 'Conceptual',
        explicacion: 'AND requiere que ambas entradas sean 1 para producir 1.'
      },
      {
        pregunta: '¿Cuál es la salida de A OR B si A=0 y B=1?',
        respuesta: '1',
        nivel: 'Fácil',
        tipo: 'Evaluación',
        explicacion: 'OR es verdadero si al menos una de las entradas es 1.'
      },
      {
        pregunta: 'Aplica la Ley de De Morgan a NOT (A AND B).',
        respuesta: '(NOT A) OR (NOT B)',
        nivel: 'Medio',
        tipo: 'Teórico',
        explicacion: 'De Morgan transforma una negación de AND en una disyunción de negaciones.'
      },
      {
        pregunta: '¿Qué valor toma NOT 0 en álgebra booleana?',
        respuesta: '1',
        nivel: 'Fácil',
        tipo: 'Terminología',
        explicacion: 'NOT invierte el valor lógico: 0 pasa a 1 y 1 pasa a 0.'
      },
      {
        pregunta: 'Simplifica la expresión A AND (A OR B).',
        respuesta: 'A',
        nivel: 'Medio',
        tipo: 'Simplificación',
        explicacion: 'La expresión es equivalente a A porque A AND A = A y A AND B es absorbido.'
      },
      {
        pregunta: '¿Cuál es la tabla de verdad básica para A AND B?',
        respuesta: '00→0, 01→0, 10→0, 11→1',
        nivel: 'Medio',
        tipo: 'Conceptual',
        explicacion: 'AND solo produce 1 cuando ambas entradas son 1.'
      },
      {
        pregunta: 'Convierte la expresión booleana A OR (NOT A AND B) en una forma más simple.',
        respuesta: 'A OR B',
        nivel: 'Difícil',
        tipo: 'Simplificación',
        explicacion: 'La expresión se reduce por distribución y la ley de absorción.'
      },
      {
        pregunta: '¿Qué representa una tabla de verdad?',
        respuesta: 'Los resultados de una función lógica para todas las combinaciones posibles de entradas.',
        nivel: 'Fácil',
        tipo: 'Terminología',
        explicacion: 'Permite verificar una función booleana enumerando cada par de valores de entrada.'
      },
      {
        pregunta: '¿Por qué el álgebra de Boole es importante en el diseño de circuitos?',
        respuesta: 'Porque describe matemáticamente las operaciones lógicas que implementan las puertas digitales.',
        nivel: 'Medio',
        tipo: 'Aplicación',
        explicacion: 'Un circuito digital es una representación física de expresiones booleanas.'
      },
      {
        pregunta: 'Explica brevemente la ley distributiva en álgebra booleana.',
        respuesta: 'A AND (B OR C) = (A AND B) OR (A AND C)',
        nivel: 'Difícil',
        tipo: 'Teórico',
        explicacion: 'La distributiva permite reescribir expresiones para simplificarlas o implementarlas en lógica digital.'
      }
    ],
    evaluaciones: [
      {
        pregunta: '¿Cuál es el resultado de A AND B cuando A=1 y B=0?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Conceptual',
        opciones: ['0', '1', 'A', 'B'],
        respuesta: '0',
        nivel: 'Fácil',
        explicacion: 'AND solo produce 1 si ambas entradas son 1.'
      },
      {
        pregunta: 'NOT 0 es igual a 1.',
        tipoPregunta: 'Verdadero/Falso',
        tipo: 'Terminología',
        respuesta: 'verdadero',
        nivel: 'Fácil',
        explicacion: 'NOT invierte el valor lógico.'
      },
      {
        pregunta: 'Complete: NOT (A AND B) es equivalente a ____.',
        tipoPregunta: 'Completar',
        tipo: 'De Morgan',
        respuesta: '(NOT A) OR (NOT B)',
        nivel: 'Medio',
        explicacion: 'La ley de De Morgan transforma la negación de una conjunción en una disyunción de negaciones.'
      },
      {
        pregunta: 'Selecciona las identidades válidas en álgebra booleana.',
        tipoPregunta: 'Selección múltiple',
        tipo: 'Teórico',
        opciones: ['A AND 0 = 0', 'A OR 1 = A', 'A OR 0 = A', 'A AND 1 = A'],
        respuesta: ['A AND 0 = 0', 'A OR 0 = A', 'A AND 1 = A'],
        nivel: 'Difícil',
        explicacion: 'A OR 1 = 1, no A; las otras expresiones son identidades correctas.'
      },
      {
        pregunta: '¿Qué describe mejor la ley de absorción A AND (A OR B)?',
        tipoPregunta: 'Opción múltiple',
        tipo: 'Simplificación',
        opciones: ['A', 'B', 'A OR B', 'A AND B'],
        respuesta: 'A',
        nivel: 'Medio',
        explicacion: 'La ley de absorción simplifica esa expresión al valor A.'
      }
    ]
  }
];

const unidad1 = {
  titulo: 'Unidad 1',
  descripcion: 'Conceptos esenciales sobre arquitectura de computadores y lógica digital.',
  galeria: [
    'u1_img1.jpg'
  ],
  temas: temasUnidad1
};
