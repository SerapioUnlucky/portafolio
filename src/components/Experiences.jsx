import { experiences } from '../data/Experiences';

export const Experiences = () => {

    return (
        <div className="mx-auto p-4">

            {experiences.map((experience, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${index === 0 ? '' : 'border-t-2 pt-4'} ${index === experiences.length - 1 ? '' : 'border-b-2 pb-4'} border-purple-300`}>

                    <div className='flex flex-col justify-center'>
                        <h1 className="text-center text-xl">{experience.position}</h1>
                        <h3 className="text-center font-semibold">{experience.company}</h3>
                        <p className="text-center text-gray-400">{experience.period}</p>
                    </div>

                    <p className="text-justify">{experience.description}</p>

                </div>
            ))}

        </div>
    )

}
