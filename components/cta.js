import React from 'react';
import Container from './container';

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-primary px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Join the AKL Revolution Today
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Ready to take your financial transactions to the next level? Sign up
            for Hanypay today and experience the convenience and security of
            managing your AKL currency with ease. Welcome to the future of
            finance, welcome to Hanypay.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-primary bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Create an account
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
