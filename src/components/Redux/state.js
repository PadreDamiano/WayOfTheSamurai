const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postsData: [
                {
                    message: "It's my first post!!!",
                    likeCount: 10,
                    img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                },
                {
                    message: "Hello!!!",
                    likeCount: 7,
                    img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                },
                {
                    message: "Hi",
                    likeCount: 6,
                    img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                }
            ],
            newPostText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State Change');
    },

    getState () {
      return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST){
            let newPost = {
                message: this._state.profilePage.newPostText,
                likeCount: 0,
                img: "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._callSubscriber(this._state);
            this._state.dialogsPage.newMessageBody = action.body;
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messageData.push({id: 7, message: body},);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber();
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body});

export default store;
window.store = store;