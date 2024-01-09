import axios from "axios";
import { useEffect, useState } from "react";

function App() {
   // aitar prblm holo aita akbar ase fire jay 

//   useEffect(()=>{
  // let data  = axios.get("https://restcountries.com/v3.1/all")
//   console.log(data)
// })

 // aitar prblm holo aita akbar ase fire jay 

//  JEHUTU AGER TA AKBAR ASE FIRE JAY TAI "async & await" AR MADDOME KORA HOISE
 let[all,setAll]=useState([])
 useEffect(()=>{
  async function all(){
    let countryData  = await axios.get("https://restcountries.com/v3.1/all");
    // colsole.log(data);
    setAll(countryData.data)
  }
  all()
 },[])

  return (
    <>
<select>
 {all.map((item)=>
 <option>{item.name.common}</option>
 )}
</select>
    </>
  )
}
export default App
