'use client'

import CardItem from "@/components/card-item"
import ButtonItem from "@/components/button-item"
import React, { useState, useRef } from "react"
import { Item } from "@/components/card-item"
export default function Home() {

  const left: Item[] | null = localStorage.getItem('left') == null ? [] : JSON.parse(localStorage.getItem('left'))
  const right: Item[] | null = localStorage.getItem('right') == null ? [] : JSON.parse(localStorage.getItem('right'))
  const [leftItems, setLeftItems] = useState<Item[] | []>(left)
  const [rightItems, setRightItems] = useState<Item[] | []>(right)

  const handleLeftCheckbox = (checked: boolean, idx: number) => {
    setLeftItems(leftItems.map((item, index) => index == idx ? { ...item, checked } : item))
  }
  const addLeftCheckbox = (item: string) => {
    const data = [...leftItems, { item, checked: false }]
    setLeftItems(data)
    localStorage.setItem('left', JSON.stringify(data))
  }
  const addRightCheckbox = (item: string) => {
    const data = [...rightItems, { item, checked: false }]
    setRightItems(data)
    localStorage.setItem('right', JSON.stringify(data))
  }
  const deleteLeftItem = (idx: number) => {
    const data = leftItems.filter((item, index) => index != idx)
    setLeftItems(data)
    localStorage.setItem('left', JSON.stringify(data))
  }
  const deleteRightItem = (idx: number) => {
    const data = rightItems.filter((item, index) => index != idx)
    setRightItems(data)
    localStorage.setItem('right', JSON.stringify(data))
  }
  const updateRight = (value: string, idx: number) => {
    const data = rightItems.map((item, index) => index == idx ? { ...item, item: value } : item)
    setRightItems(data)
    localStorage.setItem('right', JSON.stringify(data))
  }
  const updateLeft = (value: string, idx: number) => {
    const data = leftItems.map((item, index) => index == idx ? { ...item, item: value } : item);
    setLeftItems(data)
    localStorage.setItem('left', JSON.stringify(data));
  }
  const handleRightCheckbox = (checked: boolean, idx: number) => {
    const data = rightItems.map((item, index) => index == idx ? { ...item, checked } : item)
    setRightItems(data)
    localStorage.setItem('right', JSON.stringify(data));
  }

  const handleRightClick = () => {
    const left = leftItems.filter((item) => !item.checked)
    const right = [...rightItems, ...leftItems.filter((item) => item.checked)]
    setLeftItems(left)
    setRightItems(right)
    localStorage.setItem('left', JSON.stringify(left));
    localStorage.setItem('right', JSON.stringify(right));
  }

  const handleLeftClick = () => {
    const left = [...leftItems, ...rightItems.filter((item) => item.checked)];
    const right = rightItems.filter((item) => !item.checked)
    setRightItems(right)
    setLeftItems(left)
    localStorage.setItem('left', JSON.stringify(left));
    localStorage.setItem('right', JSON.stringify(right));
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
        <CardItem items={leftItems} onClick={handleLeftCheckbox} addItem={addLeftCheckbox} updateItem={updateLeft} deleteItem={deleteLeftItem} title="Left Side" />
        <div>
          <ButtonItem handleRightClick={handleLeftClick} handleLeftClick={handleRightClick} />
        </div>
        <CardItem items={rightItems} onClick={handleRightCheckbox} addItem={addRightCheckbox} updateItem={updateRight} deleteItem={deleteRightItem} title="Right Side" />
      </div>
    </div>
  )
}
