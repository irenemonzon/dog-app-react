import { useEffect, useState } from 'react'
import { GetAllDogs } from '../src/services/GetDataDogs.service'
import { CheckboxBreeds } from './components/CheckboxBreeds'
import { ListAllDogs } from './components/ListAllDogs'
import { Loading } from './components/Loading'
import { getAll } from './services/getServiceNameDogs.service'

function App () {
  const [dataDogs, setDataDogs] = useState([])
  const [dataFilterBreeds, setDataFiterBreeds] = useState([])
  const [arrayDogs, setArrayDogs] = useState([])
  const [listBreedsDogs, setListBreedsDogs] = useState([])

  const getServicesDogs = async () => {
    const getDataDogs = await GetAllDogs()
    setDataDogs(getDataDogs)
  }
  const getAllService = async () => {
    const getDataAll = await getAll()
    setListBreedsDogs(getDataAll)
  }

  useEffect(() => {
    getServicesDogs()
    getAllService()
  }, [])

  useEffect(() => {
    if (dataFilterBreeds.length > 0) {
      setArrayDogs(dataFilterBreeds)
    } else {
      setArrayDogs(dataDogs)
    }
  }, [dataFilterBreeds, dataDogs])

  return (
    <div className='container mx-auto my-10 xl:mx-20'>
      <div className='items-center'>
        <h1 className='text-orange-600 text-5xl font-bold text-center mb-10'>Dog App</h1>

        {arrayDogs.length && listBreedsDogs.length
          ? (
            <div className='flex justify-between'>
              <div className='w-1/4 '>
                <CheckboxBreeds
                  listBreedsDogs={listBreedsDogs}
                  dataFilterBreeds={dataFilterBreeds}
                  setDataFiterBreeds={setDataFiterBreeds}
                />
              </div>

              <div className='3/4'>
                <ListAllDogs
                  dataDogs={arrayDogs}
                />
              </div>
            </div>

            )
          : (

            <Loading />

            )}

      </div>

    </div>
  )
}

export default App
