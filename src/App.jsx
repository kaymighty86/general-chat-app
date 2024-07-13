import Styles from './App.module.css';

import ChatView from './components/ChatView';

import { ChatSettings } from "./components/contexts/chatSettingsContext";
import { AppSettings } from './components/contexts/appSettingsContext';

function App() {
  return (
    <div className={Styles.mainWrapper}>
      <AppSettings>
        <ChatSettings>
          <ChatView />
        </ChatSettings>
      </AppSettings>
    </div>
  )
}

export default App
