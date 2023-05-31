import React from 'react';

const Home = () => {
  return (
    <>
      <h2 className='Center'>ADHD Trading</h2>
      <div id='home' className='hundo'>
        <div className='home' id='about'>
          <h3 className='h3'>About</h3>
          <p> This website was created specifically for neurodivergent people. A place to trade, buy, and sell hobbies</p>
        </div>
        <div className='home' id='creator'>
          <h3 className='h3'>Creator</h3>
          <p>As someone with ADHD this was more than just a project to me. </p>
          <div id='contact' className='Center'>
            <a href="https://www.linkedin.com/in/tykiaharris/" target="_blank" rel="noreferrer">Linkedin</a>
            <a href="mailto:tykia.m.tucker@gmail.com">Email Me</a>
            <a href='https://github.com/that-writer-16' target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home