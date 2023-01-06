import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageOne } from './pages/PageOne'
import { PageTwo } from './pages/PageTwo'
import { Home } from './pages/Home'

function App (): JSX.Element {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="page1" element={<PageOne />} />
                <Route path="page2" element={<PageTwo />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
