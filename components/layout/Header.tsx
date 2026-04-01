"use client"

import Navigation from "./Navigation"

export default function Header() {
  return (
    <div className="inline-flex w-full items-center justify-between space-y-2">
      <h1
        className="mb-0 cursor-pointer text-xl font-bold uppercase transition-opacity hover:opacity-80"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        Fery Irawan
      </h1>
      <div>
        <Navigation />
      </div>
    </div>
  )
}
