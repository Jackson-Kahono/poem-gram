import './App.css';
import { useState, useEffect } from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [poems, setPoems] = useState([]);
  const [liked, setLiked] = useState([]);
  const [collection, setCollection] = useState([]);

  const [user, setUser] = useState(localStorage.getItem('usr') || null);



  console.log(user)

  const fetchLiked = () => {
    fetch(`https://calm-journey-09256.herokuapp.com/users/${user}`)
      .then(res => res.json())
      .then(data => {
        data.liked.map((item) => {
          let likedPoems = poems.filter((poem) => poem.id === item)
          setLiked(...liked, likedPoems)
        })
      })
  }

  const fetchCollection = () => {
    fetch("https://calm-journey-09295.herokuapp.com/users")
      .then(res => res.json())
      .then(data => {
        let collections = data.filter((item) => item.id === user);
        //get poems where id is in likes
        for (let i = 0; i < collections.length; i++) {
          let poem = poems.filter((item) => item.id === collections[i].poem_id);
          setCollection(...collection, poem);
        }
  })
}

  useEffect(() => {
    if (!user) {
      let usr = Date.now();
      localStorage.setItem('usr', usr);
      fetch("https://calm-journey-09295.herokuapp.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: usr,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      setUser(usr);
    }
    fetch("https://calm-journey-09295.herokuapp.com/poems")
      .then((res) => res.json())
      .then((data) => {
        setPoems(data);
      });
      fetchLiked()
      fetchCollection()


  }, [user]);

  console.log(liked)
  function addToCollection(id) {
    //patch to user where user = user
    //add title to collection
    fetch(`https://calm-journey-09295.herokuapp.com/users/${user}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        collection: [id]
      })
    })

  }

  function addToLiked(id) {
    //patch to user where user = user
    //add title to liked
    fetch(`https://calm-journey-09295.herokuapp.com/users/${user}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        liked: [id]
      })
    })

  }

  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/personal" element={<h1>personal</h1>} />
          <Route path="/liked" element={<h1>liked</h1>} />
          <Route path="/create" element={<h1>create</h1>} />
          <Route path="/" element={<Home poems={poems} addToCollection={addToCollection} addToLiked={addToLiked} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
