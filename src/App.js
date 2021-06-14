import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            heigth="100vh"
            projectID="7b4c5631-7ad2-4c30-ab63-1264a9387ad6"
            userName="kshitij3188"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
        />
    );
}

export default App;