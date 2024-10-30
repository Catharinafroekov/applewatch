import Image from "next/image";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Content from "./components/Content";
import Watches from "./components/Watches";

export default function Home() {
  return (
    <div>
      <Nav/>
     <Content/>
      <Button/>
      <Watches/>
    </div>
  );
}
