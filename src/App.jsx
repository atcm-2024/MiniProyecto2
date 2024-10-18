import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import axios from "axios";
import { UseProvider } from "./contexts/UseProvider";

export default function App() {
  const [open, setOpen] = useState(false);
  const [stays, setStays] = useState([]);
  const [filterOption, setFilterOption] = useState({ cityCountry: '', maxGuests: 0 });

  function actualizar(obj) {
    setFilterOption(obj);
  }

  const city = (filterOption.cityCountry || "").split(",", 1);
  const invitados = filterOption.maxGuests;

  console.log("la cuidad es:" + city);
  console.log("Nro de invitados es: " + invitados);

  const filteredStays = stays.filter(st => {
    const locationIsProvided = city[0].trim() !== ""; 
    const totalGuests = invitados; 
  
    const matchesCity = locationIsProvided 
      ? (() => {
          return (
            (st.city === city[0] || city[0] === "Whole") 
          );
        })()
      : true;
                                   
    const matchesGuests = (totalGuests === 0 || (st.maxGuests || 0) >= totalGuests); 
  
    return matchesCity && matchesGuests; 
  });        

  useEffect(() => {
    axios.get("/api/stays.json").then((rs) => setStays(rs.data));
  }, []);

  function toggleModal() {
    setOpen(!open);                 
  }

  return (
    <UseProvider>
      <Cards 
        openModal={toggleModal} 
        stays={filteredStays}
      />
      <Modal 
        open={open}
        closeModal={toggleModal}
        onSearch={actualizar}
      />
    </UseProvider>
  );
}