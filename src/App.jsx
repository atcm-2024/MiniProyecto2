import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import axios from "axios";
import { UseProvider } from "./contexts/UseProvider";

export default function App() {
  const [open, setOpen] = useState(false);
  const [stays, setStays] = useState([]);
  const [filterOption, setFilterOption]=useState({cityCountry:'',maxGuests:0})

  
  
function actualizar(obj){
  setFilterOption(obj)
}

 console.log(filterOption)

   /*city = filterOption[0].split(",",1)
   invitados = filterOption[1]
   console.log(city)
   console.log(invitados)*/

  

function filterStays() {
  if (city!=="" && city!=="Whole")
    { console.log("cuidad es:  " + city)
      return stays.filter(st=>st.city===city) 
    }
    else
      { return stays}
  }




  useEffect(() => {
    axios.get("/api/stays.json").then((rs) => setStays(rs.data));
  }, []);

  function toggleModal() {
    setOpen(!open);
  }

  return (
    <UseProvider>
     {<Cards 
        openModal={toggleModal} 
        setStays={setStays}
        stays={stays}
        onSearch={actualizar}
     /> 
     }

      {<Modal 
        open={open}
        closeModal={toggleModal}
        onSearch={actualizar}
        
        />
      }
      
      
    </UseProvider>
  );
}
