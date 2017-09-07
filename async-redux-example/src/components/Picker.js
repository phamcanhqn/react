import React from 'react'

const Picker = ({value, onChange, options}) => (
  <span>
    <h2>{value}</h2>
    <select 
      onChange={e => onChange(e.target.value)} 
      value={value}
    >
      {
        options.map(option => 
          <option 
            value={option.value}
            key={option.name}
          >
            {option.name}
          </option>
        )
      }
    </select>
  </span>
)

export default Picker