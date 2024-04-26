import { languages, frontend, backend, databases, tools } from "../data/Technologies";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const Skills = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8 mx-auto p-4">

            <div>

                <h2 className="text-center border-b-2 border-purple-300 mb-4">Lenguajes de programación</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-4">
                    {languages.map((language, index) => (
                        <li key={index}>
                            <Tippy content="Ver documentación">
                                <a href={language.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300" target="_blank">
                                    {language.icon}{language.name}
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

            <div>

                <h2 className="text-center border-b-2 border-purple-300 mb-4">Frontend</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-4">
                    {frontend.map((frontend, index) => (
                        <li key={index}>
                            <Tippy content="Ver documentación">
                                <a href={frontend.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300 text-center" target="_blank">
                                    {frontend.icon}{frontend.name}
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

            <div>

                <h2 className="text-center border-b-2 border-purple-300 mb-4">Backend</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-4">
                    {backend.map((backend, index) => (
                        <li key={index}>
                            <Tippy content="Ver documentación">
                                <a href={backend.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300" target="_blank">
                                    {backend.icon}{backend.name}
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

            <div>

                <h2 className="text-center border-b-2 border-purple-300 mb-4">Bases de datos</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-4">
                    {databases.map((database, index) => (
                        <li key={index}>
                            <Tippy content="Ver documentación">
                                <a href={database.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300" target="_blank">
                                    {database.icon}{database.name}
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

            <div>

                <h2 className="text-center border-b-2 border-purple-300 mb-4">Herramientas</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-4">
                    {tools.map((tool, index) => (
                        <li key={index}>
                            <Tippy content="Ver documentación">
                                <a href={tool.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300" target="_blank">
                                    {tool.icon}{tool.name}
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )

}
