import { EditOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Card, Checkbox, List, Button, Input } from "antd"
import React from "react"

type Item = {
    item: string;
    checked: boolean;
}
type ComponentProps = {
    items: Item[];
    title: string;
    onClick: (checked: boolean, idx: number) => void;
    addItem: (e: string) => void;
}


const CardItem: React.FC<ComponentProps> = ({ items, title, onClick, addItem }): JSX.Element => {
    const [showInputBox, setShowInput] = React.useState([])
    const Title = (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {title}
            <Button icon={<PlusOutlined />} onClick={() => {addItem('Item')}}></Button>
        </div>
    )
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
                                        <Input defaultValue={item.item} />
                                        <Button style={{ marginLeft: 10 }} icon={<SaveOutlined />} onClick={() => setShowInput(showInputBox.filter((i) => i != idx))}></Button>
                                    </>
                                ) : (
                                    <>
                                        <Checkbox checked={item.checked} onClick={(e: React.MouseEvent<HTMLInputElement>) => onClick(e.currentTarget.checked, idx)}>{item.item}</Checkbox>
                                        <Button style={{ marginLeft: 10 }} icon={<EditOutlined />} onClick={() => setShowInput([...showInputBox, idx])}></Button>
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