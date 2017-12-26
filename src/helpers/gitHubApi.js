import axios from 'axios'

export const getAllRepo = () => {
  return axios
    .get('https://api.github.com/users/angelfeliz/repos')
    .then(responses => {
      console.log('repos', responses.data)
      return responses.data
    })
    .catch(err => console.log(err))
}

export const getReadme = (owner, repo) => {
  return axios
    .get(`https://api.github.com/repos/${owner}/${repo}/readme`)
    .then(responses => {
      console.log('readme', responses.data)
      console.log(
        decodeURIComponent(escape(window.atob(responses.data.content)))
      )
      return decodeURIComponent(escape(window.atob(responses.data.content)))
    })
    .catch(err => console.log(err))
}
