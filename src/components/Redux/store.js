import profileReducer from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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

    getState() {
      return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;