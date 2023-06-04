import { Card } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
const Person = (props) => {
    const { name, duration } = props;
  return (
    <Card
      title={name}
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <Avatar size={64} icon={<UserOutlined />} />
      
      <p>duration = {duration}</p>
      
    </Card>
  );
};
export default Person;
