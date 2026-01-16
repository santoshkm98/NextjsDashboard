"use client";
import React from 'react'

import dynamic from "next/dynamic";
const RadialTreeChart = dynamic(() => import("@/components/Graphs/RadialGraphs"), {
  ssr: false, // ⬅️ disables server-side rendering
});
const weakconfigurations = () => {
  return (
    <>
    <div>
     <RadialTreeChart/>
    </div>
    </>
  )
}

export default weakconfigurations