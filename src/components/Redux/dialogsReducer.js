const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let  initialState = {
            dialogsData: [
                {
                    id: 1,
                    name: "Vitaliy",
                    img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                },
                {
                    id: 2,
                    name: "Natalie",
                    img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                },
                {
                    id: 3,
                    name: "Cristi",
                    img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                },
                {
                    id: 4,
                    name: "George",
                    img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                },
                {
                    id: 5,
                    name: "Ann",
                    img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                },
                {
                    id: 6,
                    name: "Fillip",
                    img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                }
            ],
            messageData: [
                {id: 1, message: "OK"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "My name is Natalie"},
                {id: 4, message: "Good day"},
                {id: 5, message: "Hello"},
                {id: 6, message: "Goodbye"},
            ],
            newMessageBody: ''
    }

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messageData.push({id: 7, message: body},);
            state.newMessageBody = '';
            break;
    }
    return state;
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body});

export default dialogsReducer;