import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-primary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: 'How does Hanypay ensure the security of my data?',
    answer:
      'We take data security seriously. Learn about our encryption protocols, compliance with industry standards, and measures to protect your information.',
  },

  {
    question: 'What services does Hanypay offer?',
    answer:
      'Discover our range of financial services, from seemless payments to financial data analysis. We’re here to meet your needs.',
  },
  {
    question: 'How do I use Hanypay’s platform?',
    answer:
      'Understand the user journey—from signing up to making transactions. Clear steps and visuals simplify the process.',
  },
  {
    question: 'What fees or charges apply with Hanypay?',
    answer:
      'Transparency matters. Find out about transaction fees, account maintenance costs, and any other relevant charges upfront.',
  },
];

export default Faq;
