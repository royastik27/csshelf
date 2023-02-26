import { Routes, Route } from 'react-router-dom';

import './../css/Content.css';

import Home from './../Home/index';
import Create from './../Create/index';
import NoPage from './../NoPage/index';

function Content() {
    return (
        <div id="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
    );
  }

export default Content;