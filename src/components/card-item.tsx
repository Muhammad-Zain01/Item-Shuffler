import { PlusOutlined } from "@ant-design/icons";
import { Card, Checkbox, List, Button } from "antd"
import React from "react"

type Item = {
    item: string;
    checked: boolean;
}
type ComponentProps = {
    items: Item[];
    title: string;
    onClick: (checked: boolean, idx: number) => void;
}


const CardItem: React.FC<ComponentProps> = ({ items, title, onClick }): JSX.Element => {
    const Title = (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            {title}
            <Button icon={<PlusOutlined />}></Button>
        </div>
    )
    return (
        <Card title={Title} hoverable style={{ width: '40%' }}>
            <List
                dataSource={items}
                renderItem={(item: Item, idx: number) => (
                    <List.Item>
                        <Checkbox checked={item.checked} onClick={(e: React.MouseEvent<HTMLInputElement>) => onClick(e.currentTarget.checked, idx)}>{item.item}</Checkbox>
                    </List.Item>
                )}
            />
        </Card>
    )
}

export default CardItem;