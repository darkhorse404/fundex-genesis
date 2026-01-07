import { fundex } from "../assets";
import Button from '../pagecomponents/common/Button';
// import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import '../index.css'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <div className="fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ">
      <div className="flex items-center align-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 justify-between">
    <a className="flex flex-row items-center z-10 py-4" href="">
      <img
        className="block w-[3rem] xl:mr-2"
        src={fundex}
        width={190}
        height={40}
        alt=""
      />
      <p className="ml-auto font-code font-bold text-xl uppercase text-n-1 tracking-wider">
        FundeX Genesis
      </p>
      
    </a>

    <div className="flex space-x-2 justify-center">
    {connectedAccount ? (
      <Button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
        {truncate(connectedAccount, 4, 4, 11)}
      </Button>
    ) : (
      <Button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        onClick={connectWallet}
      >Connect Wallet</Button>
    )}
    </div>
  </div>
    </div>
    
  )
}

export default Header
