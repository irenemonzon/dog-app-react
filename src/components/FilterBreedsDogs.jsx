import { useEffect, useState } from 'react'
import Select, { components } from 'react-select'
import { firstWordUppercase } from '../utils/firstWordUppercase'

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
      <input type='checkbox' checked={isSelected} readOnly />
      {children}
    </components.Option>
  )
}

export const FilterBreedsDogs = ({ dataDogs, setSelectedOptions }) => {
  const [optionDogs, setOptionsDogs] = useState([])

  useEffect(() => {
    if (dataDogs.length) {
      const arrayOptions = []
      dataDogs.map((name) => (
        arrayOptions.push({
          value: name.name,
          label: firstWordUppercase(name.name)
        })
      ))
      setOptionsDogs(arrayOptions)
    }
  }, [dataDogs])

  return (
    <div className='flex'>

      <div className='w-[90%]'>
        <Select
          defaultValue={[]}
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
      </div>
    </div>
  )
}
