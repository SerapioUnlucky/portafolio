import { home } from '../data/Home';

export const Home = () => {

    return (
        <div className="mx-auto p-4">

            <div className='flex flex-col gap-4 lg:flex-row lg:justify-around lg:items-center'>

                <div className='flex flex-col items-center'>

                    <p className="text-2xl text-center font-bold">{home.name} {home.lastName}</p>
                    <p className="text-lg font-bold animate-pulse text-purple-300">{home.race}</p>
                    <a href={home.cv} className="border-b-2 border-transparent hover:border-purple-300 hover:text-purple-300 transition duration-300 font-bold py-2 px-4">Ver Curriculum</a>

                </div>

                <div className="grid lg:grid-cols-2 justify-center items-center lg:justify-start gap-4">

                    <div className="flex gap-2">
                        {home.locationIcon}
                        <p>{home.location}</p>
                    </div>

                    <div className="flex gap-2">
                        {home.phoneIcon}
                        <a href={`tel:${home.phone}`} className="hover:underline">{home.phone}</a>
                    </div>

                    <div className="flex gap-2">
                        {home.emailIcon}
                        <a href={`mailto:${home.email}`} className="hover:underline">{home.email}</a>
                    </div>

                    <div className="flex gap-2">
                        {home.githubIcon}
                        <a href={home.github} target="_blank" className="hover:underline">Ir a perfil de GitHub</a>
                    </div>

                    <div className="flex gap-2">
                        {home.linkedinIcon}
                        <a href={home.linkedin} target="_blank" className="hover:underline">Ir a perfil de LinkedIn</a>
                    </div>

                </div>

            </div>

            <h1 className="text-3xl font-bold mb-4 mt-4 text-center lg:text-left">¿Quién soy?</h1>

            <p className="text-left leading-relaxed">
                {home.bio}
            </p>

        </div>

    )
}
