import Link from "next/link";
import Image from "next/image";
import FirstBlock from "./components/FirstBlock";
import SecondBlock from "./components/SecondBlock";
import ThirdBlock from "./components/ThirdBlock";
import FourthBlock from "./components/FourthBlock";

export default function Home() {
  return (
    <div>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
    </div>
  );
}

