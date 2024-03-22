import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Home } from '../components/Home'
import { Skills } from '../components/Skills'
import { Experiences } from '../components/Experiences'
import { Projects } from '../components/Projects'

export const Routing = () => {

    return (
        <BrowserRouter>

            <Routes>

                <Route path='/' element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='skills' element={<Skills />} />
                    <Route path='experiences' element={<Experiences />} />
                    <Route path='projects' element={<Projects />} />

                </Route>

            </Routes>

        </BrowserRouter>
    )

}