import MessageHistory from './components/MessageHistory'
import messages from './models/messages'

function App() {
  return (
    <MessageHistory list={messages}/>
  );
}

export default App;
