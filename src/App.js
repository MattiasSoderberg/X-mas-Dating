import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import FormCard from './components/FormCard';

const container = [
  {name: "Sexy Santa", 
  age: 70, 
  image: "images/man3.jpg",
  imageAlt: "An older man in a santa suite with a naked upper body eating a cookie.",
  description: "Tomtefar söker tomtefru att dela sina ensamma nätter med. Har säcken alltid full av överraskningar!",
  sex: "man" 
  },

  {name: "Magic Mike", 
  age: 35, 
  image: "images/man2.jpg",
  imageAlt: "A good looking man decorating a christmas tree.",
  description: "Efter min karriär som manlig strippa vill jag helst behålla kläderna på och njuta av långa promenader med den rätte.",
  sex: "man"
  },

  {name: "Dorky Dork", 
  age: 40, 
  image: "images/man1.jpg",
  imageAlt: "A man wearing an ugly Christmas sweater.",
  description: "En snäll och levnadsglad man i sina bästa år som söker en kvinna att dela den mörka årstiden med.",
  sex: "man" 
  },

  {name: "Jennifer", 
  age: 36, 
  image: "images/woman1.jpg",
  imageAlt: "A woman wearing a christmas sweater smiling and waving with her arms. ", 
  description: "",
  sex: "woman" 
  },

  {name: "Hoppsan", 
  age: 1, 
  image: "images/pet1.jpg",
  imageAlt: "A white rabbit sitting next to small sized Christmas presents",
  description: "Jag är en fluffig liten kanin som söker ett hem. Älskar morötter och ligga i knät.",
  sex: "pet" 
  },

  {name: "Piggy", 
  age: 2, 
  image: "images/pet2.jpg",
  description: "Jag blir gärna din julgris...så länge du inte äter upp mig. Nöf!",
  sex: "pet" 
  },

  {name: "Missan", 
  age: 3, 
  image: "images/pet3.jpg",
  description: "Jag är en katt! Du kan inte motstå mig.",
  sex: "pet" 
  },

];

function App() {
  const [sex, setSex] = useState("")

  return (
    <div className="App" id="particles-js">
      <Navbar />
      <FormCard setSex={setSex} />
    </div>
  );
}

export default App;
