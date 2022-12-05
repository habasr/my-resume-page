import React from "react";

export function WorkCard() {
    return (
        <>
            <div id="work" className="bg-[#1F2937] h-auto my-6 py-8 px-20 rounded-lg border-4">
                <div className="flex justify-center">
                    <h3 className="border-4 w-20  border-dashed px-4 py-2 font-bold font-lato">Work</h3>
                </div>

                <details className="px-6 py-4">
                    <summary className="font-bold text-2xl text-[#FFFFFF]">AshTECT</summary>
                    <p className="text-justify px-4 text-lg text-[#4ADF86]">Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                        pavilions, award-winning fireworks and seasonal special events.</p>
                </details>

            </div>
        </>
    )
}