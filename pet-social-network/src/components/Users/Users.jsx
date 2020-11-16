import React from 'react';
import styles from './Users.module.css';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_RfqA1o6QkxYWBxk_-TCF28EBlasrxI-wWQ&usqp=CAU',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'dev',
                    location: {city: 'Dnepr', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_RfqA1o6QkxYWBxk_-TCF28EBlasrxI-wWQ&usqp=CAU',
                    followed: false,
                    fullName: 'Valera',
                    status: 'test',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_RfqA1o6QkxYWBxk_-TCF28EBlasrxI-wWQ&usqp=CAU',
                    followed: true,
                    fullName: 'Vasya',
                    status: 'HR',
                    location: {city: 'Odessa', country: 'Ukraine'}
                }
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
            <div>
            <img src={u.photoUrl} className={styles.userPhoto}/>
            </div>
            <div>
            {u.followed ?
                <button onClick={() => {
                    props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                    props.follow(u.id)
                }}>Follow</button>}

            </div>
            </span>
                <span>
            <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
            </span>
            <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
            <div>{}</div>
            </span>
            </span>

            </div>)
        }
    </div>
}

export default Users;