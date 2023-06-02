import DiningHall from "./DiningHall";

const Home = () => {
  const diningHalls = [
    { name: "JJ", people: ["amy", "bob", "chris"] },
    { name: "Faculty", people: ["david", "email", "ferris"] },
    { name: "Hewitt", people: ["Ariel", "Cairo", "Annie"] },
  ];

  return (
    <>
      <h1>Eat</h1>
      {diningHalls.map((hall, index) => (
        <DiningHall key={index} name={hall.name} people={hall.people} />
      ))}
    </>
  );
};
export default Home;
