import Image from 'next/image';
import Container from './container';
import heroImg from '../public/img/hero.jpg';

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Welcome to Hanypay <br className="max-sm:hidden" />
              <span className="xl:text-2xl font-normal text-gray-600">
                Your Gateway to Seamless Transactions with AKL Currency
              </span>
            </h1>
            {/* <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              At Hanypay, we're revolutionizing the way you handle transactions
              with our advanced payment gateway tailored specifically for AKL
              currency. Say goodbye to the hassle of traditional banking systems
              and embrace the future of finance with our intuitive AKL wallet
              integration.
            </p> */}

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 mt-10 text-lg font-medium text-center text-white bg-primary rounded-md "
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={'object-cover rounded-xl'}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-primary">2000+</span> customers
            worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="text-gray-400 dark:text-gray-400">
              <Partner text="Logos" />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Partner text="Swifin " />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Partner text="Vanuatu Trade Commission" />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Partner text="Knowledge Works" />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Partner text="ADCB" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const Partner = ({ text = '' }) => {
  return <h2 className="text-2xl uppercase font-bold">{text}</h2>;
};

export default Hero;
