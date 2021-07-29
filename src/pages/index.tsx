import * as React from 'react';
import { Layout } from '../components/layout/layout';

export default function () {
  return (
    <Layout>
      <section className="text-center">
        <div>
          <h1 className="`text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10`">
            Landswap
          </h1>
        </div>
        <div>
          <p>Building the big next DeFi for the world!</p>
        </div>
      </section>
    </Layout>
  );
}
