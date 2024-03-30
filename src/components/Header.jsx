import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth >= 1024) {

                setMenuOpen(false);

            }

        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return (
        <header className="flex flex-col lg:flex-row justify-around items-center p-4">

            <h1 className="text-6xl text-purple-300 italic">SJ</h1>

            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <nav className="flex lg:block">
                <ul className={`lg:flex ${menuOpen ? 'flex flex-col items-center' : 'hidden gap-4'}`}>
                    <li className={`${location.pathname === '/' && 'text-purple-300'} border-b-2 border-transparent hover:border-purple-300 hover:text-purple-300 transition duration-300`}>
                        <Link to="/" className="block lg:inline-block lg:p-0 p-2">
                            Sobre mí
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/skills' && 'text-purple-300'} border-b-2 border-transparent hover:border-purple-300 hover:text-purple-300 transition duration-300`}>
                        <Link to="/skills" className="block lg:inline-block lg:p-0 p-2">
                            Conocimientos
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/experiences' && 'text-purple-300'} border-b-2 border-transparent hover:border-purple-300 hover:text-purple-300 transition duration-300`}>
                        <Link to="/experiences" className="block lg:inline-block lg:p-0 p-2">
                            Experiencias
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/projects' && 'text-purple-300'} border-b-2 border-transparent hover:border-purple-300 hover:text-purple-300 transition duration-300`}>
                        <Link to="/projects" className="block lg:inline-block lg:p-0 p-2">
                            Proyectos
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
