import { useState } from 'react'
import { SideBar } from './components/SideBar'
import './styles.css'

function App() {

  return (
    <>
      <div className="layout">
        <header className="site-header">
          <h1>JavaScript Code Lab</h1>
        </header>

        <SideBar />

        <main className="main-content">
          <section className="code-editor">
            <textarea placeholder="// Start coding JavaScript here..."></textarea>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
