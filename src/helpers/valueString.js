import img01 from '../images/sampleProjects/01.jpg'
import img02 from '../images/sampleProjects/02.jpeg'
import img03 from '../images/sampleProjects/6.jpg'
import img04 from '../images/sampleProjects/27.jpg'
import img05 from '../images/sampleProjects/48.jpg'
import img06 from '../images/sampleProjects/60.jpg'
import img07 from '../images/sampleProjects/92.jpg'
import img08 from '../images/sampleProjects/dark-b.jpeg'
import img09 from '../images/sampleProjects/dark-diagram.jpeg'

export const valueString = {
  work_with_me: `If you are looking for a developer who like to code for fun and living.
    
            Team: I do my best to have a good communication with each person in my team, 
            to have a very good straight forward communication. In the environment of the project. 
            Have the same goal and shared the well behavior of the requisition we are attenden and the project.`,
  about: `Hi my name is Ange, a happy coder, in the developer world 
        I had done more web and a few thing for mobile. Outside the word of software, 
        I like to do sport all ready play a few ones and willing to play others, 
        also an enthusiastic photography and always trying to have a book to be reading.`,
  team: `Set up a good comunication with each persone in my team, to have a very good straight
           forward comunication, have the same idea and well behavier of the project or the requisition we are attending.`,
  code: `This is one of the principal feacture all developers needs to have sharp. A have a few project in back-end lenguage c# and JS, also front-end with JS vanilla and ReactJS.`
}

export const showcaseImg = () => {
  let showcase = {
    1: img01,
    2: img02,
    3: img03,
    4: img04,
    5: img05,
    6: img06,
    7: img07,
    8: img08,
    9: img09
  }
  let position = Math.round(Math.random() * (9 - 1)) + 1
  return showcase[`${position}`]
}
