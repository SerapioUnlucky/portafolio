import { Routes, Route, HashRouter } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Home } from '../components/Home'
import { Skills } from '../components/Skills'
import { Experiences } from '../components/Experiences'
import { Projects } from '../components/Projects'
import { NotFound } from '../components/NotFound'

export const Routing = () => {

    return (
        <HashRouter>

            <Routes>

                <Route path='/' element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='skills' element={<Skills />} />
                    <Route path='experiences' element={<Experiences />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='*' element={<NotFound />} />

                </Route>

            </Routes>

        </HashRouter>
    )

}
