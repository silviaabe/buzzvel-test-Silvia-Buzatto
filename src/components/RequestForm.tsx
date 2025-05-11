// src/components/DemoRequestForm.tsx
import React from "react";

const RequestForm = () => {
  return (
    <section className="w-full bg-orange-600 text-white py-20 px-20">
      <div className="mx-auto text-center">
        <h2 className="font-extrabold text-[56px] leading-tight ">
          Ready for your next project?
        </h2>
        <p className="mt-8 mb-8 font-normal text-[32px] text-white">
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </p>

        <div className="flex justify-center items-center">
          <form className="w-[550px] h-[auto] flex flex-col gap-6 bg-transparent">
            <div className="flex flex-col gap-5">
              <label htmlFor="email" className="text-left font-normal text-[18px]">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md px-6 py-4 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="message" className="text-left font-normal text-[18px]">
                Message
              </label>
              <textarea
                id="message"
                placeholder="What are you say?"
                className="w-full rounded-md px-6 py-4 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                rows={4}
              />
            </div>

            <button
              type="button"
              className="w-[260px] mt-2 bg-[#0F172A] mx-auto text-white font-bold text-[24px] py-5 px-12 rounded-lg hover:bg-black transition cursor-pointer"
            >
              Request Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
