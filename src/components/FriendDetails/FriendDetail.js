import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);
    return (
        <div>
            <h1>This is friend details {friendId}</h1>
            <h2>Name: {friend.name}</h2>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;