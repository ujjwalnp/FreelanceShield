import { Link } from "react-router-dom"

export const TopNav=()=>{
    return(
        <div className="flex justify-between px-10 py-5 bg-slate-700">
            <div>
                <h1>Logo</h1>
            </div>
            <div className="flex gap-10">
                <span className="text-blue-200"><Link to="/dashboard">Dashboard</Link></span>
                <span className="text-blue-200"><Link to="/about">About Us</Link></span>
            </div>
        </div>
    )
}