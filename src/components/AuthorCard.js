import React, { useState } from "react";


export function AuthorCard({ setIsActive, isActive }) {


    function handleActive(e) {
        e.preventDefault();

        setIsActive({
            active: true,
            name: e.target.id
        })
    }
    return (
        <>
            <div id="intro" className="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
                <div id="avatar" className="flex justify-center py-2">
                    <img className="w-40" src="https://api.multiavatar.com/JB.svg " alt="JB" />
                </div>
                <div id="content" className="prose lg:prose-xl px-2">
                    <h1 className="text-center text-gray-800 text-4xl capitalize font-medium">S. Abel Haba</h1>
                    <small className="text-center block text-md text-gray-800">Designer, Teacher &amp; Software Engineer</small>
                    <p className="text-justify text-lg text-gray-800">Freelance Web Designer & Developer based in Ganta, Nimba County, Liberia.
                        Highly experienced in designing & developing custom Wordpress websites..</p>
                    <div id="hero-nav" className="p-6 mx-auto max-w-full">
                        <ul className="flex items-center justify-center mx-4 gap-4">
                            <li className="border-[#B2B2B2] border p-2 rounded-lg"><a href="#education" id="education" onClick={handleActive} className={`${(isActive.active && isActive.name === 'education') && 'font-bold'} font-lato text-xl`}>Education</a></li>
                            <li className="border-[#B2B2B2] border rounded-lg p-2"><a href="#work" id="work" onClick={handleActive} className={`${(isActive.active && isActive.name === 'work') && 'font-bold'} font-lato text-xl`}>Work</a></li>
                            <li className="border-[#B2B2B2] border rounded-lg p-2"><a href="#hobbies" id="hobbies" onClick={handleActive} className={`${(isActive.active && isActive.name === 'hobbies') && 'font-bold'} font-lato text-xl`}>Hobbies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}