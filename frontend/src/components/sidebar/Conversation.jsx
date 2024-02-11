import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation.id;
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}
      `}
      onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;



// STARTER CODE SNIPPET
// const Conversation = () => {
//   return <>
//   <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursoe-pointer">
//     <div className="avatar online">
//       <div className="w-12 rounded-full">
//         <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
//       </div>
//     </div>
//     <div className="flex flex-col flex-1">
//       <div className="flex gap-3 justify-between">
//         <p className="font-bold text-gray-200">Tiffany Haddish </p>
//         <span className="text-xl"></span>
//       </div>

//     </div>
//   </div>
//   <div className="divider my-0 py-0 h-1"></div>
//   </>;
// };

// export default Conversation;