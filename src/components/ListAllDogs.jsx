export const ListAllDogs = ({ dataDogs }) => {
  console.log('dataDogs', dataDogs)
  return (
    <div>
      {
        dataDogs.length > 0
          ? (
            <div>
              {
                    dataDogs.map((dog) => (
                      <ul key={dog.name}>
                        <li>
                          <img src={dog.DogImg} alt={dog.name} />
                        </li>
                        <li>
                          <span>{dog.name}</span>
                        </li>

                      </ul>

                    ))
                }

            </div>
            )
          : (<p>No existe data aun</p>)
        }

    </div>
  )
}
