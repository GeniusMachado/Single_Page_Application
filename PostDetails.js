import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Post from "./Post";
import axios from 'axios';
import XMLParser from 'react-xml-parser';


import xmlData from "../postData.xml"

function PostDetails(props) {
    const { postId } = useParams();

    // var jsonDataFromXml = new XMLParser()?.parseFromString(xmlData) || {};

    // console.log("XmlTest", xmlData => xmlData.map);

    const [postDetails, setPostDetails] = useState({})
    // const [testPostXml,setTestPostXml] = useState(jsonDataFromXml);

    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/post/${postId}`, {
            headers: {
                "app-id": "61959c11c8855080728e076e",
            }
        }).then((res) => {
            console.log({
                Data: res
            });
            setPostDetails((oldState) => res.data)
        })
        // return fetch(, {

        // }).then(data => {
        //     data.json().then(p => {
        //         setPostDetails(oldState => {
        //             return p.data
        //         })
        //     })
        // })
    }, [postId])


    return (
        <div className="post-details-container">
            {
                postDetails ? <Post postData={postDetails}></Post> : ""
            }
        </div>
    )
}

export default PostDetails;