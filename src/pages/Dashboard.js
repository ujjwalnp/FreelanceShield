import { Button } from "flowbite-react"
import { Contract } from "../Components/Contract"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
export const Dashboard=({ currentAccount })=>{
    const [contracts,setContracts]=useState([])

    useEffect(()=>{
        //call the api here
        setContracts([
            {
                projectName:"The demo contract",
                projectDeadline:"Tomorrow",
                securityDeposite:"$3000",
                projectStatus:"PENDING"
            }
        ])
    },[])
    return(
        <div className="p-5">
            <div className="flex justify-end">
            <p>{ currentAccount }</p>
            <button className="p-3 bg-blue-400 rounded-lg text-white font-sans font-semibold">
                <Link to="/create">Create</Link></button>
            </div>
            
                <h1 className="text-2xl font-bold mt-10 mb-10">Contracts</h1>
                <Contract contracts={contracts} />
           
        </div>

        
    )
}