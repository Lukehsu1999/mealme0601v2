import Chatbox from "./Chatbox";

const Message = () => {
  const chatbox = [
    { name: "Luke", text: "Meet me in Hewitt" },
    { name: "Annie", text: "Leaving soon" },
    { name: "Cairo", text: "Let's eat at JJ instead" },
  ];

  return (
    <>
      <h1>Inbox</h1>
      {chatbox.map((message, index) => (
        <Chatbox key={index} name={message.name} text={message.text} />
      ))}
    </>
  );
};
export default Message;
