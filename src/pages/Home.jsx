import React from 'react'

const Home = () => {
  return (
    <div name='Home' className="bg-gray-300 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="x-4 py-2 max-w-md mx-auto sm:max-w-xl lg:px-4 lg:py-2 2xl:col-span-2">
            <img className="h-16 w-16" src="data:image/jpeg;base64,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" 
            alt="SEVENTEEN" />
            <img className="mt-8 rounded-xl shadow-md sm:object-cover object-center sm:mt-12 sm:h-64 sm:w-full lg:hidden" src="https://images.genius.com/2886f6801c7e5ad601ad088fe95b6a94.1000x902x1.jpg" 
            alt="SVT" />
            <h1 className="mt-4 text-2xl text-cyan-600 font-bold sm:mt-12 sm:text-4xl lg:text-3xl">SEVENTEEN (세븐틴) 
            <span className=" m-2 text-rose-600">今 -明日 世界が終わっても</span> 
            Official MV</h1>
            <p className="mt-4 text-sm ">SEVENTEEN has announced details of Always Yours, a new <span className='text-rose-600'>best of</span> collection of its Japanese-language songs to mark the anniversary of its debut in the country.</p>
            <p className="mt-4 text-sm "> The 13-member K-pop powerhouse first shared a Japanese-language release in 2018 with the EP <span className=' text-rose-600 '>We Make You</span>. Since then, they have shared a further two EPs and two singles in the language.</p>
            <p className="mt-4 text-sm "> In celebration of the fifth anniversary of its Japanese debut and ahead of its return to the country for a series of live concerts SEVENTEEN will release digitally on August 22. A physical CD will follow in the US on September 29.</p>
        
            <div className=" grid grid-cols-2 mt-6 sm:mt-6">
            <a className=" btn-primary " href="https://youtu.be/vvN4FgqNXwE?si=_b8WLgSylV2rj_xR">Youtube</a>
            <a className=" btn-secondary " href="https://open.spotify.com/track/2dThVzsCkB0L8tWFvQH53N?si=430aeb204d524331">Spotify</a>
            </div>
        </div>
  
        <div className="hidden relative lg:block">
            <img className="absolute inset-0 w-full h-full object-cover object-center 2xl:col-span-3" src="https://images.genius.com/2886f6801c7e5ad601ad088fe95b6a94.1000x902x1.jpg" 
            alt="SVT" />
        </div> 
    </div>
  )
}

export default Home;