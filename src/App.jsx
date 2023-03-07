import { useEffect, useState } from 'react'
import { GetAllDogs } from '../src/services/GetDataDogs.service'
import { FilterBreedsDogs } from './components/FilterBreedsDogs'
import { ListAllDogs } from './components/ListAllDogs'

function App () {
  const [dataDogs, setDataDogs] = useState([])

  const getServicesDogs = async () => {
    const getDataDogs = await GetAllDogs()
    setDataDogs(getDataDogs)
  }

  useEffect(() => {
    getServicesDogs()
  }, [])

  return (
    <div className='container mx-auto my-10 '>
      <div className='items-center'>
        <h1 className='text-orange-600 text-5xl font-bold text-center mb-10'>Dog App</h1>
        <FilterBreedsDogs dataDogs={dataDogs} />
        <ListAllDogs dataDogs={dataDogs} />
      </div>

    </div>
  )
}

export default App
