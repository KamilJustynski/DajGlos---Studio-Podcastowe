import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Information from "./components/Information";
import { WhatWeDo } from "./components/WhatWeDo";
import { Look } from "./components/Look";
import Studio from "./components/Studio";
import { Valuations } from "./components/Valuations";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <Information />
      <WhatWeDo />
      <Look />
      <Studio />
      <Valuations />
    </div>
  );
}

export default App;
