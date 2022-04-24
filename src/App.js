import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { useEffect, useState } from 'react';
// import Post from './Components/Post';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetails from './Components/PostDetails';

function App() {

  const [posts, setPosts] = useState({});

  useEffect(() => {
    return fetch('https://dummyapi.io/data/v1/post?limit=3', {
      headers: {
        "app-id": "61959c11c8855080728e076e"
      }
    }).then(data => {
      data.json().then(p => {
        setPosts(oldPosts => {
          return p.data
        })
      })
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <section className="mainSection">
          <Switch>
            <Route path="/" exact={true}>
              <Main posts={posts}>
              </Main>
            </Route>
            <Route path="/post-details/:postId" exact={true}>
              <PostDetails/>
            </Route>
          </Switch>
          <Nav></Nav>
        </section>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
