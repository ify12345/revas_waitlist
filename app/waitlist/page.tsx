"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";

interface Country {
  alpha_2: string;
  id: string;
  alpha_3: string;
  name: string;
}

interface State {
  country_id: string;
  name: string;
  id: string;
}

const WaitList: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState("Job Title");
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    workemail: "",
    firstname: "",
    lastname: "",
    country_id: "",
    state_id: "",
  });

  useEffect(() => {
    // Fetch the list of countries
    fetch("https://revas-backend.onrender.com/api/locations/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    // Fetch the list of states when a country is selected
    if (selectedCountry) {
      fetch(
        `https://revas-backend.onrender.com/api/locations/states?country_id=${selectedCountry.id}`
      )
        .then((response) => response.json())
        .then((data) => setStates(data))
        .catch((error) => console.error("Error fetching states:", error));
    }
  }, [selectedCountry]);

  const WaitListSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://revas-backend.onrender.com/api/waitlists/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully");
        router.push(`/success?email=${formData.workemail}`);
      } else {
        console.log(`Error submitting form: ${response.statusText}`);
        setLoading(false);
      }
    } catch (error) {
      console.log(`Error submitting form: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <section className="bg-black w-screen h-screen text-white text-[16px] flex justify-center items-center px-4 lg:px-0">
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
        <div className="max-w-[50px] mx-auto pb-8">
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
          <form className="max-w-full flex flex-col gap-[10px]" onSubmit={WaitListSignUp} >
          <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              className="w-full rou bg-black border-white border py-[8px] px-[16px] placeholder:text-white"
              type="text"
              placeholder="First Name"
              value={formData.firstname}
              onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              className="w-full  bg-black border-white border py-[8px] px-[16px] placeholder:text-white"
              type="text"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
            />
            <label htmlFor="workemail">Work Email</label>
            <input
              id="workemail"
              className="max-w-full   bg-black border-white border py-[8px] px-[16px] placeholder:text-white"
              type="text"
              placeholder="Work Email"
              value={formData.workemail}
              onChange={(e) => setFormData({ ...formData, workemail: e.target.value })}
            />
            <div className="relative w-full">
              <label htmlFor="country">Country</label>
              <Listbox id="country" value={selectedCountry} onChange={(value) => {
                setSelectedCountry(value);
                setFormData({ ...formData, country_id: value.id });
              }}>
                {({ open }) => (
                  <>
                    <Listbox.Button className="relative w-full box-border  bg-black border-white border py-[8px]  text-white text-left px-3">
                      {selectedCountry ? selectedCountry.name : "Select Country"}
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDownIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute w-full mt-1 border border-white bg-white shadow-lg max-h-60 overflow-auto z-10">
                      {countries.map((country) => (
                        <Listbox.Option
                          key={country.id}
                          value={country}
                          className={({ active }) =>
                            `cursor-pointer select-none relative py-2 px-2 ${
                              active ? "text-white bg-gray-700" : "text-gray-900"
                            }`
                          }
                        >
                          {country.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </>
                )}
              </Listbox>
            </div>
            {selectedCountry && (
              <div className="relative w-full">
                <label htmlFor="state">State</label>
                <Listbox id="state" value={selectedState} onChange={(value) => {
                  setSelectedState(value);
                  setFormData({ ...formData, state_id: value.id });
                }}>
                  {({ open }) => (
                    <>
                      <Listbox.Button className="relative w-full box-border rou bg-black border-white border py-[8px]  text-white text-left px-3">
                        {selectedState ? selectedState.name : "Select State"}
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronDownIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute w-full mt-1 border border-white bg-white shadow-lg max-h-60 overflow-auto z-10">
                        {states.map((state) => (
                          <Listbox.Option
                            key={state.id}
                            value={state}
                            className={({ active }) =>
                              `cursor-pointer select-none relative py-2 px-2 ${
                                active ? "text-white bg-gray-700" : "text-gray-900"
                              }`
                            }
                          >
                            {state.name}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </>
                  )}
                </Listbox>
              </div>
            )}
            <button
              className="flex justify-center text-black bg-white items-center gap-[10px] py-[16px] transition duration-300 ease-in-out transform  hover:shadow-lg hover:bg-black hover:text-white"
              type="submit"

            >
              {loading ? (
                <FiLoader color="white" />
              ) : (
                <p className="flex gap-2 items-center font-bold">
                  Join the waitlist 
                </p>
              )}
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default WaitList;
