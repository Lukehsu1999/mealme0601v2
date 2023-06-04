import DiningHall from "./DiningHall";

const Home = () => {
  const diningHalls = [
    { hallname: "JJ", people: [{name: "amy", duration: "10am-12pm"}, {name: "bob", duration: "12-1pm"}, {name: "chris", duration: "6-7pm"}] },
    { hallname: "Faculty", people: [{name: "amy", duration: "10am-12pm"}, {name: "bob", duration: "12-1pm"}, {name: "chris", duration: "6-7pm"}] },
    { hallname: "Hewitt", people: [{name: "amy", duration: "10am-12pm"}, {name: "bob", duration: "12-1pm"}, {name: "chris", duration: "6-7pm"}] },
  ];

  return (
    <>
      <h1>Eat</h1>
      {diningHalls.map((hall, index) => (
        <DiningHall key={index} name={hall.hallname} people={hall.people} />
      ))}
    </>
  );
};
export default Home;
