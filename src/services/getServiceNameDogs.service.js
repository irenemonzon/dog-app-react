import axios from 'axios'

export const objectDogs = obj => Object.keys(obj)
export const breedsArray = obj => objectDogs(obj).map(key => ({
  name: key,
  value: obj[key]
}))

export const getAll = async () => {
  const data = await axios.get('https://dog.ceo/api/breeds/list/all')
  return breedsArray(data.data.message)
}
