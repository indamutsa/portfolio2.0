import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
      <Head>
        <title>Arsene portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-center scroll-smooth">
        <Hero />
      </section>

      <section id="about" className="snap-start scroll-smooth">
        <About />
      </section>

      <section id="experience" className="snap-center scroll-smooth">
        <Experience />
      </section>

      <section className="snap-center scroll-smooth">
        <Skills />
      </section>

      <section className="snap-center scroll-smooth">
        <Projects />
      </section>
      <section className="snap-center scroll-smooth">
        <ContactMe />
      </section>
    </main>
  );
};

export default Home;
