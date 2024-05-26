"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const WaitList = () => {
  const [selectedJob, setSelectedJob] = useState("Job Title");
  const jobs = ["Job Title 1", "Job Title 2", "Job Title 3", "Job Title 4"];
  return (
    <section className="bg-black w-screen h-screen text-white text-[16px] flex justify-center items-center">
      <div className="absolute hidden md:flex max-w-[88px] top-[5%] left-[10%]">
        <img className="w-full object-cover" src="/images/small1.png" alt="" />
      </div>
      <div className="absolute hidden md:flex max-w-[50px] top-[8%] right-[10%]">
        <img className="w-full object-cover" src="/images/small1.png" alt="" />
      </div>
      <div className="absolute hidden md:flex max-w-[50px] bottom-[40%] left-[15%]">
        <img
          className="w-full object-cover"
          src="/images/lefticon2.png"
          alt=""
        />
      </div>
      <div className="absolute hidden md:flex  bottom-[0] left-[9%]">
        <img
          className="w-full h-full object-cover"
          src="/images/lefticon2.png"
          alt=""
        />
      </div>
      <div className="absolute hidden md:flex  bottom-[0] right-[0]">
        <img
          className="w-full h-full object-cover"
          src="/images/lefticon.png"
          alt=""
        />
      </div>

      <main className="w-[500px] flex flex-col gap-[10px]">
        <div className="max-w-[50px] mx-auto">
          <img
            className="max-w-full object-cover"
            src="/images/logo.svg"
            alt=""
          />
        </div>

        <p className="text-center mx-auto font-[600] leading-[8px] lg:leading-[12px]">
          REVAS PLASTIC EXCHANGE
        </p>

        <div className="max-w-full gap-[20px] flex flex-col">
          <p className="mx-auto font-[500] text-[1.5rem] lg:text-[3.2rem] 2xl:text-[3rem] text-center leading-[20px] lg:leading-[63px] 2xl:leading-[50px]">
            Join the waitlist for Revas
          </p>
          <form className="max-w-full flex flex-col gap-[10px]" action="">
            <input
              className="w-full rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="max-w-full  rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white"
              type="text"
              placeholder="Company Name"
            />
            {/* <select
              name=""
              id=""
              className="relative w-full box-border inline-block  rounded-[50px] bg-black border-white border py-[8px] px-[20px] placeholder:text-white"
            >
              <option className="" value="">
                Job Title
              </option>
              <option value="">Job Title</option>
              <option value="">Job Title</option>
              <option value="">Job Title</option>
              <option value="">Job Title</option>
            </select> */}
            <div className="relative w-full">
              <Listbox value={selectedJob} onChange={setSelectedJob}>
                {({ open }:any) => (
                  <>
                    <Listbox.Button className="relative w-full box-border rounded-[50px] bg-black border-white border py-[8px]  text-white text-left px-3">
                      {selectedJob}
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDownIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-1 w-full bg-black border border-white rounded-md shadow-lg z-10">
                      {jobs.map((job, idx) => (
                        <Listbox.Option
                          key={idx}
                          value={job}
                          className={({ active }:any) =>
                            `cursor-pointer select-none relative py-2 px-2 bg-white ${
                              active
                                ? "text-white bg-gray-700"
                                : "text-gray-900"
                            }`
                          }
                        >
                          {job}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </>
                )}
              </Listbox>
            </div>

            <input
              className="max-w-full  rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white"
              type="text"
              placeholder="Work email"
            />
            <input
              className="max-w-full  rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white"
              type="text"
              placeholder="Country"
            />
            <input
              className="max-w-full  rounded-[50px] bg-black border-white border py-[8px] px-[16px] placeholder:text-white"
              type="text"
              placeholder="State"
            />
            <Link
              href="/success"
              className="max-w-full bg-white text-black flex items-center rounded-[50px] justify-center gap-3 py-[16px] px-[16px]"
            >
              Join the waitlist <AiOutlineArrowRight size={10} />
            </Link>
          </form>
        </div>
      </main>
    </section>
  );
};

export default WaitList;
