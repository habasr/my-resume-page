import React from "react";

export function HobbiesCard() {
    return (
        <>
            <div id="hobbies" className="bg-[#B2B2B2] h-50 my-6 py-8 rounded-lg border-4">
            <div className="flex justify-center">
                    <h3 className="border-4  border-dashed px-4 py-4">Hobbies</h3>
            </div>

            <details className="px-6 py-4">
                    <summary className="font-bold text-2xl text-gray-800">Reading</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                        pavilions, award-winning fireworks and seasonal special events.</p>
                </details>

            </div>

        </>
    )
}