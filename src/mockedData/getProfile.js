import profile from './profile.json'

function getProfile () {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve(profile)
    }, 1e3)
  })
}

export default getProfile
