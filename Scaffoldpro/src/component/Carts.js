import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
function Carts({ fromHomeCart }) {
  debugger
  return (
    Object.keys(fromHomeCart).map(e => {
      let valueOfTheKeys = fromHomeCart[e]
      return < Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src={valueOfTheKeys.image}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title={valueOfTheKeys.name}
          description={valueOfTheKeys.description}
        />
        {valueOfTheKeys.count}
      </Card>
    })
  )
}
export default Carts;