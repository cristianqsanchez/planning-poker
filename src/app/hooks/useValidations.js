import { useState } from 'react'

export default function useValidation () {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const newValue = event.target.value.replace(/[^a-z]/gi, '')
    return setValue(newValue)
  }

  return { handleChange, value }
}
