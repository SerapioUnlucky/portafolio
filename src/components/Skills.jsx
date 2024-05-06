import { frontend, backend, languages, databases, tools } from "../data/Technologies";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const Skills = () => {

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8">

            <div className="min-w-full">

                <h2 className="text-center text-2xl underline mb-4">Frontend</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-4">
                    {frontend.map((frontend, index) => (
                        <li key={index} className="py-1 border border-purple-300 rounded-lg min-w-full min-h-full">
                            <Tippy content="Ver documentación">
                                <a href={frontend.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300" target="_blank">
                                    {frontend.icon}<span className="text-sm">{frontend.name}</span>
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

            <div className="min-w-full">

                <h2 className="text-center text-2xl underline mb-4">Backend</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-4">
                    {backend.map((backend, index) => (
                        <li key={index} className="py-1 border border-purple-300 rounded-lg min-w-full">
                            <Tippy content="Ver documentación">
                                <a href={backend.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300" target="_blank">
                                    {backend.icon}<span className="text-sm">{backend.name}</span>
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

            <div className="min-w-full">

                <h2 className="text-center text-2xl underline mb-4">Lenguajes</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-4">
                    {languages.map((language, index) => (
                        <li key={index} className="py-1.5 border border-purple-300 rounded-lg min-w-full">
                            <Tippy content="Ver documentación">
                                <a href={language.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300" target="_blank">
                                    {language.icon}<span className="text-sm">{language.name}</span>
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

            <div className="min-w-full">

                <h2 className="text-center text-2xl underline mb-4">Bases de datos</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-6">
                    {databases.map((database, index) => (
                        <li key={index} className="py-1 border border-purple-300 rounded-lg min-w-full">
                            <Tippy content="Ver documentación">
                                <a href={database.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300" target="_blank">
                                    {database.icon}<span className="text-sm">{database.name}</span>
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

            <div className="min-w-full">

                <h2 className="text-center text-2xl underline mb-4">Herramientas</h2>

                <ul className="grid grid-cols-2 justify-items-center gap-6">
                    {tools.map((tool, index) => (
                        <li key={index} className="py-1 border border-purple-300 rounded-lg min-w-full">
                            <Tippy content="Ver documentación">
                                <a href={tool.documentation} className="flex flex-col items-center gap-1 hover:text-purple-300 transition duration-300" target="_blank">
                                    {tool.icon}<span className="text-sm">{tool.name}</span>
                                </a>
                            </Tippy>
                        </li>
                    ))}
                </ul>

            </div>

        </div>

    )

}
