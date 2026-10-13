/**
 * El laboratorio de Paint: pequeños artistas digitales
 * Definición pedagógica de los 4 retos educativos
 */

const CHALLENGES_DATA = [
  {
    id: 1,
    slug: 'mi-primera-casa-digital',
    title: 'Mi primera casa digital',
    category: 'Formas geométricas',
    badgeColor: '#3b82f6',
    objective: 'Aprender a utilizar las formas geométricas y el relleno de color.',
    instructions: 'Dibuja una casa utilizando rectángulos, cuadrados, triángulos y otras formas de Paint. Añade una puerta, ventanas, un techo y un jardín con flores o un árbol.',
    tools: [
      { name: 'Rectángulo', icon: 'rect' },
      { name: 'Triángulo', icon: 'triangle' },
      { name: 'Relleno con color', icon: 'bucket' },
      { name: 'Selector de colores', icon: 'eyedropper' }
    ],
    tips: [
      'Mantén presionada la tecla Shift mientras dibujas un rectángulo para hacer un cuadrado perfecto.',
      'Usa el bote de pintura para rellenar las paredes con tus colores favoritos.',
      '¡Asegúrate de que las líneas estén bien cerradas antes de usar el bote de pintura para que el color no se escape!'
    ],
    referenceGuide: 'Dibuja un cuadrado grande para el cuerpo de la casa, un triángulo para el techo, rectángulos para la puerta y las ventanas, y círculos o estrellas en el cielo.'
  },
  {
    id: 2,
    slug: 'un-jardin-lleno-de-vida',
    title: 'Un jardín lleno de vida',
    category: 'Pinceles y color',
    badgeColor: '#10b981',
    objective: 'Practicar el pincel, el trazo libre y la armonía de colores.',
    instructions: 'Crea un jardín con flores, árboles, pasto y mariposas. Utiliza diferentes colores para que tu jardín se vea alegre y lleno de naturaleza.',
    tools: [
      { name: 'Pinceles variados', icon: 'brush' },
      { name: 'Lápiz', icon: 'pencil' },
      { name: 'Paleta de colores', icon: 'palette' },
      { name: 'Relleno de color', icon: 'bucket' }
    ],
    tips: [
      'Prueba los distintos tipos de pinceles: el pincel para óleo, la acuarela y el aerógrafo crean texturas fantásticas en las flores.',
      'Cambia el grosor del pincel usando la opción "Tamaño" en la barra de Paint.',
      'Dibuja mariposas de alas brillantes usando pequeños toques de color.'
    ],
    referenceGuide: 'Llena la parte inferior de verde con pasto suave, añade tallos con el lápiz y usa el pincel grueso o el aerógrafo para pétalos coloridos.'
  },
  {
    id: 3,
    slug: 'un-robot-increible',
    title: 'Un robot increíble',
    category: 'Construcción con formas',
    badgeColor: '#f59e0b',
    objective: 'Construir una figura tecnológica combinando formas geométricas y líneas.',
    instructions: 'Diseña un robot utilizando cuadrados, rectángulos, círculos y líneas. Agrégale ojos luminosos, brazos mecánicos, piernas y detalles que lo hagan único.',
    tools: [
      { name: 'Formas geométricas', icon: 'shapes' },
      { name: 'Contornos y líneas', icon: 'outline' },
      { name: 'Relleno de color', icon: 'bucket' },
      { name: 'Líneas rectas', icon: 'line' }
    ],
    tips: [
      'Combina diferentes rectángulos para la cabeza, el pecho y las extremidades.',
      'Agrega botones, antenas con pequeñas esferas, medidores de energía o una pantalla en su pecho.',
      'Usa colores metálicos como grises, azules eléctricos y amarillos neón.'
    ],
    referenceGuide: 'Cuerpo cuadrado, cabeza rectangular con antenas, ojos circulares luminosos y brazos articulados con pinzas o herramientas.'
  },
  {
    id: 4,
    slug: 'mi-obra-maestra',
    title: 'Mi obra maestra',
    category: 'Proyecto integrador final',
    badgeColor: '#eab308',
    objective: 'Integrar con libertad y orgullo todas las herramientas aprendidas en Paint.',
    instructions: '¡Es tu momento de brillar! Crea tu obra maestra definitiva. Puedes dibujar una ciudad del futuro, un planeta submarino, un bosque mágico o cualquier idea original. Usa todo lo que aprendiste.',
    tools: [
      { name: 'Todas las formas', icon: 'shapes' },
      { name: 'Todos los pinceles', icon: 'brush' },
      { name: 'Curvas y líneas', icon: 'curve' },
      { name: 'Relleno y paleta libre', icon: 'palette' }
    ],
    tips: [
      'Dedica tiempo a los detalles: añade sombras suaves, luces con el aerógrafo y diferentes capas de color.',
      'Combina formas precisas con trazos libres para lograr dinamismo.',
      'Firma tu obra en una esquina con orgullo: ¡eres un auténtico artista digital!'
    ],
    referenceGuide: 'Una composición completa con fondo, personajes, escenario y una rica variedad de texturas y colores.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CHALLENGES_DATA };
}
