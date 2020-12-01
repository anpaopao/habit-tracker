import { useState } from 'react'

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults)

  // reset to default values
  function reset() {
    setValues(defaults)
  }

  function updateValue(e) {
    // check if its a number and convert
    const value =
      e.target.type === 'number'
        ? parseInt(e.target.value) ||
          // if the value is NaN (when the field is cleared) this will catch it
          e.target.value
        : e.target.value

    setValues({
      // copy the existing values into import PropTypes from 'prop-types'
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    })
  }

  return { values, updateValue, reset }
}
