import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Friend from './../Friend/Friend';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            {
                users.map(user => <Friend user={user}></Friend>)
            }
        </div>
    );
};

export default Home;