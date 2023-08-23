import Image from 'next/image'
import Topbar from './components/Topbar'
import CryptoTable from './components/CryptoTable'
import { FC } from 'react'


const Heading = () => (<div className='text-center max-w-3xl flex flex-col items-center my-8 mx-auto'>
  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Manage Your Crypto and DeFi Portfolio From One Place</h1>
  <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Securely connect the portfolio you’re using to start.
  </p>
</div>)



interface CardItem {
  imgUrl: string, label: string
}
interface CardProps {
  cardItem: CardItem
}
const Card: FC<CardProps> = ({ cardItem: { imgUrl, label } }) => {
  return (

    <div className="flex align-center flex-col max-w-sm  border border-gray-200 rounded-lg shadow  dark:border-gray-700 hover:stroke-yellow-500 ">
      <img className="max-w-full p-5 h-32" src={imgUrl} alt="image description" />
      <div className="p-5 flex align-center flex-col">
        {/* <a href="#">
          <h5 className="mb-w2  font-bold tracking-tight text-gray-900 dark:text-white">LoremLoremLorem</h5>
        </a> */}
        <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">     {label}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Connect
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  )
}

interface CardsProps {
  cardItems: CardItem[]
}
const Cards: FC<CardsProps> = ({ cardItems }) => {
  return (

    <div className='flex flex-row align-center justify-center gap-5'>
      {cardItems.map((cardItem,index) => (<Card key={index} cardItem={cardItem} />))}



    </div>
  )
}


const cardItems: CardItem[] = [{ imgUrl: "https://static.coinstats.app/portfolio_images/binance_light.png", label: "Binance" }, { imgUrl: "https://static.coinstats.app/portfolio_images/metamask_light.png", label: "Metamask" }, { imgUrl: "https://static.coinstats.app/portfolio_images/bitget_light.png", label: "Bitget" }]

export default function Home() {
 
  return (
    <div>
      <Topbar />
      <Heading />
      <div className='flex flex-col items-center gap-5'>
        <Cards cardItems={cardItems} />

        <p>or</p>
        <button type="button" className="text-white bg-blue-700 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Connect other</button>
        <p className="text-gray-500 dark:text-gray-400">
          <a href="#" className="inline-flex items-center font-medium text-white-600  hover:underline">
            View demo before connecting
            <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </p>
        <CryptoTable />
      </div>
    </div>

  )
}
