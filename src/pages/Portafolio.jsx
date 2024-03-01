
import proyectos from '../data/proyectos.json'; // Importa el JSON de proyectos

const Portfolio = () => {
  return (
    <div className="portfolio container mt-28">
      <h2 className="text-3xl font-bold mb-6">Mis Proyectos</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {proyectos.map(project => (
          <a
            key={project.id}
            href={project.url}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-64 md:h-auto rounded-t-lg md:rounded-l-lg"
            />
            <div className="flex flex-col justify-between p-4 leading-normal flex-1">
              <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <div key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md dark:bg-gray-600 dark:text-gray-300">
                    {/* Aquí puedes incluir los iconos de las tecnologías */}
                    <span className="mr-1">{tag}</span>
                    {/* Por ejemplo, si estás utilizando FontAwesome */}
                    {/* <i className="fab fa-react"></i> */}
                    {/* <i className="fab fa-node-js"></i> */}
                    {/* <i className="fab fa-html5"></i> */}
                    {/* Y así sucesivamente para cada tecnología */}
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

