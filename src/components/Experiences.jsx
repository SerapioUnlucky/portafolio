import { experiences } from '../data/Experiences';

export const Experiences = () => {

    return (

        <>

            {experiences.map((experience, index) => (
                <div key={index} className={`grid gap-4 ${index === 0 ? '' : 'border-t-2 pt-4'} ${index === experiences.length - 1 ? '' : 'border-b-2 pb-4'} border-purple-300`}>

                    <div className='grid justify-items-center lg:flex lg:flex-col-2 lg:justify-between gap-4'>

                        <div>

                            <h1 className="text-center lg:text-start text-xl">{experience.position}</h1>
                            <h3 className="text-center lg:text-start font-semibold">{experience.company}</h3>

                        </div>

                        <div>

                            <p className="text-gray-400">{experience.period}</p>

                        </div>
                        
                    </div>

                    <p className="text-justify">{experience.description}</p>

                </div>
            ))}

        </>
        
    )

}
