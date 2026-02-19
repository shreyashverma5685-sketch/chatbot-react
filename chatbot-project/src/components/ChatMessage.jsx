import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/robot.png';
  
export function ChatMessage ({message,sender,loading }){  


        return(
          <div className ={
            sender === 'user'
               ? 'chat-message-user'
               : 'chat-message-robot'
            }>
            {sender === 'robot' && (
              <img className ="chat-message-profile"
              src = {RobotProfileImage} />
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
              src ={UserProfileImage}
              />
            )}
          </div>
        );
      }