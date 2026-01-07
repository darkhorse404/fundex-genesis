import { setGlobalState, useGlobalState } from '../store'
import Button from '../pagecomponents/common/Button';
import Section from "../pagecomponents/common/Section";

const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero1"
    >


      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h1 mb-6 text-4xl leading-relaxed font-bold">
          Making Donations&nbsp;FAST, SECURE & TRANSPARENT&nbsp; with {` `}
          <span className="inline-block relative">
            FundeX Genesis{" "}
          </span>
        </h1>
        <p className="body-1 max-w-3xl text-violet-200 mx-auto mb-6 text-base lg:mb-8">
          Embrace Web3.0 and the Decentralized world. Make straightforward
          charitable donations using Cryptocurrency on the Blockchain.
        </p>
        <Button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " href=""
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Campaign
        </Button>
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">

        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="flex px-8 py-5 text-2xl flex-row border-2 relative bg-n-8 rounded-[1rem]">
            <div className=" h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
            <div
              className="flex flex-col justify-center items-center 
          h-20 shadow-md grow "
            >
              <span
                className="text-2xl p-2  font-bold text-white
            leading-5"
              >
                {stats?.totalProjects || 0}
              </span>
              <span>Campaigns Created</span>
            </div>
            <div
              className="flex flex-col justify-center items-center
          h-20 shadow-md grow "
            >
              <span
                className="text-2xl p-2 font-bold text-white
            leading-5"
              >
                {stats?.totalBacking || 0}
              </span>
              <span>Campaign Donated</span>
            </div>
            <div
              className="flex flex-col justify-center items-center
          h-20 shadow-md grow"
            >
              <span
                className="text-2xl p-2  font-bold text-white
            leading-5"
              >
                {stats?.totalDonations || 0} ETH
              </span>
              <span>Amount Donated</span>
            </div>


          </div>


        </div>




      </div>
    </Section>

  )
}

export default Hero
