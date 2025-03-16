'use client'

import { NavBar, Content } from "@/components";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center">
        <NavBar />
        <Content />
      </div>
  )
}
