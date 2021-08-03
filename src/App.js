import { useState, useEffect } from 'react';

// react router import for navigation 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


// axios for api 
import axios from 'axios';

// Details and Home components 
import Details from './Components/Details.js'
import Home from './Components/Home.js';

// css import
import './App.css';


function App() {

  const [items, setItems] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://api.dictionaryapi.dev/api/v2/entries/en_US/hello');


      result.data[0].detailsLink = "/" + result.data[0].word + "-detail";
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();

  }, [])

  return (
    <div>

      { isLoading ? (
        <>
          <h1>Loading...</h1>
        </>
      )
        :
        (
          <>
            <Router>
              <Switch>
                <Route exact path="/home">
                  <Home items={items} />
                </Route>
                <Route exact path={items[0].detailsLink}>
                  <Details items={items} />
                </Route>
              </Switch>
              <Redirect from="/" to="/home" />
            </Router>
          </>
        )
      }
    </div >
  );
}

export default App;
