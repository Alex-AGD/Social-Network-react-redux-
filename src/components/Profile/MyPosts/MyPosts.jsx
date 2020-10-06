import React from "react";
import './MyPosts.module.css';
import s from './MyPosts.module.css'
import Post from "./Post/Posts";

const MyPosts = (props) => {
    let postElements =
        props.posts.map(p => <div><Post message={p.message} likes={p.likes} id={p.id}/></div>)

    let newPostElement = React.createRef();
    let addPost = () => {
      let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (

        <div className={s.postBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={ addPost } >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>

        </div>
    )

}

export default MyPosts;