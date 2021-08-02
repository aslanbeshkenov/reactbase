import { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';

const AUTHORS = {
  ME: "Me",
  BOT: "Bot"
}

function App() {
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.BOT) {
      setTimeout(() => {
        setMessageList((currentMessageList) => [
          ...currentMessageList,
          { author: AUTHORS.BOT, text: "Привет. Не тревожь меня я Бот!" },
        ])
      }, 1500)
    }
  }, [messageList])

  const handleMessageChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault()

    setMessageList((currentMessageList) => [
      ...currentMessageList,
      { author: AUTHORS.ME, text: inputValue },
    ])
    setInputValue("")
  }

  return (
    <div className="App">
      <div className="App-messages">
        My First React App!
        {messageList.map((message, index) => (
          <Message key={index} text={message.text} author={message.author} />
        ))}
      </div>

      <form className="app__form" onSubmit={handleMessageSubmit}>
        <input
          required
          className="bordered"
          placeholder="Введите сообщение"
          value={inputValue}
          onChange={handleMessageChange}
        />
        <button className="btn">Send</button>
      </form>

    </div>
  );
}

export default App;
