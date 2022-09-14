import React, { useState } from 'react'
import './App.scss'
import logoIcon from "./assets/icons/Logo.svg?url"
import closeIcon from "./assets/icons/Close.svg?url"



function App() {
  const [contentClass, setContentClass] = useState<'header-content open' | 'header-content'>('header-content')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    //TODO: submit form data to appropriate endpoint
  }

  return (
    <div className="App">
      <header>
        <div className="header-left">
          <img src={logoIcon} className="logo" alt="Company Name" />
          <div className={contentClass}>
            <img src={logoIcon} className="logo" alt="Company Name" />
            <img src={closeIcon} className="close" alt="Close" onClick={e => setContentClass('header-content')} />
            <nav>
              <a>Product</a>
              <a>Features</a>
              <a>MarketPlace</a>
              <a>Company</a>
            </nav>
            <div className="account">
              <button>Start free trial</button>
            </div>
          </div>
        </div>
        <div className="header-right">
          <button className="icon-btn sqr-40 menu" onClick={e => setContentClass('header-content open')}/>
          <div className="account">
            <a>Log in</a>
            <button className="btn-nav">Start free trial</button>
          </div>
        </div>
      </header>
      <main>
        <div className="section pitch">
          <div className="callout">
            <div className="badge">We’re hiring</div>
            <a>Visit our careers page</a>
            <button className="icon-btn sqr-20 chevron-right" />
          </div>
          <h1>A better way to<br/><span className="highlight">ship web apps</span></h1>
          <p>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
          </p>
        </div>
        <div className="section start">
          <form className="inline-form" onSubmit={onSubmit}>
            <input type="text" name="email" placeholder="Enter your email" />
            <input type="submit" value="Start free trial" />
          </form>
          <p>
            Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a>terms or service.</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
