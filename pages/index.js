import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitThree, benefitTwo } from '../components/data';
import Video from '../components/video';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
import PopupWidget from '../components/popupWidget';
import ContentWrapper from '../components/ContentWrapper';

const Home = () => {
  return (
    <>
      <Head>
        <title>Hanypay</title>
        <meta
          name="description"
          content="Hanypay is a leading provider of online payment processing, and
          merchant solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <ContentWrapper>
        <Hero />
        <SectionTitle
          pretitle="Hanypay Benefits"
          title="Why should you use hanypay"
        >
          Hanypay streamlines your financial transactions, making payments
          faster, more secure, and hassle-free. Whether you're a business or an
          individual, our electronic payment solutions empower you to send and
          receive funds effortlessly. Say goodbye to paperwork and delays –
          choose Hanypay for seamless digital payments with AKL.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <Benefits data={benefitThree} />
        <SectionTitle
          pretitle="Watch a video"
          title="Learn how we fullfil your needs"
        >
          Discover how our innovative solutions cater to your requirements. From
          seamless payment processing to efficient data flow, we’re committed to
          simplifying your financial tasks. Dive into our video to explore how
          Hanypay transforms the way you manage transactions and stay on top of
          your finances.
        </SectionTitle>
        <Video />
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our customers said"
        >
          Hear directly from our satisfied customers about their journey with
          Hanypay. Their stories speak volumes.
        </SectionTitle>
        <Testimonials />
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq />
        <Cta />
      </ContentWrapper>
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
