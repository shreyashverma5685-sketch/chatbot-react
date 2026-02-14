import { useState ,useRef , useEffect } from 'react'
import {Chatbot} from 'supersimpledev';
import './App.css'

// Gnerally ,...We are taking the codes from the chatbot project itself...They all are here almost ..
// But I've removes all the comment statements ,..U can still check it out in index.html

  function ChatInput({chatMessages , setChatMessages }){
        const [inputText, setInputText] = useState('');
        function saveInputText(event) {
          setInputText(event.target.value);
        }

        function handleKeyDown(event) {
          if(event.key ==='Enter') {
            sendMessage();
          }
        }

         function sendMessage() {
              if (!inputText.trim()) return;

              const userMessage = {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              };

              const loadingMessage = {
                message: 'Thinking...',
                sender: 'robot',
                id: crypto.randomUUID(),
                loading: true
              };

              const newChatMessages = [...chatMessages, userMessage, loadingMessage];
              setChatMessages(newChatMessages);
              setInputText('');

              setTimeout(() => {
                const response = Chatbot.getResponse(inputText);

                setChatMessages((prevMessages) =>
                  prevMessages.map((msg) =>
                    msg.loading
                      ? {
                          message: response,
                          sender: 'robot',
                          id: msg.id
                        }
                      : msg
                  )
                );
              }, 2000);
            }




        return(
          <div className= "Text-box-container"> 
            <input 
              className="Text-box"
              placeholder = 'Send a message to Chatbot' 
              onKeyDown={handleKeyDown} 
              onChange = {saveInputText}
              value = {inputText} 
            />
            <button className = "send-button"
            onClick ={sendMessage} >Send</button>
          </div>
        );
      }

      function ChatMessage ({message,sender,loading }){  


        return(
          <div className ={
            sender === 'user'
               ? 'chat-message-user'
               : 'chat-message-robot'
            }>
            {sender === 'robot' && (
              <img className ="chat-message-profile"
              src = "robot.png"/>
            )}
            <div className="chat-message-text">
              {loading ? (
                <span className="typing-text">Thinking...</span>
              ) : (
                message
              )}
            </div>

            
            {sender ==='user' && (
              <img className="chat-message-profile" 
              src =" user.png"
              />
            )}
          </div>
        );
      }

    
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
