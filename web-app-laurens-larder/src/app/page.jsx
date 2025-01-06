import Link from "next/link";
import Image from "next/image";
import FirstBlock from "./components/FirstBlock";
import SecondBlock from "./components/SecondBlock";
import ThirdBlock from "./components/ThirdBlock";

export default function Home() {
  return (
    <div>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
    </div>
  );
}

