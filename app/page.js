'use client'

import Navigations from "./components/Navigation";
import ContainerSection from "./components/Containers";
import Footer from "./components/Footers";
import Reviewers from "./components/Reviews";


export default function Home() {
  return (
    <>
    <Navigations />
    <ContainerSection />
    <Reviewers />
    <Footer/>
    </>
  );
}
