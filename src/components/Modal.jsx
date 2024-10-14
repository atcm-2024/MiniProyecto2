import React, { useContext, useState  } from 'react'
import { DataContext } from '../contexts/UseProvider';

export default function Modal({open, closeModal, onSearch }) {
    const [valores, setValores] = useContext(DataContext);
    const [locacion, SetLocation]=useState('Whole, Finland')
    const [datos, setDatos] = useState({cityCountry:'Whole, Findland', maxGuests:'0'})
    /*--------------------------------*/
    console.log(datos)
   /*-----------------------------------*/ 
    function handleBusqueda(){
        setDatos({...datos,
            cityCountry:locacion,
            maxGuests:counterA+counterC
         })
         const total= parseInt(counterA)+parseInt(counterC)
        setValores(locacion + '/' + total)
        onSearch(datos)
        closeModal()
    }


/*------------------------------------------------------- onSubmit={(handleSubmit)}*/
    const [counterA, SetCounterA] = useState(0)
    const [counterC, SetCounterC] = useState(0)
    function incrementarA()
    {  SetCounterA(prevState=>prevState+1)}

    function decrementarA()
    {  SetCounterA(prevState=>prevState-1)}

    function incrementarC()
    {  SetCounterC(prevState=>prevState+1)}

    function decrementarC()
    {  SetCounterC(prevState=>prevState-1)}

  return (
    <div className={`h-4/6 w-full fixed  top-0 left-0 bg-[#F9FAFB] ${!open && 'hidden'}`}>
        <div className="md:w-full sm:w-[5%0] md:h-[8%] sm:h-[6%] flex flex-row bg-[#F9FAFB] ml-5 md:ml-8 mt-3 mb-3 items-center justify-between">
            <h2 className="font-bold text-base">Edit your search</h2>
            <span className="close text-3xl mr-10 cursor-pointer" onClick={closeModal}>&times;</span>
        </div>
        {/*<form id="staysForm" >*/}
        <div className="w-[95%] ml-5 h-[70%] md:h-[20%] flex ">
            <div className="w-full flex h-full flex-col md:flex-row md:justify-center md:items-center">
                <label htmlFor="cities" className="w-full  md:w-2/6 h-[25%]] relative border-[1.5px] border-slate-400 rounded-t-xl md:rounded-l-xl md:rounded-r-none hover:border-cyan-300 bg-white"> 
                        <input type="radio"  name="opt" id="cities" className="peer hidden "  />
                        <div className="flex flex-col mt-2 md:mt-0  border-slate-400 rounded-t-xl rounded-none ">
                                <span className="font-bold ml-5">Location </span>
                                <span name= "cityCountry" className=" ml-5">{locacion}</span>
                         </div>
                        <div className="w-full size-72 md:h-full gap-2 md:mt-0 mt-16 items-center absolute p-1 hidden  peer-checked:block">
                            <label htmlFor="" className="flex flex-row items-center ml-4 sm:mt-2 sm:mb-1 md:mt-5 md:mb-2 "><img src="/public/Ubica.png"/><button className="ml-2" name="Helsinki" onClick={e => SetLocation('Helsinki, Finland')}>Helsinki, Finland</button></label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 sm:mt-2 sm:mb-1 md:mb-2"><img src="/public/Ubica.png"/><button className="ml-2" name="Turku"  onClick={e => SetLocation('Turku, Finland')}>Turku, Finland</button></label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 sm:mt-2 sm:mb-1 md:mb-2"><img src="/public/Ubica.png"/><button className="ml-2" name="Vaasa" onClick={e => SetLocation('Vaasa, Finland')}>Vaasa, Finland</button></label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 sm:mt-2 sm:mb-1 md:mb-2"><img src="/public/Ubica.png"/><button className="ml-2" name="Oulu" onClick={e => SetLocation('Oulu, Finland')}>Oulu, Finland</button></label>
                        </div>
                  </label> 

                  <label htmlFor="guests" className="w-full md:w-2/6 sm:mt-0 md:mt-0 h-[42%] relative"> 
                        <input type="radio"  name="opt" id="guests" className=" peer hidden "  />
                        <div className="flex flex-col border-[1.5px] border-slate-400 rounded-b-xl md:rounded-none hover:border-cyan-300">
                                <span className="font-bold ml-5">Guests </span>
                                <span name="maxGuests" className=" ml-5">{counterA+counterC}</span>
                         </div>
                        <div className=" w-full h-full gap-2 items-center absolute p-1 hidden  peer-checked:block">
                            <label htmlFor="" className="flex flex-row items-center ml-3 mt-5 mb-2"><h2 className="ml-2">Adult</h2></label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 mb-2"><h2></h2>Age 13 or above</label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 mb-2">
                                <button className="border-[1.85px] w-7 rounded-md border-zinc-400" onClick={decrementarA}>-</button>
                                <input type="type" id="adult" value={counterA} className="text-center border-0 bg-white w-6"/>
                                <button className="border-[1.85px] w-7 rounded-md border-zinc-400" onClick={incrementarA}>+</button>
                            </label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 mt-5 mb-2 "><h2 className="ml-2" >Children</h2></label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 mb-2"><h2></h2>Age 2 - 12</label>
                            <label htmlFor="" className="flex flex-row items-center ml-4 mb-2">
                                <button className="rounded-md border-[1.85px] w-7 border-zinc-400" onClick={decrementarC}>-</button>
                                <input type="type" id="children" value={counterC} className="text-center border-0 bg-white w-6"/>
                                <button className="border-[1.85px] w-7 rounded-md border-zinc-400" onClick={incrementarC}>+</button>
                            </label>
                        </div>
                  </label> 
                    <div className="sm:h-2/3 w-full md:h-full md:w-[15%] flex mt-60 md:mt-0 justify-center items-center md:rounded-r-xl  md:rounded-l-none rounded-2xl ">
                            <button className="w-[28%] cursor-pointer md:w-full bg-[#EB5757E6] h-10 md:h-14 rounded-2xl  md:rounded-r-xl md:rounded-l-none  border font-bold text-white  flex items-center justify-center gap-2" 
                            onClick={handleBusqueda}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={5}
                                    stroke="#FFFFFF"
                                    className="size-5">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>Search
                            </button>


                        </div>
                </div>
            </div>
      {/*}  </form>*/}

       
    </div>


  )
}
