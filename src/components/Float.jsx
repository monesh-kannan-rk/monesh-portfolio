import React from 'react'
import Github from '../assets/github.svg'
function Float() {
    const buttonHandler = () =>{
        const git_user = "https://github.com/moneshkannan"
        window.open(git_user, '_blank')
    }
  return (
    <div>
        <button onClick={() => buttonHandler()} title="Github"
        class="fixed z-90 bottom-10 right-8 bg-zinc-400 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-black text-4xl hover:bg-zinc-50 hover:drop-shadow-2xl hover:animate-bounce duration-300">
            <img src={Github}/>
        </button>
    </div>
  )
}

export default Float