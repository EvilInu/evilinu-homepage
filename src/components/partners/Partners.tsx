import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

interface IPartnersProps {}

const Partners = (props: IPartnersProps) => {
  const data = useStaticQuery(graphql`
    {
      uniswap: file(relativePath: { eq: "uniswap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="text-center">
      <div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
          Partners
        </h1>
      </div>
      <div className="mb-4 text-center">
        <div className="w-1/2 lg:w-1/6 p-2 inline-block hover:bg-gray-50">
          <a href="https://uniswap.org" target="_blank">
            <img src={data.uniswap.childImageSharp.fluid.src} alt="uniswap" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
