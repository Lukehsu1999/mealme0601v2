import { Button, Card, Col, Row } from "antd";

const Chatbox = (props) => {
  const { name, text } = props;
  return (
    <Card
      title={name}
      headStyle={{ background: "#7dbcea" }}
      style={{ width: "100%", margin: 10 }}
    >
      <p>{text}</p>
    </Card>
  );
};

export default Chatbox;