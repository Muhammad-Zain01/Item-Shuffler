import React, { ChangeEvent } from "react"
import { CodeSandboxCircleFilled, ConsoleSqlOutlined, DeleteOutlined, EditOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Card, Checkbox, List, Button, Input } from "antd"

export type Item = {
    item: string;
    checked: boolean;
}
type ComponentProps = {
    items: Item[];
    title: string;
    onClick: (checked: boolean, idx: number) => void;
    addItem: (e: string) => void;
    updateItem: (value: string, idx: number) => void;
    deleteItem: (idx:number) => void
}

type InputChange = {
    [key: number]: string
}

const CardItem: React.FC<ComponentProps> = ({ items, title, onClick, addItem, updateItem, deleteItem }): JSX.Element => {
    const [showInputBox, setShowInput] = React.useState([])
    const [inputChanges, setInputChanges] = React.useState<InputChange>({})
    const Title = (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {title}
            <Button icon={<PlusOutlined />} onClick={() => { addItem('Item') }}></Button>
        </div>
    )
    const handleSave = (idx: number) => {
        setShowInput(showInputBox.filter((i) => i != idx))
        if (inputChanges[idx]) {
            updateItem(inputChanges[idx], idx)
            setInputChanges(Object.keys(inputChanges).filter((index) => Number(index) != idx ?? { [index]: inputChanges[Number(index)] }))
        }
    }
    const handleChange = (value: string, idx: number) => {
        setInputChanges({ ...inputChanges, [idx]: value })
    }
    return (
        <Card title={Title} hoverable style={{ width: '40%' }}>
            <List
                dataSource={items}
                renderItem={(item: Item, idx: number) => (
                    <List.Item>
                        {
                            showInputBox.includes(idx) ?
                                (
                                    <>
                                        <Input defaultValue={item.item} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value, idx)} />
                                        <Button style={{ marginLeft: 10 }} icon={<SaveOutlined />} onClick={() => handleSave(idx)}></Button>
                                    </>
                                ) : (
                                    <>
                                        <Checkbox checked={item.checked} onClick={(e: React.MouseEvent<HTMLInputElement>) => onClick(e.currentTarget.checked, idx)}>{item.item}</Checkbox>
                                        <div>
                                            <Button style={{ marginLeft: 10 }} icon={<EditOutlined />} onClick={() => setShowInput([...showInputBox, idx])}></Button>
                                            <Button style={{ marginLeft: 10 }} icon={<DeleteOutlined />} onClick={() => deleteItem(idx)}></Button>
                                        </div>
                                    </>
                                )
                        }
                    </List.Item>
                )}
            />
        </Card>
    )
}

export default CardItem;