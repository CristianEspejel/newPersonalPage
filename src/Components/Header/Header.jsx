import logo from '../../assets/logo.svg'
import dark from '../../assets/dark.png'
import "../../index.css"


const Header = () => {
    return (
    <div>
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                <img className="h-32 w-auto" src={logo} alt />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                <a href="#" className="text-sm font-semibold leading-6 text-turquesa">Inicio</a>
                <a href="#" className="text-sm font-semibold leading-6 text-turquesa">Portafolio</a>
                <a href="#" className="text-sm font-semibold leading-6 text-turquesa">Contacto</a>
            </div>
            <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-turquesa border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="-m-1.5 p-1.5">
                <img className="h-11 w-auto" src={dark} alt />
                </a>
            </div>
            </nav>
        </header>
    </div>

    );
}

export default Header;