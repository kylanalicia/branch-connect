import { useEffect, useRef } from 'react'; // Import useRef for lastMessageRef
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null); 
  useEffect(() => {
    setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    }, 100);
  },[messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages && messages.length > 0 && (
        messages.map((message, index) => (
          <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))
      )}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      
      {!loading && (!messages || messages.length === 0) && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
