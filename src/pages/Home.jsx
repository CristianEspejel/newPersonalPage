
import imagenCris from '../assets/Developer.png'; 
import '../Styles/Home.css'


const Home = () => {
    return (
      <>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center mt-32">
        <div className="lg:w-1/2  flex items-center mb-8 lg:mb-0 md:flex justify-center"> 
          <div className="text-center lg:text-left md:text-center">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
              <span className='name-maquina'>Hola, soy Cris </span>
            </h1>
            <p className="text-base lg:text-lg xl:text-xl">Soy un fullstack developer</p>
    
            <button className="mt-4 lg:mt-2 bg-azulMedio hover:bg-turquesa text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Descarga mi CV</span>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img className="mt-4 rounded-full shadow-md mx-auto" src={imagenCris} alt="Imagen de Cris" />
        </div>
      </div>
      <section className="mt-8 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Sobre Mí</h2>
        <p className="text-base lg:text-lg xl:text-xl">
          Mi enfoque se centra en la construcción de soluciones web robustas y eficientes. He tenido la oportunidad de trabajar en proyectos que me han permitido explorar y aplicar tecnologías modernas, siempre con el objetivo de mejorar la experiencia del usuario.
          Me apasiona el aprendizaje continuo y la resolución creativa de problemas. Estoy emocionado por contribuir al mundo del desarrollo Full Stack y llevar mi conjunto de habilidades a nuevos desafíos. ¡Listo para ser parte de equipos dinámicos y proyectos innovadores!
        </p>
      </section>

      <section className='flex flex-col items-center lg:flex-col lg:justify-center mx-2'>
        <h2 className="text-2xl font-bold mb-4 lg:mb-0 lg:mr-4 text-center">Mi stack</h2>
        <div className='flex flex-wrap justify-center lg:flex-row lg:flex-wrap'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" className="w-16 h-16 m-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-16 h-16 m-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"className="w-16 h-16 m-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"className="w-16 h-16 m-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain-wordmark.svg"className="w-16 h-16 m-2" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className="w-16 h-16 m-2"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" className="w-16 h-16 m-2"/>
        </div>
      </section>
      
    </>
    );
}

export default Home;