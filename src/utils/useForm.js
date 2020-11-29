import { useState } from 'react'

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults)

  function updateValue(e) {
    // check if its a number and convert
    const { value } = e.target.type === 'number' ? parseInt(e.target) : e.target

    setValues({
      // copy the existing values into import PropTypes from 'prop-types'
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    })
  }

  return { values, updateValue }
}
