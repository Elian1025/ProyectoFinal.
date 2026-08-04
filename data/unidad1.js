/*
  data/unidad1.js
  Estructura de datos de la Unidad 1.
  - `temasUnidad1` contiene cada tema con apartados organizados para renderizar desde JavaScript.
  - Los campos de texto pueden contener múltiples párrafos dentro de literales de plantilla.
  - `imagenes` acepta rutas completas para facilitar la integración con la galería visual.
*/
const temasUnidad1 = [
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  }
];

const unidad1 = {
  titulo: 'Unidad 1',
  descripcion: 'Conceptos esenciales sobre arquitectura de computadores y lógica digital.',
  temas: temasUnidad1
};
