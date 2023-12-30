import './API.css'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'


function API() {

  return (
    <div className="App">
      <Header/>
      <Navbar activeIndex={1}/>
      
      <About/>

    </div>
  )
}

export default API
