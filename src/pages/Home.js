import { Link } from 'react-router-dom'
import SVG from '../assets/SVG.svg'

export const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row mt-10">
      <div className="content p-20 flex flex-col gap-5 w-screen lg:w-1/2">
          <h1 className="text-2xl font-bold text-blue-800 lg:text-4xl">Experience the Future of  Payments</h1>
          <h3 className="text-justify text-xl ">
Welcome to the future of freelancing, where our platform seamlessly integrates cutting-edge blockchain technology to redefine the way freelancers and clients collaborate. Bid farewell to the traditional payment hassles and usher in a new era of simplicity, security, and efficiency.<br /><br/>

{"  "}Our revolutionary system ensures that transactions are not only transparent but also tamper-proof, thanks to the immutable nature of blockchain. Experience a level of trust and security like never before, as smart contracts automate and streamline the entire payment process. No more worrying about delayed payments, disputes, or unnecessary fees – our platform is designed to provide a hassle-free experience for both freelancers and clients.</h3>
        <Link to="/dashboard"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-1/2 lg:w-1/4">Dashboard</button></Link>  
      </div>
      <div className='mt-32'>
        <img src={SVG} />
      </div>
    </div>
  )
}
