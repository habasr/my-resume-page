import React from "react";
import { Navbar } from "../components/Navbar";

export function Contact() {
  return (
    <div className="bg-[#1C1C1C]">
      <Navbar />
      <section className="py-16">
        <div class=" lg:py-16 px-4 mx-auto  max-w-screen-md bg-[#1F2937]">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#FFFFFF] dark:text-white">
            Contact Me
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-[#4ADF86] dark:text-gray-400 sm:text-xl">
            Let talk about everything.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-[#FFFFFF] dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm  bg-[#273549] border font-bold font-lato border-gray-300 text-[#FFFFFF] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@sayeabelhaba.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-[#FFFFFF] dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-[#FFFFFF]  bg-[#273549] rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-[#FFFFFF] dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-[#FFFFFF]  bg-[#273549] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium font-bold font-lato text-center text-[#1C1C1C] rounded-lg bg-[#4ADF86] sm:w-fit hover:bg-[#72CC50] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
