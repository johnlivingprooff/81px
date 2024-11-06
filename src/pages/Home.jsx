import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import BigII from '../components/BigII';
import HomeHero from '../components/HomeHero';
import '../styles/Home.css';
import Helmet from 'react-helmet'
import Projects from '../components/Projects';
import ScrollSection from '../components/ScrollSect';

function Home () {
  const [isVisible, setIsVisible] = useState(true);
  const [secOneVisible, setSecOneVisible] = useState(false);
  const bigIIRef = useRef(null);
  const secOneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of BigII is visible
    );

    if (bigIIRef.current) {
      observer.observe(bigIIRef.current);
    }

    return () => {
      if (bigIIRef.current) {
        observer.unobserve(bigIIRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSecOneVisible(true); // Set to true when sec-one enters the viewport
        }
      },
      { threshold: 0.5 } // Trigger when 50% of sec-one is visible
    );

    if (secOneRef.current) {
      observer.observe(secOneRef.current);
    }

    return () => {
      if (secOneRef.current) {
        observer.unobserve(secOneRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>81PIXELS | Home</title>
        <meta
          name='description'
          content='81PIXELS is a creative powerhouse specializing in design and digital marketing. We bring brands to life and help them connect with audiences on a deeper level.'
        />
      </Helmet>
      <span className='ii' ref={bigIIRef}>
        {/* Pass the isVisible prop to BigII */}
        <BigII isVisible={isVisible} />
      </span>
        <a className='intro1' href='#topp'>Scroll up</a>
      <span>
        <Header />
      </span>
      <div id='topp'>wy</div>
      <section><HomeHero /></section>
      <section 
        className={`sec-one ${secOneVisible ? "fade-in" : ""}`} 
        ref={secOneRef}
        id='about'
      >
        <h1>let's tell your <br />visual st<span className='gold'>o</span>ry</h1>
        <p>
          <b>Unlock the true potential of your brand with <span className='gold'>81PIXELS</span></b> — a creative powerhouse specializing in design and digital marketing. We believe that every pixel has a purpose, and every purpose has a story to tell. From captivating visuals to data-driven strategies, we bring brands to life and help them connect with audiences on a deeper level.
        </p>
      </section>
      <span id='projects' >
        <Projects />
      </span>
    </div>
  );
}

export default Home;
