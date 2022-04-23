import React from 'react'
import Post from './Post'

function Main(props) {

    console.log({
        propPost: props.posts
    });

    return (
        <main>
            <div className="blog-container">
                {
                    props.posts.length > 0 ?
                        props.posts.map(post => {
                            return <Post postData={post} ></Post>
                        })
                        : ""
                }
            </div>
        </main>
    )
}

export default Main
