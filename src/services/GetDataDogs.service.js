import axios from 'axios'

export const GetAllDogs = async () => {
  const url = 'https://dog.ceo/api/breeds/list/all'
  const urlImage = 'https://dog.ceo/api/breed/'
  const res = await axios.get(url)
  const breeds = Object.keys(res.data.message)

  const dogData = await Promise.all(breeds.map(async name => {
    const data = await axios.get(`${urlImage}${name}/images/random`)
    const DogImg = data.data.message
    return { name, DogImg }
  }))
  return dogData
}
