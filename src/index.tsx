// ./src/index.tsx
import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from './store'
import { BrowserRouter as Router,Route,Link } from "react-router-dom"
import CounterComponent from "./components/Counter";
import CounterComponent2 from "./components/Counter2";



function Home() {
    return <div>home</div>
}

ReactDom.render((
  <Provider store={store}>
    <Router>
        <React.Fragment>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/counter2'>Counter2</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
        <Route path="/counter" component={CounterComponent}/>
        <Route path="/counter2" component={CounterComponent2} />
        </React.Fragment>
    </Router>
  </Provider>
),document.getElementById("app"))
