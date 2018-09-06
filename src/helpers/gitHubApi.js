import axios from 'axios'

export const listOfRepoToShow = {
  portfolio: true,
  'Bears-Team-22': true,
  advanced_react_native: true,
  rcnative: true,
  graphicTest: true,
  freeCodeCamp: true,
  fccChallenges: true,
  oil_car_services: true
}
export const getAllRepo = () => {
  return axios
    .get('https://api.github.com/users/angelfeliz/repos')
    .then(responses => {
      return responses.data
    })
    .catch(err => console.log(err))
}

export const getReadme = (owner, repo) => {
  return axios
    .get(`https://api.github.com/repos/${owner}/${repo}/readme`)
    .then(responses => {
      return decodeURIComponent(escape(window.atob(responses.data.content)))
    })
    .catch(err => console.log(err))
}
