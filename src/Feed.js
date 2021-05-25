import { React, useState, useEffect } from 'react'
import Post from './Post'
import './Feed.css'
import PhotoIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import InputOptions from './InputOptions';
import CreateIcon from '@material-ui/icons/Create';
import CalendarViewIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { db } from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, [])
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: 'MERN stack developer',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Start a Post" />
                        <button onClick={sendPost} type="submit" >Send</button>
                    </form>
                </div>
                <div ClassName="feed__inputOptions">
                    <InputOptions title="Photo" Icon={PhotoIcon} color='#70B5F9' />
                    <InputOptions title="Videos" Icon={SubscriptionsIcon} color='#E7A33E' />
                    <InputOptions title="Events" Icon={EventNoteIcon} color='#C0CBCD' />
                    <InputOptions title="Write Article" Icon={CalendarViewIcon} color='#7FC15E' />
                </div>
            </div>
            {
                posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                    return (<Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />)
                })
            }
        </div>
    )
}

export default Feed
