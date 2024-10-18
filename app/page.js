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
    <div className="mx-auto
            max-w-screen-xl
            px-4 py-8
            sm:px-6 sm:py-12
            lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
                <div className="lg:py-24">
                    <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>
                    <div className="card">
                    <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                    eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                    quidem quam repellat.
                    </p>
                    </div>
                    <div className="card">
                    <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                    eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                    quidem quam repellat.
                    </p>
                    </div>
                    
                </div>
                </div>
            </div>
    <Reviewers />
    <Footer/>
    </>
  );
}
