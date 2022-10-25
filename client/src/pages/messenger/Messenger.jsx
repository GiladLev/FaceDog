import "./Messenger.css";
import Navbar from "../../components/Navbar";
import Conversation from "../../components/messenger/conversation/Conversation";
import Message from "../../components/messenger/Message/Message";
import ChatOnline from "../../components/messenger/chatOnline/ChatOnline";

const Messenger = () => {
  return (
    <>
      <Navbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeHolder="Search for friends" className="chatMenuInput" />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="ChatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
              ></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>

        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
