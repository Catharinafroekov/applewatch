import Image from "next/image";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Content from "./components/Content";
import Watches from "./components/Watches";
import Pageturner from "./components/Pageturner";

export default function Home() {
  return (
    <div>
      <Nav/>
     <Content/>
      <Button/>
      <Pageturner/>
      <Watches/>
    </div>
  );
}
