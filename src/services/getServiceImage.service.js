import axios from 'axios'

export const getImagenDogs = async (name) => {
  const data = await axios.get(`https://dog.ceo/api/breed/${name}/images`)
  const DogImg = data.data.message
  return { name, DogImg }
}
