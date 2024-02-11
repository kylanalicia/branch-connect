import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    console.log("CONVERSATIONS:", conversations);

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {loading ? (
                <span className='loading loading-spinner mx-auto'></span>
            ) : conversations.length === 0 ? (
                <span>No conversations found.</span>
            ) : (
                conversations.map((conversation) => (
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        emoji={getRandomEmoji()}
                    />
                ))
            )}
        </div>
    );
};

export default Conversations;



// STARTER CODE SNIPPET
// import Conversation from "./Conversation";

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <Conversation />
//         <Conversation />
//         <Conversation/>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// };

// export default Conversations;