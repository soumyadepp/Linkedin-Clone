import { React, useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            }).catch(error => alert(error));
    }
    const register = () => {
        if (!name) {
            return (
                alert('Name is a required field')
            )
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePicture,
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePicture,
                    })
                    );
                });
        }).catch(error => alert(error));
    };
    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            <form>
                <input value={name} placeholder="Full Name Required (if registering)" type="text" onChange={e => setName(e.target.value)} />
                <input value={profilePicture} placeholder="Profile Pic URL" type="text" onChange={e => setProfilePicture(e.target.value)} />
                <input value={email} placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} />
                <input value={password} placeholder="Password" type="password" onChange={e => setPassord(e.target.value)} />
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
