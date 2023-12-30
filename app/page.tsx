import Image from 'next/image'

import './Home.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';

function Home() {
  return (
    <div className="App">
      <Header />
      <Navbar activeIndex={1} />
      <div className="bodycontainer">
        <div id="bod">
          <p>Let's communicate<br />An Authoring tool for multi-lingual Generation</p>

          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="searchbutton">Search</button>
            {/* <button className="search-button"><span className="icon"></span></button> */}
          </div>

          <div className="Home">
            <div id="heading"> <u>Home</u></div>
            <p>
              We apply insights from Indian Grammatical Tradition to design Universal Semantic Representation (USR) for discourse. We can generate documents in multiple languages from these representations.
            </p>
            <div id="home-images">
              <Image src={img1} alt="Figure 1" />
              <Image src={img2} width={400} height={300} alt="Figure 2" />
              <Image src={img3} alt="Figure 3" />
            </div>
            <p>
              The sentences generated are:<br />

              Hindi: राम ने सुबह से शाम तक पढ़ाई की । क्युंकि कल परीक्षा है और इसमें वह सफलता चाहता है ।<br />

              English: Ram studied from morning to evening because the exam is tomorrow and he wants success in it.<br />

              You can use our authoring interface to write content or upload the same. The authoring interface will guide you to convert your content into Universal Semantic Representation.
            </p>
          </div>
        </div>
      </div>
      <About />
    </div>
  )
}

export default Home
