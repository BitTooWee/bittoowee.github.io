import './App.css';

function App() {
  const title = 'Welcome to the website';
  const likes = 50;
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <a href="http://www.google.com"></a>
      </div>
    </div>
  );
}

export default App;