import './styles/main.css'
import logoImg from './assets/logo-nlw-eEsports.svg'
import { MagnifyingGlassPlus} from "phosphor-react";

function App() {
  return (

    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'> duo </span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game1.png" alt="" />
          <div className="absolute grid w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0">
            <strong className="text-white font-bold">League of Legends</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>


        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game2.png" alt="" />
          <div className="absolute grid w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0">
            <strong className="text-white font-bold">Dota 2</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game3.png" alt="" />
          <div className="absolute grid w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0">
            <strong className="text-white font-bold">Counter Strike</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="" />
          <div className="absolute grid w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0">
            <strong className="text-white font-bold">Apex Legends</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game5.png" alt="" />
          <div className="absolute grid w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0">
            <strong className="text-white font-bold">Fortnite</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game6.png" alt="" />
          <div className="absolute grid w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0">
            <strong className="text-white font-bold">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>

      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch  mt-8 rounded-lg overflow-hidden">
       
        <div className="bg-[#2A2634] px-8 py-6  rounded-lg flex justify-between items-center">
          <div>
          <strong className="text-white font-black text-2xl">Não encontrou seu duo?</strong>
          <p className="text-base text-zinc-400">Publique um anúncio para encontrar novos players!</p>
          </div>

         <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 rounded-md text-white flex items-center gap-3">
          <MagnifyingGlassPlus size={24}></MagnifyingGlassPlus>
          Publicar Anúncio
         </button>

        </div>
      </div>
    </div>
  )
}

export default App
