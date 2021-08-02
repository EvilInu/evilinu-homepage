import React from 'react';

interface ICommunityProps {}

const Community = (props: ICommunityProps) => {
  return (
    <section>
      <div>
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Community
          </h1>
        </div>
        <div>
          <p className="my-10 text-xl bg-gray-50 p-4">
            Join and discover new ways to connect with people locally and
            globally. Be part behind the movement to create the world of
            tomorrow, now !
          </p>
        </div>
      </div>
      <div className="flex space-x-12">
        <div className="flex-1 shadow-md p-5 rounded-lg">
          <div></div>
          <div>
            <h4 className="font-extrabold text-xl">Members</h4>
            <p className="text-md my-2 text-gray-500">How many people joined</p>
            <p className="font-extrabold text-5xl text-green-300 my-10">
              3 Million
            </p>
          </div>
        </div>
        <div className="flex-1 shadow-md p-5 rounded-lg">
          <div></div>
          <div>
            <h4 className="font-extrabold text-xl">Trades</h4>
            <p className="text-md my-2 text-gray-500">
              How many trades happen on the platform
            </p>
            <p className="font-extrabold text-5xl text-green-300 my-10">
              25 Million
            </p>
          </div>
        </div>
        <div className="flex-2 shadow-md p-5 rounded-lg">
          <div></div>
          <div className="flex flex-row space-x-8">
            <div>
              <h4 className="font-extrabold text-xl">Growth</h4>
              <p className="text-md my-2 text-gray-500">The average API</p>
              <p className="font-extrabold text-5xl text-green-300 my-10">
                120%
              </p>
            </div>
          </div>
        </div>
        <div className="flex-2 shadow-md p-5 rounded-lg">
          <div>
            <h4 className="font-extrabold text-xl">Market Cap</h4>
            <p className="text-md my-2 text-gray-500">increase</p>
            <div className="my-10">
              <p className="font-extrabold text-5xl text-green-300">142%</p>
              <p className="font-extrabold text-md text-gray-300">
                $ 32 Million
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
