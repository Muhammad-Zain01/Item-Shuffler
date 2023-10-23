import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "antd"
import React from "react";

type ComponentProps = {
    handleRightClick: () => void;
    handleLeftClick: () => void;
}
const ButtonItem: React.FC<ComponentProps> = ({ handleRightClick, handleLeftClick }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignContent: 'center', height: '100%' }}>
            <Button icon={<DoubleLeftOutlined />} onClick={handleRightClick}></Button>
            <Button icon={<DoubleRightOutlined />} onClick={handleLeftClick}></Button>
        </div>
    )
}

export default ButtonItem;