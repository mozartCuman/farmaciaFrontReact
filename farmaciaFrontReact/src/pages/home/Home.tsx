import myImage from '../../assets/images/familiafeliz.avif';
import React from 'react';

function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-green-400 via-blue-300 to-blue-500 flex justify-center h-screen w-screen">
                <div className='container flex items-center text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4 w-1/2">
                        <h2 className='text-5xl font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-300'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-300'>
                            A farmácia do futuro!!!
                        </p>
                        <div className="flex justify-around gap-4">
                            {/* Outros elementos */}
                        </div>
                    </div>

                    <div className="flex justify-center w-1/2">
                        <img
                            src={myImage}
                            alt="Imagem da Página Home"
                            className='w-full h-48 object-cover rounded-full transition duration-300 ease-in-out transform hover:scale-110'
                        />    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
