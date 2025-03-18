import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import WelcomeBlock from "./components/WelcomeBlock";
import CateringPresentationBlock from "./components/CateringPresentationBlock";
import PopUpPresentationBlock from "./components/PopUpPresentationBlock";
import CustomerReviewsBlock from "./components/CustomerReviewsBlock";
import GetInTouchBlock from "./components/GetInTouchBlock"

export default function Home() {
  return (
    <>
      <WelcomeBlock />
      <CateringPresentationBlock /> 
      <PopUpPresentationBlock />
      <CustomerReviewsBlock />
      <GetInTouchBlock />
    </>
  );
}

