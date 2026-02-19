import { useState  } from 'react'
import { ChatInput } from './components/ChatInput'; 
import { ChatMessages } from './components/ChatMessages';
import './App.css'


// Gnerally ,...We are taking the codes from the chatbot project itself...They all are here almost ..
// But I've removes all the comment statements ,..U can still check it out in index.html

// Abhi abhi sare codes likhe aur sare hote hi..sb alg alg files me shift kr diye gaey components wale folder me 
 

    

    
  

 function App (){
    
           
          const [chatMessages , setChatMessages] = useState([{
            message : 'Welcome! Start chatting with me.',
            sender : 'robot',
            id: 'id1'
          }]);
          
        return(
          <div className="app-container">
           
            <ChatMessages
              chatMessages = {chatMessages}
        />  

        <ChatInput
          chatMessages = {chatMessages}
          setChatMessages = {setChatMessages}
            />
         </div>
        );
      }

export default App
