import { Routes, Route } from 'react-router-dom';

import './../css/Content.css';

import Home from './../Home/index';
import Create from './../Create/index';
import Notes from './../Notes/index';
import Note from './../Note/index';
import NoPage from './../NoPage/index';

function Content() {
    return (
        <div id="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/notes">
              <Route index element={<Notes />} />
              <Route path="single" element={<Note />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
    );
  }

export default Content;