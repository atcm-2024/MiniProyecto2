import React, { useState } from 'react';

export default function Modal({ open, closeModal, onSearch }) {
    const [counterA, SetCounterA] = useState(0);
    const [counterC, SetCounterC] = useState(0);
    const [locacion, SetLocation] = useState('Whole, Finland');

    function handleBusqueda() {
        const datitos = {
            cityCountry: locacion,
            maxGuests: counterA + counterC
        };
        onSearch(datitos);
        closeModal();
    }

    function incrementarA(e) {
        e.preventDefault();
        SetCounterA(prevState => prevState + 1);
    }

    function decrementarA(e) {
        e.preventDefault();
        if (counterA > 0) {
            SetCounterA(prevState => prevState - 1);
        }
    }

    function incrementarC(e) {
        e.preventDefault();
        SetCounterC(prevState => prevState + 1);
    }

    function decrementarC(e) {
        e.preventDefault();
        if (counterC > 0) {
            SetCounterC(prevState => prevState - 1);
        }
    }

    return (
        <div className={`h-4/6 w-full fixed top-0 left-0 bg-[#F9FAFB] ${!open && 'hidden'}`}>
            <div className="md:w-full sm:w-[50%] md:h-[8%] sm:h-[6%] flex flex-row bg-[#F9FAFB] ml-5 md:ml-8 mt-3 mb-3 items-center justify-between">
                <h2 className="font-bold text-base">Edit your search</h2>
                <span className="close text-3xl mr-10 cursor-pointer" onClick={closeModal}>&times;</span>
            </div>

            <div className="w-[95%] ml-5 h-[70%] md:h-[20%] flex">
                <div className="w-full flex h-full flex-col md:flex-row md:justify-center md:items-center">
                    {/* Selector de ciudades */}
                    <label htmlFor="cities" className="w-full md:w-2/6 h-[20%] md:h-[45%] relative border-[1.5px] border-slate-400 rounded-t-xl md:rounded-l-xl md:rounded-r-none hover:border-cyan-300 bg-white">
                        <input type="radio" name="opt" id="cities" className="peer hidden" />
                        <div className="flex flex-col mt-2 md:mt-0 border-slate-400 rounded-t-xl rounded-none">
                            <span className="font-bold ml-5">Location</span>
                            <span className="ml-5">{locacion}</span>
                        </div>
                        <div className="w-full size-72 md:h-full gap-2 md:mt-0 mt-16 items-center absolute p-1 hidden peer-checked:block">
                            <label htmlFor="" className="flex flex-row items-center ml-4 sm:mt-2 sm:mb-1 md:mt-5 md:mb-2">
                                <img src="/public/Ubica.png" /><button className="ml-2" onClick={() => SetLocation('Helsinki, Finland')}>Helsinki, Finland</button>
                            </label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 sm:mt-2 sm:mb-1">
                                <img src="/public/Ubica.png" /><button className="ml-2" onClick={() => SetLocation('Turku, Finland')}>Turku, Finland</button>
                            </label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 sm:mt-2 sm:mb-1">
                                <img src="/public/Ubica.png" /><button className="ml-2" onClick={() => SetLocation('Vaasa, Finland')}>Vaasa, Finland</button>
                            </label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 sm:mt-2 sm:mb-1">
                                <img src="/public/Ubica.png" /><button className="ml-2" onClick={() => SetLocation('Oulu, Finland')}>Oulu, Finland</button>
                            </label>
                        </div>
                    </label>

                    {/* Selector de huéspedes */}
                    <label htmlFor="guests" className="w-full md:w-2/6 sm:mt-0 md:mt-0 md:mb-0 mb-1 h-[42%] relative">
                        <input type="radio" name="opt" id="guests" className="peer hidden" />
                        <div className="flex flex-col border-[1.5px] border-slate-400 rounded-b-xl md:rounded-none hover:border-cyan-300">
                            <span className="font-bold ml-5">Guests</span>
                            <span className="ml-5">{counterA + counterC}</span>
                        </div>
                        <div className="w-full h-full gap-2 items-center absolute p-1 hidden peer-checked:block">
                            {/* Adultos */}
                            <div className="flex flex-col ml-5 mb-4">
                                <span className="font-bold">Adults</span>
                                <span className="text-gray-500">Age 13 or above</span>
                                <div className="flex flex-row items-center mt-2">
                                    <button className="border-[1.85px] w-7 rounded-md border-zinc-400" onClick={decrementarA}>-</button>
                                    <input type="number" id="adult" value={counterA} onChange={(e) => SetCounterA(Number(e.target.value))} className="text-center border-0 bg-white w-6 mx-2" />
                                    <button className="border-[1.85px] w-7 rounded-md border-zinc-400" onClick={incrementarA}>+</button>
                                </div>
                            </div>
                            {/* Niños */}
                            <div className="flex flex-col ml-5">
                                <span className="font-bold">Children</span>
                                <span className="text-gray-500">Age 2 - 12</span>
                                <div className="flex flex-row items-center mt-2">
                                    <button className="border-[1.85px] w-7 rounded-md border-zinc-400" onClick={decrementarC}>-</button>
                                    <input type="number" id="children" value={counterC} onChange={(e) => SetCounterC(Number(e.target.value))} className="text-center border-0 bg-white w-6 mx-2" />
                                    <button className="border-[1.85px] w-7 rounded-md border-zinc-400" onClick={incrementarC}>+</button>
                                </div>
                            </div>
                        </div>
                    </label>

                    {/* Botón de búsqueda */}
                    <div className="sm:h-2/3 w-full md:h-full md:w-[15%] flex sm:mt-50 mt-50 md:mt-0 justify-center items-center md:rounded-l-none ">
                        <button className="w-[28%] cursor-pointer md:w-full bg-[#EB5757E6] h-10 md:h-14 rounded-2xl md:rounded-l-none border md:mb-0 font-bold text-white flex items-center justify-center gap-2" onClick={handleBusqueda}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="#FFFFFF" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
