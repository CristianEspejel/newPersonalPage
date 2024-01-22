
import imagenCris from '../assets/Developer.png'; 

const Home = () => {
    return (
        <>
        <div className="container mx-auto mt-16 flex flex-col lg:flex-row justify-center mt-32">
          <div className="lg:w-1/2 pr-4 flex items-center mb-8 lg:mb-0">
            <div className="text-center ">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">Hola, soy Cris</h1>
              <p className="text-base lg:text-lg xl:text-xl">Soy un fullstack developer</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img className="mt-4 rounded-full shadow-md mx-auto" src={imagenCris} alt="Imagen de Cris" />
          </div>
        </div>
      </>
    );
}

export default Home;