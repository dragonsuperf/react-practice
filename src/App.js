import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import './index'
import Main from './components/Main'
import Lecture from './components/Lecture'
import {Pagination} from 'react-bootstrap';

function App() {
	return (
    <div>
      <Router>
        <Link to="/Main">
          <button>CarouselHeader</button>
        </Link>
        <Link to="/Lecture">
          <button>Lecture</button>
        </Link>
        <main>
          <Route exact path="/" component={Main} />
          <Route path="/Main" component={Main} />
          <Route path="/Lecture" component={Lecture} />
        </main>
      </Router>
      
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />

        <Pagination.Item>
          1
        </Pagination.Item>
        <Pagination.Item>
          2
        </Pagination.Item>
        <Pagination.Item>
          3
        </Pagination.Item>
        <Pagination.Item>
          4
        </Pagination.Item>

        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default App;
