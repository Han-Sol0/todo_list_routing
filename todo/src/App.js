import {Main} from './components/main'
import { Route, Routes } from "react-router-dom";
import {PostsLayout} from "./components/PostsLayout";


function App() {
    
    return (
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path={`/:id`} element={<PostsLayout />}/>
                {/* <Route path="*" element={<h1>404</h1>} /> */}
            </Routes>
    );
}

export default App;