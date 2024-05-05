import { projects, icons } from '../data/Projects';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const Projects = () => {

    return (

        <>

            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-lg gap-4 mx-auto p-4">

                {projects.map((project, index) => (
                    <div key={index} className='p-4 border border-purple-300'>

                        <h1 className="font-bold mb-2 text-2xl">{project.title}</h1>
                        <h2 className="font-bold underline mb-2">Proyecto {project.type}</h2>
                        <p className="mb-4 text-xs">{project.description}</p>

                        <div className='flex gap-4'>

                            {project.github &&
                                <Tippy content="Ver repositorio">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                    >
                                        {icons.github}
                                    </a>
                                </Tippy>
                            }

                            {project.link &&
                                <Tippy content="Ver sitio web">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                    >
                                        {icons.link}
                                    </a>
                                </Tippy>
                            }

                        </div>

                    </div>
                ))}



            </div>

            <div className='flex justify-center px-4 pb-4'>

                <a href="https://github.com/SerapioUnlucky?tab=repositories" className="border-b-2 border-transparent hover:border-purple-300 hover:text-purple-300 transition duration-300 font-bold py-2 px-4" target='_blank'>Ver mas repositorios</a>

            </div>

        </>

    )

}
