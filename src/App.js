import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import KeeperList from './pages/KeeperList';
import KeeperAdd from './pages/KeeperAdd';
import Playlists from './pages/Playlists';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {    
    return (
      <div id="appContainer">
        <Navbar/>
        <div id="app" className={'container-fluid'}>
            <Switch>
                <Route exact path='/'>
                    <KeeperList/>
                </Route>
                <Route exact path='/playlists'>
                    <Playlists/>
                </Route>
                <Route exact path='/new'>
                    <KeeperAdd/>
                </Route>
            </Switch>
        </div>
        
      </div>
    );
}
export default App;
