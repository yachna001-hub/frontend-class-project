import NavBar from './components/NavBar';
import BlogList from './components/BlogList';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='/' element={<BlogList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
