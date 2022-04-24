import React, { useEffect, useState ,useRef} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Nav() {

    const [news, setNews] = useState([])

    const fetchData = async () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&from=2022-03-25&sortBy=popularity&apiKey=59810948683a421e832ca948e1ec4e81`)
            .then(res => {
                console.log({
                    Google: res
                });
                setNews(oldData => res.data.articles)
            })
    }

    // useEffect(() => {
        

    //     const timer = setTimeout(() => {
    //         fetchData();
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // }, [])

    const ref = useRef(null)

useEffect(() => {
  ref.current = setInterval(fetchData, 1000 * 60);

  return () => {
    if(ref.current){
      clearInterval(ref.current)
    }
  }
}, [])


    return (
        <nav>
            <ul className="google-news-container">
                <li className="news-item">
                    <Link to="/" className="home-link">Home</Link>
                </li>
                {

                    (news && news.length > 0) ?
                        news.map(n => {
                            return (
                                <li className="news-item">
                                    <img src={n.urlToImage} alt={n.title} srcset="" style={{ width: '100%' }} />
                                    <h5>{n.title}</h5>
                                    <p>{n.content}</p>
                                </li>
                            )
                        }) :
                        <li>No News Today</li>
                }
            </ul>
        </nav>
    )
}

export default Nav
