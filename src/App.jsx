import { useEffect, useState } from 'react'
import { GetAllDogs } from '../src/services/GetDataDogs.service'
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
    <div>
      <h1>Dog App</h1>
      <ListAllDogs dataDogs={dataDogs} />
    </div>
  )
}

export default App
