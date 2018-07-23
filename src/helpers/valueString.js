export const valueString = {
  en: {
    work_with_me: `Mindful of the deadlines and project guidelines. 
                   Proven capacity working in a team, prove multicultural 
                   social skills working in an international company. 
                   Active member of the Chingu Developer community.`,
    about: `I started my developer career with the OOP paradigm,  
            my first job was working with C#, as the years went 
            by I improved my skills in the .NET framework.
            One day a good friend showed me the other face of
            Javascript, that I did not know. After that I started
            learning more in the JS world and learning about 
            Functional Programming. I decided to pursue 
            as a JS programming.
   
    “Never stop learning whatever you love”`,
    team: `Team spirit is a key for the success of a project
           or within the work space. Basic principles of soft 
           skills, communication is one of my abilities to 
           improve day-to-day relationships. As a member of a 
           team, I always look for good interaction and integration.`,
    code: `I have 4 years of coding experiences. Learning and improving my coding skills are challenges where I do my best to overcome. Software community is growing fast that is why I’m always on top of  new libraries or frameworks, reading books and post, catching up with tweets, listening to podcast, and watching a few developers events.`
  },
  es: {
    work_with_me:
      'Consciente del tiempo de entrega y los lineamientos de los' +
      'proyectos. Experiencia trabajando en equipo, habilidades de ' +
      'comunicación multiculturales obtenidas trabajando en ' +
      'empresas internacional.',

    about:
      'Inicie mi carrera de desarrollador con el paradigma OOP, ' +
      'utilizando el lenguaje C# con los a;os mejore mis habilidades ' +
      'desarrollando proyectos sobre el .NET framework. Un dia un buen ' +
      'amigo me mostró la otra cara de Javascript, la cual desconocía. ' +
      'Después de eso inicié mis aprendizajes sobre programación funcional ' +
      'y el lenguaje de Javascript y su ecosistema. /n ' +
      '“Nunca pares de aprender lo que te gusta”',

    team:
      'Mantener un buen espíritu de equipo es una clave para el ' +
      'bienestar de un proyecto. Los principios de la buena ' +
      'comunicación es una de las habilidades para mejorar ' +
      'la relaciones diarias. Como miembro del equipo busco ' +
      'la buena integración y la sana interacción de todo el ambiente.'
  }
}

export function palletColors () {
  const colors = {
    1: '#e9a841', // mostaza
    2: '#511810', // maron rojiso
    3: '#1c534c', // verde suave
    4: '#313d54' // azul oscuro
  }

  let position = Math.round(Math.random() * (4 - 1)) + 1
  return colors[`${position}`]
}
