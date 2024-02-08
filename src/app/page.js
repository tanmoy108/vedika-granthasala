import SlideBar from "./component/slideBar";
import Header from "./component/header";
import WelcomeNote from "./component/welcomeNote";
export default function Home() {
  return (
    <>
      <Header/>
      <WelcomeNote/>
      <SlideBar />
    </>
  );
}
