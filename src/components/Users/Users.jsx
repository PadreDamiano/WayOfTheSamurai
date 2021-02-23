import React from "react";
import styles from './Users.module.css';
import * as axios from "axios";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://cdn.27.ua/499/9d/2f/892207_3.jpeg',
                    followed: true,
                    fullName: "Vitaliy",
                    status: "I am a boy!",
                    location: {city: "Kyiv", country: "Ukraine"}
                },
                {
                    id: 2,
                    photoUrl: 'https://cdn.27.ua/499/9d/2f/892207_3.jpeg',
                    followed: false,
                    fullName: "Natalia",
                    status: "I am a girl!",
                    location: {city: "Kyiv", country: "Ukraine"}
                },
                {
                    id: 3,
                    photoUrl: 'https://cdn.27.ua/499/9d/2f/892207_3.jpeg',
                    followed: true,
                    fullName: "Timon",
                    status: "I am a fox!",
                    location: {city: "Kyiv", country: "Ukraine"}
                },
                {
                    id: 4,
                    photoUrl: 'https://cdn.27.ua/499/9d/2f/892207_3.jpeg',
                    followed: false,
                    fullName: "Pymba",
                    status: "I am a pig!",
                    location: {city: "Kyiv", country: "Ukraine"}
                },
                {
                    id: 5,
                    photoUrl: 'https://cdn.27.ua/499/9d/2f/892207_3.jpeg',
                    followed: true,
                    fullName: "Sonia",
                    status: "I am a girl!",
                    location: {city: "Kyiv", country: "Ukraine"}
                }
            ]
        )
    }

/*
     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{

         props.setUsers(response.data.items);
     });
*/

    return <div>
        {

            props.users.map(user => <div>
                    <span>
                        <div>
                            <img src={user.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={() => props.unFollow(user.id)}>
                                    FOLLOW
                                </button> :
                                <button onClick={() => props.follow(user.id)}>
                                    UNFOLLOW
                                </button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>
                                {user.fullName}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {user.location.country}
                            </div>
                            <div>
                                {user.location.city}
                            </div>

                        </span>
                    </span>
            </div>)
        }
    </div>
}

export default Users;