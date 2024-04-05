import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const projects = [
    {
        title: "Plataforma de reportes y control de usuarios",
        description: "Desarrollé una plataforma web para reportar información y gestionar usuarios, empleando tecnologías como PHP y Composer para el backend. Utilicé SQL Server como base de datos para almacenar la información de manera segura y eficiente. Para la interfaz de usuario, me apoyé en HTML, JavaScript y CSS, garantizando una experiencia interactiva y atractiva para los usuarios.",
        type: "práctica profesional"
    },
    {
        title: "Software de apoyo al manejo de pedidos e inventario",
        description: "Desarrollé una plataforma web para la PYME Dropillos, utilizando el stack MERN (MongoDB, Express.js, React.js y Node.js) para construir el backend y el frontend. Además, implementé Tailwind CSS para el diseño y los estilos. Esta plataforma facilita la generación de comandas y la gestión del inventario, reemplazando los métodos manuales previos.",
        type: "tesis"
    },
    {
        title: "App de lavandería",
        description: "El proyecto para la asignatura de Ingeniería de Software implica el desarrollo de un sistema de gestión destinado a una lavandería localizada en un condominio. El objetivo primordial radica en adquirir competencia en el stack MERN (MongoDB, Express.js, React.js, y Node.js), con una modificación específica que implica reemplazar React.js por Next.js.",
        type: "universitario",
        github: "https://github.com/SerapioUnlucky/lavanderia-app",
    },
    {
        title: "Cotizador de criptomonedas",
        description: "Proyecto de un cotizador de criptomonedas hecho con React, Styled Components y con la api de cryptocompare.",
        type: "personal",
        link: "https://cotizador-criptos-flax.vercel.app/",
        github: "https://github.com/SerapioUnlucky/cotizador-criptos",
    },
    {
        title: "Gestión de pacientes mascotas",
        description: "Proyecto sobre gestión de pacientes mascotas realizado en React, tailwindcss y localstorage.",
        type: "universitario",
        github: "https://github.com/SerapioUnlucky/gestion-mascotas",
        link: "https://gestion-mascotas.vercel.app/"
    },
    {
        title: "Apirest de clientes (Backend)",
        description: "Proyecto de un CRUD de clientes realizado en Spring Boot, que incluye subida de imágenes, paginación y validaciones.",
        type: "personal",
        github: "https://github.com/SerapioUnlucky/apirest-springboot",
    },
    {
        title: "customers-app (Frontend)",
        description: "Proyecto de un CRUD de clientes realizado en Angular 17, que incluye subida de imágenes, paginación y validaciones.",
        type: "personal",
        github: "https://github.com/SerapioUnlucky/customers-app"
    },
    {
        title: "Tinder de perritos",
        description: "Proyecto de la asignatura Taller de Desarrollo Web que consiste en la realización de un Tinder para perritos, utilizando la Dog API y desarrollado con React.",
        type: "universitario",
        github: "https://github.com/SerapioUnlucky/tinder-perritos",
        link: "https://tinder-perritos.vercel.app/"
    },
    {
        title: "Generador de códigos QR",
        description: "Proyecto que consiste en la generación de un código QR al ingresar una URL, desarrollado con HTML, CSS y JavaScript.",
        type: "personal",
        github: "https://github.com/SerapioUnlucky/QR-Generator",
        link: "https://qr-generator-steel-six.vercel.app/"
    }
];

export const icons = {
    github: <FaGithub size={40} />,
    link: <CgWebsite size={40} />
};