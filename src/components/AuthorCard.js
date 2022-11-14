import React from "react";

export default function AuthorCard() {
    return (
        <>
            <div id="intro" className="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
                <div id="avatar" className="flex justify-center py-2">
                    <img className="w-40" src="https://api.multiavatar.com/JB.svg " alt="JB" />
                </div>
                <div id="content" className="prose lg:prose-xl px-2">
                    <h1 className="text-center text-gray-800 text-4xl capitalize font-medium">S. Abel Haba</h1>
                    <small className="text-center block text-md text-gray-800">Writer, Teacher &amp; Software Engineer</small>
                    <p className="text-justify text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis vero voluptates vitae rerum eos non laboriosam deleniti voluptatibus ipsum blanditiis
                        expedita architecto tempore necessitatibus quisquam vel ipsam corporis, nemo repudiandae. Lorem, ipsum
                        dolor sit amet consectetur adipisicing elit. Modi asperiores, amet omnis inventore aliquid nam. Autem
                        obcaecati ut ipsa rem temporibus nostrum, quibusdam optio, itaque culpa ad impedit aperiam quasi.</p>
                </div>
            </div>
        </>
    )
}