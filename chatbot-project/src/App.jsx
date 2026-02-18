import { useState ,useRef , useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import './App.css'


// Gnerally ,...We are taking the codes from the chatbot project itself...They all are here almost ..
// But I've removes all the comment statements ,..U can still check it out in index.html

// Abhi abhi sare codes likhe aur sare hote hi..sb alg alg files me shift kr diye gaey components wale folder me 
 

    

    
      function ChatMessages ({chatMessages}){

        const chatMessagesRef = useRef(null);

        useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages]);

        return(
          <div className="chat-messages-container" ref={chatMessagesRef}>
          
            {chatMessages.map((chatMessage) => {
                  return(
                    <ChatMessage 
                      message = {chatMessage.message}
                      sender = {chatMessage.sender}
                      loading={chatMessage.loading}
                      key = {chatMessage.id}
                />
              );
            })}
          </div>
        );
      }

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
