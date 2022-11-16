import Navbar from "./Components/navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Components/home";
import Search from "./Components/search";
import Chat from "./Components/chat";
import Account from "./Components/account";
import Settings from "./Components/settings";
import './App.css'
import itemPageS from "./Components/itemPageS";
import ItemPageS from "./Components/itemPageS";
import Upload from "./Components/upload";
import ItemPageA from "./Components/itemPageA";

function App() {


//
  return (
    <Router>
        <div className="App m-2">
            <Navbar></Navbar>
            <div className="content">
                <Routes>
                    <Route exact path="/itempagea/:itemID" element={<ItemPageA></ItemPageA>} />
                    <Route exact path="/itempages/:itemID" element={<ItemPageS></ItemPageS>} />
                    <Route path="/upload" element={<Upload></Upload>} />
                    <Route path="/search" element={<Search></Search>} />
                    <Route path="/chat" element={<Chat></Chat>} />
                    <Route path="/account" element={<Account></Account>} />
                    <Route path="/settings" element={<Settings></Settings>} />
                    <Route path="" element={<Home></Home>} />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
