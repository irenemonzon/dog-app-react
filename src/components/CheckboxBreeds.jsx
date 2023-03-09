/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { getImagenDogs } from '../services/getServiceImage.service'

export const CheckboxBreeds = ({ listBreedsDogs, dataFilterBreeds, setDataFiterBreeds }) => {
  const [initialObject, setInitialObject] = useState({})

  const handleChange = async (event) => {
    const { checked, name } = event.target
    setInitialObject({
      ...initialObject,
      [name]: checked
    })
    if (checked) {
      const getImage = await getImagenDogs(name)
      const ArrayImage = getImage.DogImg.map(value => ({
        name,
        DogImg: value
      })
      )
      setDataFiterBreeds([...dataFilterBreeds, ...ArrayImage])
    } else {
      const deleteBreeds = dataFilterBreeds.filter(item => item.name !== name)
      setDataFiterBreeds(deleteBreeds)
    }
  }

  return (
    <div className='mt-10 mr-8  border-2 border-gray-200 rounded-md py-4 pl-4 '>
      <p className='mb-4'>Filtrar</p>
      <ul className='max-h-96 overflow-y-auto '>
        {listBreedsDogs.map((breed) => (
          <li key={breed.name}>
            <label>
              <input
                type='checkbox'
                name={breed.name}
                value={breed.name}
                onChange={handleChange}
              /> {breed.name}
            </label>
            <ul className='ml-4'>
              {breed.value.map((subBreed, index) => (
                <li key={index}>
                  <label>
                    <input
                      name={`${breed.name}/${subBreed}`}
                      type='checkbox'
                      value={`${breed.name}/${subBreed}`}
                      onChange={handleChange}
                    /> {subBreed}
                  </label>

                </li>

              ))}
            </ul>

          </li>

        ))}

      </ul>

    </div>
  )
}
