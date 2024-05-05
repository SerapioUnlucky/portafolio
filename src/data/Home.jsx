import {
    FaLocationArrow,
    FaPhoneAlt,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cv from '/CV.pdf';

export const home = {
    name: 'Sebastián',
    lastName: 'Jerez Marín',
    race: 'Ingeniero Informático',
    cv: cv,
    bio: 'Soy Ingeniero de Ejecución Informática egresado de la Universidad del Bío-Bío. Me apasiona el diseño y desarrollo de aplicaciones web, enfocándome tanto en su aspecto visual como en su funcionalidad interna. Durante mis estudios, he dedicado tiempo a explorar diversas tecnologías y enfoques para mejorar mis habilidades en este ámbito. Mi constante búsqueda de conocimiento me motiva a mantenerme al tanto de las últimas tendencias y herramientas en el campo del desarrollo web, con el fin de seguir creciendo profesionalmente.',
    location: 'Concepción, Chile',
    locationIcon: <FaLocationArrow size={40} />,
    phone: '+56 930209398',
    phoneIcon: <FaPhoneAlt size={40} />,
    email: 'sjerez957@gmail.com',
    emailIcon: <MdEmail size={40} />,
    github: 'https://github.com/SerapioUnlucky',
    githubIcon: <FaGithub size={40} />,
    linkedin: 'https://www.linkedin.com/in/sebastian-jerez/',
    linkedinIcon: <FaLinkedin size={40} />
}