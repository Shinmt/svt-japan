import React from 'react'
// import POL from '../img/POL.png'
// import Call from '../img/Call.png'
// import Flower from '../img/FallingFlower.png'
// import HE from '../img/HappyEnding.png'
// import NAL from '../img/NotAlone.png'
// import TF from '../img/24H.png'
import data from './data'
import DataCard from './DataCard'

const Album = () => {
  return (
    <div className="ml-6 bg-gray-100 x-4 py-2 text-center">
    <h2 className="text-xl text-cyan-600 font-bold">SEVENTEEN JAPAN OFFICIAL MVs</h2>
    <p className="mt-2 text-sm text-rose-600 font-medium">This is all japanese version of SEVENTEEN songs. Hope you enjoy it.</p>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">

      {data.map((album) => (
      <DataCard album={album} key={album.name} />
      ))}
      
    </div>
</div>
  )
}

export default Album