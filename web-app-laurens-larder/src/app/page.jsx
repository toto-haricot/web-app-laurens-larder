import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import WelcomeBlock from "./components/WelcomeBlock";
import CateringPresentationBlock from "./components/CateringPresentationBlock";
// import ThirdBlock from "./components/ThirdBlock"; 
// import FourthBlock from "./components/FourthBlock";

export default function Home() {
  return (
    <>
      <WelcomeBlock />
      <CateringPresentationBlock /> 
    </>
  );
}

