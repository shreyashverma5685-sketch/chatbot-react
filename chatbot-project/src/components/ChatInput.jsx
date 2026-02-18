 import { useState } from 'react'
 import {Chatbot} from 'supersimpledev';

 
 export function ChatInput({chatMessages , setChatMessages }){
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