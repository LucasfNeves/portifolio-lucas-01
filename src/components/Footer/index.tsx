'use client'

import { ArrowUp } from 'phosphor-react'

export function Footer() {
  function handleScroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="flex justify-between px-40 items-center absolute bottom-0 w-full h-16 bg-gray-800 text-white">
      <span className="font-roboto font-normal text-zinc-400">
        Lucas Farias das Neves <span className="text-xs">©</span> 2023
      </span>
      <button
        type="button"
        onClick={handleScroll}
        className="flex h-12 w-12 items-center justify-center rounded-md transition duration-300 ease-in-out hover:bg-gray-600 bg-gray-700"
        title="Voltar ao topo"
      >
        <ArrowUp
          weight="bold"
          className="h-6 w-6 flex items-center justify-center text-white"
        />
      </button>
    </footer>
  )
}
