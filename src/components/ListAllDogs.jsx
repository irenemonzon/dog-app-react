export const ListAllDogs = ({ dataDogs }) => {
  console.log('dataDogs', dataDogs)
  return (
    <div className='mt-32'>
      {
        dataDogs.length > 0
          ? (
            <div className='xs:flex flex-col xs:items-center sm:grid grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols pb-8'>
              {
                    dataDogs.map((dog) => (
                      <div className='flex justify-center items-center rounded-md border-2 border-blue-300 shadow-lg  py-8 w-60 text-center xs:mb-8 sm:mb-0 hover:border-blue-500' key={dog.name}>

                        <ul className='list-none'>
                          <li>
                            <img className='h-[200px] w-[200px]' src={dog.DogImg} alt={dog.name} />
                          </li>
                          <li>
                            <span>{dog.name}</span>
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
