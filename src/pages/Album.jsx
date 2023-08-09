import React from 'react'
import POL from '../img/POL.png'
import Call from '../img/Call.png'
import Flower from '../img/FallingFlower.png'
import HE from '../img/HappyEnding.png'
import NAL from '../img/NotAlone.png'
import TF from '../img/24H.png'


const Album = () => {
  return (
    <div className="ml-6 bg-gray-100 x-4 py-2 text-center">
    <h2 className="text-xl text-cyan-600 font-bold">SEVENTEEN JAPAN OFFICIAL MVs</h2>
    <p className="mt-2 text-sm text-rose-600 font-medium">This is all japanese version of SEVENTEEN songs. Hope you enjoy it.</p>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      
      <div className="flex items-center rounded-lg shadow-lg bg-gray-300 overflow-hidden">
        <img className="h-32 w-32 flex-shrink-0" src={POL} alt="Power of Love" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">Power Of Love</h3>
          <p className="text-gray-600">「あいのちから」パフォーマンス映像 </p>
          <div className="mt-4">
            <a className="text-blue-500 hover:text-blue-300 font-semibold text-sm" href="https://youtu.be/BWYiqQz-RX8">Stream Official Music Video</a>
          </div>
        </div>
      </div>

      <div className="flex items-center rounded-lg shadow-lg bg-gray-300 overflow-hidden">
        <img className="h-32 w-32 flex-shrink-0" src={NAL} alt="Not Alone" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">Not Alone</h3>
          <p className="text-gray-600">ひとりじゃない</p>
          <div className="mt-4">
            <a className="text-blue-500 hover:text-blue-300 font-semibold text-sm" href="https://youtu.be/0n8su37VyZQ">Stream Official Music Video</a>
          </div>
        </div>
      </div>

      <div className="flex items-center rounded-lg shadow-lg bg-gray-300 overflow-hidden">
        <img className="h-32 w-32 flex-shrink-0" src={TF} alt="24H" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">24H</h3>
          <p className="text-gray-600">24H</p>
          <div className="mt-4">
            <a className="text-blue-500 hover:text-blue-300 font-semibold text-sm" href="https://youtu.be/MmI-vsaOoUE">Stream Official Music Video</a>
          </div>
        </div>
      </div>

      <div className="flex items-center rounded-lg shadow-lg bg-gray-300 overflow-hidden">
        <img className="h-32 w-32 flex-shrink-0" src={Flower} alt="Falling Flower" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">Falling Flower</h3>
          <p className="text-gray-600"> 舞い落ちる花びら</p>
          <div className="mt-4">
            <a className="text-blue-500 hover:text-blue-300 font-semibold text-sm" href="https://youtu.be/u4iDL3c0T1c">Stream Official Music Video</a>
          </div>
        </div>
      </div>

      <div className="flex items-center rounded-lg shadow-lg bg-gray-300 overflow-hidden">
        <img className="h-32 w-32 flex-shrink-0" src={HE} alt="Happy Ending" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">Happy Ending</h3>
          <p className="text-gray-600">HappyEnding</p>
          <div className="mt-4">
            <a className="text-blue-500 hover:text-blue-300 font-semibold text-sm" href="https://youtu.be/cA1b99JSQq0">Stream Official Music Video</a>
          </div>
        </div>
      </div>

      <div className="flex items-center rounded-lg shadow-lg bg-gray-300 overflow-hidden">
        <img className="h-32 w-32 flex-shrink-0" src={Call} alt="Call" />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">Call Call Call</h3>
          <p className="text-gray-600">CALL CALL CALL!</p>
          <div className="mt-4">
            <a className="text-blue-500 hover:text-blue-300 font-semibold text-sm" href="https://youtu.be/BgR_HJ7aGDY">Stream Official Music Video</a>
          </div>
        </div>
      </div>

    </div>
</div>
  )
}

export default Album