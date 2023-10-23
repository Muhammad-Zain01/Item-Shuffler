'use client'

import CardItem from "@/components/card-item"
import ButtonItem from "@/components/button-item"
import React, { useState, useRef } from "react"
export default function Home() {
  const [leftItems, setLeftItems] = useState([{ item: 'item 1', checked: false }, { item: 'item 2', checked: false }])
  const [rightItems, setRightItems] = useState([{ item: 'item 3', checked: false }, { item: 'item 4', checked: false }])

  const handleLeftCheckbox = (checked: boolean, idx: number) => {
    setLeftItems(leftItems.map((item, index) => index == idx ? { ...item, checked } : item))
  }
  const addLeftCheckbox = (item) => {
    setLeftItems([...leftItems, {item, checked:false}])
  }
  const addRightCheckbox = (item) => {
    setRightItems([...rightItems, {item, checked:false}])
  }
  const handleRightCheckbox = (checked: boolean, idx: number) => {
    setRightItems(rightItems.map((item, index) => index == idx ? { ...item, checked } : item))
  }

  const handleRightClick = () => {
    setLeftItems(leftItems.filter((item) => !item.checked))
    setRightItems([...rightItems, ...leftItems.filter((item) => item.checked)])
  }

  const handleLeftClick = () => {
    setRightItems(rightItems.filter((item) => !item.checked))
    setLeftItems([...leftItems, ...rightItems.filter((item) => item.checked)])
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
        <CardItem items={leftItems} onClick={handleLeftCheckbox} addItem={addLeftCheckbox} title="Left Side" />
        <div>
          <ButtonItem handleRightClick={handleLeftClick} handleLeftClick={handleRightClick} />
        </div>
        <CardItem items={rightItems} onClick={handleRightCheckbox} addItem={addRightCheckbox} title="Right Side" />
      </div>
    </div>
  )
}
