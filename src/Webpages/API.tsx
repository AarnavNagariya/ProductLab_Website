import './API.css'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'

import { USR_Generator, Language_Generator , Sentence_Simplifier , Discourse_Analyzer, Hindi_Parser, USR_Generator2 } from './API_Content'; // Adjust the path accordingly


function API() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Navbar activeIndex={2} />
      <div className="bodycontainer">
        <div id="bod">
          {/* API Container */}
          <div className="API">
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>USR Generator</div>
                <USR_Generator />
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>Language Generator</div>
              <Language_Generator />
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>Sentence Simplifier</div>
              <Sentence_Simplifier />
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>Discourse Analyzer</div>
              <Discourse_Analyzer />
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>Hindi Parser</div>
              <Hindi_Parser />
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>USR Generator</div>
              <USR_Generator2 />
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  )
}

export default API
