import './API.css'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'

import { USR_Generator, TextContent2 } from './API_Content'; // Adjust the path accordingly


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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>Sentence Simplifier</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>Discourse Analyzer</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>Hindi Parser</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className='API-buttons'>
                <button type='button' className='API-doc'>API Doc</button>
                <button type='button' className='API-get'>Get Access</button>
              </div>
            </div>
            {/* API Box */}
            <div className='API-container'>
              <div className='API-title'>USR Generator</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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
