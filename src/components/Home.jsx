import { home } from '../data/Home';

export const Home = () => {

    return (
        <div className="flex flex-col gap-6">

            <div className='flex flex-col gap-6 lg:flex-row lg:justify-around'>

                <div className='flex flex-col items-center'>

                    <p className="text-2xl text-center font-bold">{home.name} {home.lastName}</p>
                    <p className="text-lg font-bold animate-pulse text-purple-300">{home.race}</p>
                    <a href={home.cv} target="_blank" className="border-b-2 border-transparent hover:border-purple-300 hover:text-purple-300 transition duration-300 font-bold py-2 px-4">Descargar CV</a>

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
                        <a href={home.github} target="_blank" className="hover:underline">SerapioUnlucky</a>
                    </div>

                    <div className="flex gap-2">
                        {home.linkedinIcon}
                        <a href={home.linkedin} target="_blank" className="hover:underline">LinkedIn</a>
                    </div>

                </div>

            </div>

            <div>

                <h1 className="text-3xl font-bold mb-4 mt-4 text-center lg:text-left">¿Quién soy?</h1>

                <p className="text-left leading-relaxed">
                    {home.bio}
                </p>

            </div>

        </div>

    )
}
