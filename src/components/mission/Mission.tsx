import React from 'react';

interface IMissionProps {}

const Mission = (prop: IMissionProps) => {
  return (
    <section>
      <div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
          Mission
        </h1>
      </div>
      <div className="flex">
        <div className="flex-1 pl-0 pr-9">
          <p className="text-xl">
            Create a global movement for innovation and creating sociels goods
            for human society, how small or big your idea is, you're welcome to
            work on it. Connect and find people who have the same fire for your
            project, or work for the next big thing.
          </p>
        </div>
        <div className="flex-1 bg-gray-800 p-9 text-white rounded-xl shadow-xl">
          <h3 className="font-extrabold text-3xl">
            Subscribe for newsletter !
          </h3>
          <p>Don't miss important news or updates.</p>
          <form>
            <div className="flex flex-col">
              <label className="py-2 font-extrabold text-xl" htmlFor="email">
                Email
              </label>
              <input
                className="px-3 py-2 bg-gray-50 text-black mb-3"
                id="email"
              />
              <button className="bg-green-300 hover:bg-green-400 text-white font-extrabold px-4 py-3">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Mission;
