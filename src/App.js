import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectUser, logout, login } from "./features/userSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import { auth } from "./firebase";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                // user is logged in
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                //user is logged out
                dispatch(logout());
            }
        });
    }, [dispatch]);

    return (
        <div className="app">
            <Header />

            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            )}
        </div>
    );
}

export default App;
