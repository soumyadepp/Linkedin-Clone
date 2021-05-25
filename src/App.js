import { useEffect, React } from 'react';
import './App.css';
import Feed from './Feed'
import { login, logout } from './features/userSlice';
import { selectUser } from './features/userSlice';
import Sidebar from './Sidebar';
import Header from './Header';
import { auth } from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else {
        dispatch(logout());
      }
    })
  })
  return (
    <div className="App" >
      <Header />
      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;