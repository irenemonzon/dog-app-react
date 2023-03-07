import { useEffect, useState } from 'react'
import Select, { components } from 'react-select'

const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false)
  const onMouseDown = () => setIsActive(true)
  const onMouseUp = () => setIsActive(false)
  const onMouseLeave = () => setIsActive(false)

  let bg = 'transparent'
  if (isFocused) bg = '#eee'
  if (isActive) bg = '#B2D4FF'

  const style = {
    alignItems: 'center',
    backgroundColor: bg,
    color: 'inherit',
    display: 'flex '
  }

  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  }

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type='checkbox' checked={isSelected} />
      {children}
    </components.Option>
  )
}

export const FilterBreedsDogs = ({ dataDogs }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [optionDogs, setOptionsDogs] = useState([])
  console.log('selectedOptions', selectedOptions)
  useEffect(() => {
    if (dataDogs.length) {
      console.log('nuevo arreglo de opciones')
      const arrayOptions = []
      dataDogs.map((name) => (
        arrayOptions.push({
          value: name.name,
          label: name.name
        })
      ))
      setOptionsDogs(arrayOptions)
      console.log('arrayOptions', arrayOptions)
    }
  }, [dataDogs])

  return (
    <div>
      <Select
        defaultValue={selectedOptions}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onChange={(options) => {
          if (Array.isArray(options)) {
            setSelectedOptions(options.map((opt) => opt.value))
          }
        }}
        options={optionDogs}
        components={{
          Option: InputOption
        }}
      />
      {/* <pre>{JSON.stringify({ selected: selectedOptions }, null, 2)}</pre> */}
    </div>
  )
}
