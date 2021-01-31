import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    // console.log("Posts", posts)

    useEffect(() => {
        /* Realtime listener */
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
    }, []); /* Check what this means, more in depnt, useEffect */

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            likes: 0,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                        />
                        <button onClick={sendPost} type="submit">
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption
                        title="Photo"
                        Icon={ImageIcon}
                        color="#70B5F9"
                    />
                    <InputOption
                        title="Video"
                        Icon={SubscriptionsIcon}
                        color="#E7A33E"
                    />
                    <InputOption
                        title="Event"
                        Icon={EventNoteIcon}
                        color="#C0CBCD"
                    />
                    <InputOption
                        title="Write article"
                        Icon={CalendarViewDayIcon}
                        color="#7FC15E"
                    />
                </div>
            </div>
            <FlipMove>
                {posts.map(
                    ({
                        id,
                        data: { name, description, message, photoUrl, likes },
                    }) => (
                        <Post
                            key={id}
                            id={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                            likes={likes}
                        />
                    )
                )}
            </FlipMove>
        </div>
    );
}

export default Feed;
