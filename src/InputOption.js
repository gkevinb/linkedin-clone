import React from 'react'
import './InputOption.css'
import { db } from "./firebase";

function InputOption({title, Icon, color, id, likes }) {
    const getColor = (likes) => {
        return likes > 0 ? "#017FF5" : color
    }

    const giveLike = () => {
        if(likes >= 0){
            db.collection("posts").doc(id).update({
                likes: likes + 1
            });
        }

    }

    return (
        <div className="inputOption" style={{ color: getColor(likes) }} onClick={giveLike}>
            <Icon />
            <h4>{title}</h4>
            {likes > 0 && <p>({likes})</p>}
        </div>
    )
}

export default InputOption
