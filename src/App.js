import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import Login from './components/Login'
import './App.css'

const App = () => {

    if (!localStorage.getItem('username')) return <Login />
    return (
        <ChatEngine
            height="100vh"
            projectID="e0ae301c-63dc-407a-9ed5-67c538702e9e"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App