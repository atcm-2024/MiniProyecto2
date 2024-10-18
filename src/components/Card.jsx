import React from 'react'

export default function Card({stay}) {
    const {title, rating, type, beds,photo}=stay

  return (
    
            <div className="flex flex-row ml-1 w-5/6 mb-7 ">
              <figure className="">
                   <img src={photo} alt="" className="rounded-xl h-64 w-[370px]"/>
                  <div className="flex flex-row h-10 w-full">
                    { parseFloat(rating) >= 4.5 &&
                      <button className="flex text-center justify-items-center w-24 mt-2 font-bold h-7 text-sm bg-white border-slate-900 rounded-xl  border-xl border-[1.25px]">SUPER HOST &nbsp;&nbsp;&nbsp;</button>
                    }
                    <label htmlFor="" className=" flex flex-row w-2/4 mt-2 text-sm ">&nbsp;&nbsp;{type}. {beds} beds
                    </label><label className=" flex flex-row w-1/4 mt-2 item-center justify-end mr-1"><img src="/public/Star.png" className=" w-5 h-4 mt-1"/> {rating}</label>
                  </div>
                  <label htmlFor="" className="md:text-base text-xm mt-4">{title}</label>
              </figure>
            </div>               
  )
}

/*md:justify-center md:items-center grid md:grid-cols-3 sm:grid-cols-2 md:w-screen*/

/*"w-full bg-orange-700 ml-10 mr-10 flex flex-row*/