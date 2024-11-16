import Message from "./Message";

const Messages = () => {
  return (
    <div className="px-4 flex-1  overflow-auto ">
      <div className="custom-scrollbar">
        <div className="custom-scrollbar-thumb"></div>
      </div>
      <div className="content">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Messages;
