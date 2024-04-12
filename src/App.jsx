import React from 'react';
import { Route, Routes} from "react-router-dom";
import Mainheader from './components/Mainheader';
import './index.css';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import ResourceLibrary from './components/ResourceLibrary';
import '@radix-ui/themes/styles.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Books from './components/Books';
import Articles from './components/Articles';

function App() {
  return (
    <Theme>
    <div className="background">
      <Routes>
        <Route path="/" element={<Mainheader/>}>
          <Route index element={<Home/>}/>
          <Route path='/chat' element={<Chatbot/>}/>
          <Route path='/resource' element={<ResourceLibrary />}/>
            {/* <Route path='/resource/books' element={<Books/>}/>
            <Route path='/resource/articles' element={<Articles/>}/> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </div>
    </Theme>
  );
}

export default App;
