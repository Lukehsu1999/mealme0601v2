import { Button, Card, Col, Row } from "antd";
import Person from "./Person";

const DiningHall = (props) => {
  const { name, people } = props;
  // name: "JJ", 
  // people: [{name: "amy", duration: "10am-12pm"}, {name: "bob", duration: "12-1pm"}, {name: "chris", duration: "6-7pm"}] },
  return (
    <Card
      title={name}
      headStyle={{ background: "#7dbcea" }}
      style={{ width: "100%", margin: 10 }}
    >
      {people.map((ppe, index) => (
        <Person key={index} name={ppe.name} duration={ppe.duration} />
      ))}
    </Card>
  );
};

export default DiningHall;
