import React from "react";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { qa }from "../data/faq.data"

export default function Faq() {
  return (
    <section className="pb-16 gap-y-8 grid md:grid-cols-2 items-center overflow-hidden w-11/12 mx-auto mt-10">
      <div className="py-4 px-1 text-stroke dark:text-stroke-dark uppercase dark:text-white text-[25vw] md:text-[18.65rem] font-mono font-extrabold opacity-30 -z-10 leading-[15vw] md:leading-[9.6rem]">
        <p>RPL</p>
        <p className="text-end md:translate-x-24">oprec</p>
        <p className="md:translate-x-8">admin</p>
      </div>
      <div className="w-full  rounded-2xl bg-white/70 dark:bg-slate-800/70  shadow-sm p-4 h-fit transition-all space-y-2 relative pt-8 mt-8 ">
        <h2 className="absolute -top-8 text-6xl font-bold text-red-400 dark:text-teal-500">FAQ</h2>
        {qa.map((item, i) => {
          return (
            <Disclosure key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg dark:text-white bg-gray-100 dark:bg-slate-600 px-4 py-2 text-left font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <h5 className="text-md sm:text-lg">{item.question}</h5>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-6 w-6 text-gray-500 transition-all flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-100">
                      {item.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </section>
  );
}
