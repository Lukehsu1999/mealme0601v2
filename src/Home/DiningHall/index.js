import { Button, Card, Col, Row } from "antd";

const DiningHall = (props) => {
  const { name, people } = props;
  return (
    <Card
      title={name}
      headStyle={{ background: "#7dbcea" }}
      style={{ width: "100%", margin: 10 }}
    >
      <p>People: {people.join(', ')}</p>
    </Card>
  );
};

export default DiningHall;
