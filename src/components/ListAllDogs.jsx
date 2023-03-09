import { firstWordUppercase } from '../utils/firstWordUppercase'

export const ListAllDogs = ({ dataDogs }) => {
  return (
    <div className='mt-10'>
      {
        dataDogs.length > 0
          ? (
            <div className='xs:flex flex-col xs:items-center md:grid grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3  xl:grid-cols-4  pb-8'>
              {
                    dataDogs.map((dog, index) => (
                      <div className='flex justify-center items-center rounded-md border-2 border-blue-500 bg-white shadow-lg  py-8 w-60 text-center xs:mb-8 sm:mb-0' key={index}>

                        <ul className='list-none'>
                          <li>
                            <img className='h-[200px] w-[200px]' src={dog.DogImg} alt={dog.name} />
                          </li>
                          <li className='mt-4'>
                            <span>{firstWordUppercase(dog.name)}</span>
                          </li>

                        </ul>
                      </div>

                    ))
                }

            </div>
            )
          : (<p>No existe data aun</p>)
        }

    </div>
  )
}
