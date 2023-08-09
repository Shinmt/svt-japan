import React from 'react'

export default function DataCard({album}) {
    return (

        <div className="flex items-center rounded-lg shadow-lg bg-gray-300 overflow-hidden">
        <img className="h-32 w-40 flex-shrink-0" src={album.imageUrl} alt={album.imageAlt} />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">{album.name}</h3>
          <p className="text-gray-600">{album.jpName}</p>
          <div className="mt-4">
            <a className="text-blue-500 hover:text-blue-300 font-semibold text-sm" href={album.songUrl}>Stream Official Music Video</a>
          </div>
        </div>
      </div>

    );
}