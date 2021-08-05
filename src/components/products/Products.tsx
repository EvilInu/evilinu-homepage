import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

interface IProductsProps {}

const Products = (props: IProductsProps) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
          Our Products
        </h1>
      </div>
      <div className="flex space-x-4">
        <div className="w-full md:w-1/2 md:mx-2">
          <p className="my-10 text-xl bg-gray-50 p-4">
            We are building new tools for the new world and making an
            alternative market for world capital for the citizens of the world.{' '}
            <br />
            <strong>
              The trust level on traditional market are lowest ever, so let us
              innovate something better !
            </strong>
          </p>
        </div>
      </div>
      <div className="flex mx-10 flex-col md:flex-row my-5 space-y-8 md:space-x-8 md:space-y-0">
        <div className="flex-1 shadow-md p-5">
          <div></div>
          <div>
            <h2 className="font-extrabold text-xl">LandSwap Token</h2>
            <p className="my-4">
              Our native token for landswap platform, used to stack, vote, and
              have bigger roles inside the community.{' '}
              <a
                className="text-blue-500 hover:text-blue-600"
                href="/products/landswap-token"
              >
                view more
              </a>
            </p>
          </div>
        </div>
        <div className="flex-1 shadow-md p-5">
          <div></div>
          <div>
            <h2 className="font-extrabold text-xl">CoBonds</h2>
            <p className="my-4">
              Are community bonds, who can be used to mint for funding projects,
              and build market native to the community.{' '}
              <a className="text-blue-500 hover:text-blue-600" href="#">
                view more
              </a>
            </p>
          </div>
        </div>
        <div className="flex-1 shadow-md p-5">
          <div></div>
          <div>
            <h2 className="font-extrabold text-xl">Analytic Tools</h2>
            <p className="my-4">
              Tools for the investors for analysis of our markets and discover
              opportunities.{' '}
              <a className="text-blue-500 hover:text-blue-600" href="#">
                view more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
