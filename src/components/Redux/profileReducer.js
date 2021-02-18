const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let  initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                "message": state.newPostText,
                "likeCount": 0,
                "img": "https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg",
                "id": 8
            };
        return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: '',
        }
        case UPDATE_NEW_POST_TEXT:
        return {
            ...state,
            newPostText: action.newText,
        }
    }
    return state;
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;