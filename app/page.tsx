import Navbar from "@/components/navbar";
import Header from "./_homepage/header";
import Footer from "@/components/footer";
import SocialGallery from "./_homepage/social-gallery";
import KeyTracks from "./_homepage/key-tracks";
import ScrollUp from "@/components/scroll-up";
import EventSpeakers from "./_homepage/event-speakers";
import AcceleratingTN from "./_homepage/accelerating-tn";
import SocialMedia from "@/components/social-media";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <KeyTracks />
      <AcceleratingTN />
      <SocialMedia />
      <EventSpeakers />
      <SocialGallery />
      <Footer />
      <ScrollUp />
    </>
  );
}
