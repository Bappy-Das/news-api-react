// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './component/News/News';

function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f8b332be9d714ec9afdc541563e3bb30')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">

      {news.length === 0 ?
        <Spinner animation="border" />
        :
        <Row xs={1} md={3} className="g-4 m-3 h-100">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>}
    </div>
  );
}

export default App;
