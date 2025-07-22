import { useState } from 'react'
import { LessonSideBar } from './components/LessonSideBar'
import './styles.css'

function App() {

  return (
    <>
      <div class="layout">
        <header class="site-header">
          <h1>JavaScript Code Lab</h1>
        </header>

        <LessonSideBar />

        <main class="main-content">
          <section class="code-editor">
            <textarea placeholder="// Start coding JavaScript here..."></textarea>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
