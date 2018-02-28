export const valueString = {
  work_with_me: `Proficiency proven working on team, having proved a multicultural social skill working at international company and member active of the chingu developer community. Compromised with the client to deliver the project as they expect. Projects sometimes can have a adversity, having a good communication with the team or the client is so important as writing the code which will make the project stand up,  the wellness for a project or a one time job depends on the good communication. `,
  about: ``,
  team: `Set up a good comunication with each persone in my team, to have a very good straight
           forward comunication, have the same idea and well behavier of the project or the requisition we are attending.`,
  code:
    'As a curious developer of news product the community is dispatching.. This is one of the principal feacture all developers needs to have sharp.' +
    'A have a few project in JS using as back-end and on the front-end with ' +
    'JS vanilla and ReactJS.'
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
