import React, { useState } from 'react'
import SoundBtn from './SoundBtn'
import './parent.css'

const Parent = () => {
  const [data, setData] = useState([
    {
      icon: 'https://example.com/icon18.png',
      label: 'Item 18',
      isSelected: false,
      value: 'item18'
    },
    {
      icon: 'https://example.com/icon19.png',
      label: 'Item 19',
      isSelected: false,
      value: 'item19'
    }
  ])

  function onIconClick (value) {
    const updatedData = data.map((item) => {
      console.log('i am in updateddata')
      if (item.value === value) {
        return { ...item, isSelected: !item.isSelected }
      }
      return { ...item }
    })
    setData(updatedData)
  }

  return (
    <div className="main-div">
      {data.map((item) => (
        <SoundBtn
          key={item.value}
          onUpdate={(val) => onIconClick(val)}
          item={item}
        />
      ))}
    </div>
  )
}

export default Parent
