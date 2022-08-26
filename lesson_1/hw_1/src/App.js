import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Massage from './Massage';





function App() {
  const [messageList, setMessageList] = useState([]);
  const ref = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const author = target.author.value;
    const text = target.text.value;

    setMessageList(prev => [...prev, {
      id: giveLastId(prev),
      author: author,
      text: text,
    }]);

  }

  function giveLastId(array) {
    return array.length ? array[array.length - 1].id + 1 : 0;
  }

  useEffect(() => {
    setTimeout(() => {
      botAnswer(messageList);
    }, 1500);
  }, [messageList]);

  function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList(prev => [...prev, {
        id: giveLastId(prev),
        text: `Сообщение автора ${lastAuthor.author} отправлено`,
      }]);
    }
    ref.current.focus()
  }


  return (
    <div >
      <form onSubmit={handleSubmit}>
        <p>Author</p>
        <input id="name" label="Имя" variant="outlined" sx={{ mb: 2 }} name="author" inputRef={ref}>
        </input>
        <p>Massage</p>
        <input id="message" label="Сообщение" variant="outlined" sx={{ mb: 2 }} name="text" inputRef={ref}>
        </input>
        <br></br>
        <button class="buttons" type="submit">Отправить</button>
      </form>
      <div className="message-list">
        {messageList.map(message => <div className="message-list__item" key={message.id}>
          {message.author && <p className="message-list__p"><span>Автор:</span> {message.author}</p>}
          <p className="message-list__p">{message.author && <span>Текст:</span>} {message.text}</p>
        </div>)}
      </div>
    </div >
  );
}

export default App;
