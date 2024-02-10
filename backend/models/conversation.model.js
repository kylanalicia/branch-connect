import mongoose from 'mongoose';
import moongoose from 'moongoose';

const conversationSchema = new moongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Message",
            default: [],
        },
    ],
},
{ timestamps: true}
);

const Conversation = mongoose.model('Conversation', conversationSchema);
export default Conversation;