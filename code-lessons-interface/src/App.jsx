import { SideBar } from './components/SideBar'
import './styles.css'

function App() {

  const lessonList = [
    { id: 1, title: 'Intro', subTitle:'Intro to JavaScript', url: '#', description: 'Learn the basics of JavaScript, including variables, data types, and operators.' },
    { id: 2, title: 'Control Structures', subTitle:'Control Structures in JavaScript', url: '#', description: 'Understand how to use if statements, loops, and switch cases to control the flow of your code.' },
    { id: 3, title: 'Functions', subTitle:'JavaScript Functions', url: '#', description: 'Learn how to define and call functions, including arrow functions and higher-order functions.' },
    { id: 4, title: 'Objects and Arrays', subTitle:'Working with Objects and Arrays', url: '#', description: 'Explore how to work with objects and arrays in JavaScript, including methods and properties.' },
    { id: 5, title: 'Asynchronous JavaScript', subTitle:'Asynchronous JavaScript', url: '#', description: 'Get introduced to asynchronous programming with callbacks, promises, and async/await.' }
  ]

  return (
    <>
      <div className="layout">
        <header className="site-header">
          <h1>JavaScript Code Lab</h1>
        </header>

        <SideBar lessonList={lessonList} />

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
