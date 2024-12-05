import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Information from "./components/Information";
import { WhatWeDo } from "./components/WhatWeDo";
import { Look } from "./components/Look";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <Information />
      <WhatWeDo />
      <Look />
    </div>
  );
}

export default App;
