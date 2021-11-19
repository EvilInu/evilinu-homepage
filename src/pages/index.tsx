import * as React from 'react';
import Community from '../components/community/Community';
import Layout from '../components/layout/Layout';
import Mission from '../components/mission/Mission';
import Partners from '../components/partners/Partners';
import Products from '../components/products/Products';
import Helmet from 'react-helmet';
import { DownloadButton } from '../components/primitives';

export default function () {
  return (
    <Layout>
      <Helmet
        title="EvilInu | The Evil Brother of Shiba Inu"
        htmlAttributes={{ lang: 'en' }}
      >
        <meta name="title" content="EvilInu | The Evil Brother of Shiba Inu" />
      </Helmet>
      <section className="flex justify-center p-10 m-10">
        <div className="flex-1 p-10">
          <div className="">
            <h1 className="text-4xl sm:text-8xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-300 mt-10 mb-8 sm:mt-14 sm:mb-10">
              The little evil Brother of older Shiba Inu Coin.
            </h1>
          </div>
          <div>
            <DownloadButton>Download Whitepaper</DownloadButton>
          </div>
        </div>
        <div className="flex-1">
          <div className=""></div>
        </div>
      </section>
    </Layout>
  );
}
