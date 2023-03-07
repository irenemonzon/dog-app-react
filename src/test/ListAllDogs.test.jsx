import { ListAllDogs } from '../components/ListAllDogs'
import { render } from '@testing-library/react'

describe('ListAllDogs', () => {
  it('shoul expect listitem', () => {
    render(<ListAllDogs dataDogs={{
      DogImg: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_3286.jpg',
      name: 'affenpinscher'
    }}
           />)
  })
})
