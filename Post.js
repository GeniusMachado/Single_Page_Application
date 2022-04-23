import React from 'react'
import { Link } from 'react-router-dom'

function Post(props) {

    return (
        <div className="card">

            <div>
                <h1 style={{color:"red",fontStyle:"italic"}}>
                    <Link to={`/post-details/${props.postData.id}`}>{props.postData.text}</Link>
                </h1>
                <span style={{ display: "flex", justifyContent: "space-between" }}>
                    <p className="post-date">{new Date(props.postData.publishDate).toLocaleTimeString() + ' ' + new Date(props.postData.publishDate).toLocaleDateString()}</p>
                    <span className="auth-img">
                        {
                            props.postData.owner ?
                                <img style={{ borderRadius: "70px", height: "60px", marginRight: "10px" }} src={props.postData.owner.picture} alt="Author pic" srcSet="" /> :
                                ""
                        }
                    </span>
                    <p>
                        {
                            props.postData.owner ?
                                props.postData.owner.title + " " + props.postData.owner.firstName + " " + props.postData.owner.lastName
                                : ""
                        }
                    </p>
                </span>
            </div>

            <div className="post-foot">
                <div className="fakeimg"><img src={props.postData.image} alt={props.postData.text} srcSet="" /></div>
                {props.postData.tags ?
                    props.postData.tags.forEach(tag => {
                        <span className="pill">{tag}</span>
                    }) : ""
                }
                <p style={{ padding: "45px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum officiis saepe tenetur eveniet porro, odit provident, ipsam voluptates iusto est expedita inventore reprehenderit nobis eos excepturi unde doloribus molestiae magnam mollitia tempore! Ex, iusto? Fugit quasi veniam eos officia molestias magnam porro nobis deserunt maxime a, placeat iste! Voluptates, natus?</p>
            </div>
            <hr />
            {/* <span style={{ display: "flex", justifyContent: "flex-end" }}>
                <p className="post-date">{new Date(props.postData.publishDate).toLocaleTimeString() + ' ' + new Date(props.postData.publishDate).toLocaleDateString()}</p>
                <span className="auth-img">
                    {
                        props.postData.owner ?
                            <img style={{ borderRadius: "70px", height: "60px", marginRight: "10px" }} src={props.postData.owner.picture} alt="Author pic" srcSet="" /> :
                            ""
                    }
                </span>
                <p>
                    {
                        props.postData.owner ?
                            props.postData.owner.title + " " + props.postData.owner.firstName + " " + props.postData.owner.lastName
                            : ""
                    }
                </p>
            </span> */}
        </div>
    )
}

export default Post
