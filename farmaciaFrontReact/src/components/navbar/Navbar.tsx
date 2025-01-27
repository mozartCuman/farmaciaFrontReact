import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
                <div className="container flex justify-between text-lg">
                    <div className="font-bold">
                        Farmácia do Futuro
                    </div>

                    <div className='flex gap-4'>
                        <Link to='/home' className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105">
                            Home
                        </Link>
                        <Link to='/produtos' className="hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105">
                            Produtos
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
