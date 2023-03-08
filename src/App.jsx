import { useEffect, useState } from 'react'
import { GetAllDogs } from '../src/services/GetDataDogs.service'
import { FilterBreedsDogs } from './components/FilterBreedsDogs'
import { ListAllDogs } from './components/ListAllDogs'

function App () {
  const [dataDogs, setDataDogs] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const [dataFilter, setDataFilter] = useState([])
  const [arrayDogs, setArrayDogs] = useState([])
  // console.log('selectedOptions', selectedOptions)
  console.log('dataFilter', dataFilter)
  console.log('dataFilter.length', dataFilter.length)

  const getServicesDogs = async () => {
    const getDataDogs = await GetAllDogs()
    setDataDogs(getDataDogs)
  }

  useEffect(() => {
    getServicesDogs()
  }, [])

  useEffect(() => {
    if (selectedOptions.length) {
      let arrayFilter = []
      arrayFilter = dataDogs.filter(el => {
        return selectedOptions.filter(x => el.name === x).length > 0
      })
      setDataFilter(arrayFilter)
    } else {
      setDataFilter([])
    }
  }, [selectedOptions, dataDogs])

  useEffect(() => {
    if (dataFilter.length > 0) {
      setArrayDogs(dataFilter)
    } else {
      setArrayDogs(dataDogs)
    }
  }, [dataFilter, dataDogs])

  return (
    <div className='container mx-auto my-10 '>
      <div className='items-center'>
        <h1 className='text-orange-600 text-5xl font-bold text-center mb-10'>Dog App</h1>
        <FilterBreedsDogs dataDogs={dataDogs} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
        <ListAllDogs dataDogs={arrayDogs} />
      </div>

    </div>
  )
}

export default App
