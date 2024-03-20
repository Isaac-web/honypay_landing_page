import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  PresentationChartLineIcon,
  BoltIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../public/img/benefit-one.jpg';
import benefitTwoImg from '../public/img/benefit-two.jpg';
import benefitThreeImg from '../public/img/benefit_three.jpg';

const benefitOne = {
  title: 'Secure and Efficient Transactions',
  desc: 'Managing your AKL currency has never been easier thanks to our user-friendly AKL wallet interface. Accessible on both desktop and mobile devices, our wallet allows you to effortlessly send, receive, and store your AKL with just a few clicks or taps.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Streamlined Payments',
      desc: 'Our system ensures swift and reliable payments.',
      icon: <CreditCardIcon />,
    },
    {
      title: 'Confidence in every payment',
      desc: 'Hanypay’s ledger is tamper-evident and resistant to unauthorized changes.',
      icon: <ShieldCheckIcon />,
    },
    {
      title: 'Efficient processes',
      desc: 'Enjoy streamlined financial operations with Hanypay.',
      icon: <BoltIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'Seamless Integration',
  desc: "Hanypay seamlessly integrates with your existing AKL ecosystem, allowing you to streamline your financial activities without any disruptions. Whether you're a seasoned AKL enthusiast or new to the world of digital currencies, our platform provides a seamless experience for users of all levels.",
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Effortless Data Flow',
      desc: 'Hanypay ensures smooth data exchange between different components of your business.',
      icon: <PresentationChartLineIcon />,
    },
    {
      title: 'Unified Experience',
      desc: 'Hanypay eliminates data silos and fragmentation.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Future-Proof Solutions',
      desc: 'Hanypay integrates with existing tools and scales as your business evolves.',
      icon: <RocketLaunchIcon />,
    },
  ],
};

const benefitThree = {
  title: '24/7 Customer Support',
  desc: "We understand the importance of reliable customer support, which is why our dedicated team is available 24/7 to assist you with any inquiries or issues you may encounter. Rest assured, we're here to ensure your experience with Hanypay is nothing short of exceptional.",
  image: benefitThreeImg,
  bullets: [
    {
      title: 'Round-the-clock support',
      desc: 'Whether it’s a technical issue or a payment inquiry, our team is here to help.',
      icon: <ChatBubbleOvalLeftEllipsisIcon />,
    },
    {
      title: 'Swift Resolution Times',
      desc: 'Get back to business faster with our responsive support.',
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: 'Confidence in support',
      desc: 'Focus on your goals while we handle any challenges.',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };
