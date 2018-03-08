export const valueString = {
  work_with_me: `Proven competency working in a team, prove multicultural social skills working in an international company. Active member of the Chingu Developer community, mindful of the deadlines and project guidelines.`,
  about: `I start my developer carrier with the OOP paradigm,  my first job were working with C# as the years pass and I were always improving my learning in the .NET world. One day my good friend show the other face of javascript I did not know after that I start digging more in the JS world and learning about Function Programing. I felt attache with FP and JS I decided to keep my developer live as a JS programmer.

  “Ever stop learning whatever you like”`,
  team: `Team spirit is a key for the success of a project or within the work space. Basic principles of soft skills, communication is one of my abilities to improve day-to-day relationships. As a member of a team, I always look for good interaction and integration.`,
  code: `I have 4 years of coding experiences. Learning and improving my coding skills are challenges where I do my best to overcome the challenges. Software community is growing fast that is why I’m always on top of  new libraries or frameworks, reading books and post, catching up with tweets, listening to podcast, and watching a few events.`
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
