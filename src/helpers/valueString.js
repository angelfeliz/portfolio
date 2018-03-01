export const valueString = {
  work_with_me: `Proficiency proven working on team, having proved a multicultural social skill working at international company and member active of the chingu developer community. Compromised with the client to deliver the project as they expect. Projects sometimes can have a adversity, having a good communication with the team or the client is so important as writing the code which will make the project stand up,  the wellness for a project or a one time job depends on the good communication. `,
  about: `I started my developer learning how to code with OOP, I had my first job working with C# and .NET at the pass of couple of years and while I was improving my in the OOP world with the C# language, one day a friend show me the real face of javaScript and Functional Programming since that day I started getting more and more involved in the JavaScript world and his ecosystem and also FP. At the time I realize that I felt lousy in the CS world yes! that is right I became a JS programmer.

  “Ever stop learning whatever you like”`,
  team: `The team integration is one of the As for wellness of the project or work place, it depends on  not only of how we handle the code between each one, also of a high soft skill to handle a good coworker relationship. Following  basic principle of soft skills communication is one of my abilities to improve my communication on every day of my live. As part of a team I always seek for wellness of the communication and the participation.`,
  code: `I have 4 years of coding experiences, to be honest I have not get tired of learning and improving my coding skills,very eager of learning new technique of how to solve dev problem always on top on the edge of the new librarys or framework, reading dev books, medium post, catching up with the tweet about the coding world, listen to podcast, and watching a few events.`
}

export function palletColors () {
  const colors = {
    // 1: '#e3efeb',//light blue
    1: '#b5c4cb',
    2: '#313d54', // dard blue
    3: '#d56a5a', // orange-red
    4: '#f6ca90', // peanch
    5: '#ebe3d9' // white-sand
  }

  let position = Math.round(Math.random() * (5 - 1)) + 1
  return colors[`${position}`]
}
