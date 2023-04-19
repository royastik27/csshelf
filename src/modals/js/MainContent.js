import './../css/MainContent.css';

import Content from './Content';
import Sidebar from './Sidebar';

function MainContent() {
    return (
        <div id="main-content" className="container-fluid">
            <div className="row">
                <Content />
                <Sidebar />
            </div>
        </div>
    );
  }

export default MainContent;