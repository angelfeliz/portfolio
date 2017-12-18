import axios from 'axios'

export const getAllRepo = () => {
  return axios
    .get('https://api.github.com/users/angelfeliz/repos')
    .then(responses => {
      return responses.data
    })
    .catch(err => console.log(err))
}
