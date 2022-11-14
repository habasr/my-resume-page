import React from "react";
import './App.css';

import { Navbar } from "./components/Navbar.js";
import  AuthorCard  from "./components/AuthorCard.js";
import { WorkCard } from "./components/WorkCard.js";
import { EducationCard } from "./components/EducationCard.js";
import { HobbiesCard } from "./components/HobbiesCard.js";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="py-6">
        <main>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <AuthorCard />
            {/* <!-- Work --> */}
            <WorkCard />

            {/* <!-- Work --> */}
            <WorkCard />
            {/* <!-- Education --> */}
            <EducationCard />
            {/* <!-- Hobbies --> */}
            <HobbiesCard />
          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>
    </>
  );
}


