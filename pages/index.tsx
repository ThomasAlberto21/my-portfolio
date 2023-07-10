import { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Project from "@/components/Project/Project";
import Contact from "@/components/Contact/Contact";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>my-portfolio</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default Index;
