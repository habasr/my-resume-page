import React, { useState } from "react";
import './App.css';



import { Navbar } from "./components/Navbar.js";
import { AuthorCard } from "./components/AuthorCard.js";
import { WorkCard } from "./components/WorkCard.js";
import { EducationCard } from "./components/EducationCard.js";
import { HobbiesCard } from "./components/HobbiesCard.js";

export default function App() {
  const [isActive, setIsActive] = useState({
    active: true,
    name: 'education'
  });
  return (
    <>
      <Navbar />

      <div className="py-6">
        <main>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <AuthorCard {...{isActive, setIsActive}} />

            {
              isActive.name === "work" ?
                <WorkCard /> : isActive.name === "education" ? <EducationCard /> : <HobbiesCard />
            }

          </div>
        </main>
      </div>
    </>
  );
}


