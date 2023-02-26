import './../css/MainContent.css';

import Content from './Content';
import Sidebar from './Sidebar';

function MainContent() {
    return (
        <div id="main-content">
            <Content />
            <Sidebar />
        </div>
    );
  }

export default MainContent;