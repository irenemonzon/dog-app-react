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
    <div className='container mx-auto my-10 xxl:mx-20 overflow-x-hidden'>
      <div className='items-center'>
        <h1 className='text-orange-700 text-6xl font-bold text-center mb-10'>Dog App</h1>

        {arrayDogs.length && listBreedsDogs.length
          ? (
            <div className='flex xs:flex-col sm:flex-row sm:justify-between'>
              <div className='xs:w-full sm:w-1/4 xs:ml-4 md:ml-0  xxl:w-1/5'>
                <CheckboxBreeds
                  listBreedsDogs={listBreedsDogs}
                  dataFilterBreeds={dataFilterBreeds}
                  setDataFiterBreeds={setDataFiterBreeds}
                />
              </div>

              <div className='xs:w-full sm:w-3/4 xxl:w-4/5'>
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
