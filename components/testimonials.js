import Image from 'next/image';
import React from 'react';
import Container from './container';

import userOneImg from '../public/img/user1.jpg';
import userTwoImg from '../public/img/user2.jpg';
import userThreeImg from '../public/img/user3.jpg';

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl max-sm:text-lg leading-normal ">
              Hanypay’s seamless integration and <Mark>top-notch security</Mark>{' '}
              impressed me. Our team now handles transactions effortlessly, and
              the customer support i s exceptional.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl max-sm:text-lg leading-normal ">
              Switching to Hanypay was a breeze. Mike guided us through the
              process, and our payments are faster than ever. A
              <Mark>game-changer</Mark> for our marketing campaigns!
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl max-sm:text-lg leading-normal ">
              Dee.Chavda from Hanypay made the transition smooth. Transparent
              pricing, no PCI hassle, and a 22% cost savings.{' '}
              <Mark>Highly recommend!</Mark>
            </p>

            <Avatar
              image={userThreeImg}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {' '}
      <mark className="text-gray-900 bg-red-300 rounded-md ring-red-300 ring-4 dark:ring-red-400 dark:bg-red-400 dark:text-white">
        {props.children}
      </mark>{' '}
    </>
  );
}

export default Testimonials;
