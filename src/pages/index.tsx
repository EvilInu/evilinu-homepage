import * as React from 'react';
import Community from '../components/community/Community';
import { Layout } from '../components/layout/Layout';
import Mission from '../components/mission/Mission';
import Partners from '../components/partners/Partners';
import Products from '../components/products/Products';

export default function () {
  return (
    <Layout>
      <section className="flex justify-center p-10 m-10 bg-hero bg-cover">
        <div className="flex-1 bg-white p-10">
          <div>
            <h1 className="text-4xl sm:text-8xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
              New and open financial world!
            </h1>
          </div>
          <div className="border-t-2 border-gray-200">
            <p className="mt-3">Building tools for the DeFi world!</p>
          </div>
        </div>
        <div className="flex-1">
          <div className=""></div>
        </div>
      </section>
      <Products />
      <Community />
      <Mission />
      <Partners />
    </Layout>
  );
}
