import './../css/MainContent.css';

import Content from './Content';
import Sidebar from './Sidebar';

function MainContent({ loggedIn, setLoggedIn }) {
    return (
        <div id="main-content" className="container-fluid">
            <div className="row">
                <Content loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Sidebar />
            </div>
        </div>
    );
  }

export default MainContent;