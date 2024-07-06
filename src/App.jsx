import Styles from './App.module.css';

import ChatView from './components/ChatView';

import { ChatSettings } from "./components/contexts/chatSettingsContext";

function App() {

  return (
    <div className={Styles.mainWrapper}>
      <ChatSettings>
        <ChatView />
      </ChatSettings>
    </div>
  )
}

export default App
