import React,{useState,useEffect} from 'react'
import Header from "./Header"
import "./Games.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Games() {
    const [rates, setRates] = useState({})

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/exchange_rates')
            .then(response => response.json())
            .then(data =>setRates(data));

    }, [])
    const arraytest= Object.entries(rates);

    console.log(arraytest)


    return (
        <div>
        
        <Header/>
             <div>
{
    arraytest.map((rate=>{
        
        return (
           
          Object.entries(rate[1]).map((test=>{
              return(
                  
                 
 <>
 
    <p> <b>{test[1].name} </b>= 
     {test[1].value}</p>
    
                       </>
                       
                     
                     
                
              )
          }))
         
        )
    }))
}
            </div>
        </div>
    )

}


export default Games

