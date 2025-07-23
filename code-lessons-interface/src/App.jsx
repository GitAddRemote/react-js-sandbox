import { useState, useEffect } from 'react'
import { SideBar } from './components/SideBar'
import './styles.css'

function App() {

  const SELECTED_COURSE_KEY = 'selectedCourse';

  const [selectedCourse, setSelectedCourse] = useState(() => {
    const savedCourse = localStorage.getItem(SELECTED_COURSE_KEY);
    return savedCourse ? JSON.parse(savedCourse) : [];
  });

  useEffect(() => {
    localStorage.setItem(SELECTED_COURSE_KEY, JSON.stringify(selectedCourse));
  }, [selectedCourse]);

  const courseList = [
    { id: 1, title: 'JavaScript Basics', description: 'Learn the fundamentals of JavaScript, including syntax, data types, and control structures.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Dive deeper into JavaScript with topics like closures, promises, and async/await.' },
    { id: 3, title: 'React Basics', description: 'Get started with React, a popular JavaScript library for building user interfaces.' },
    { id: 4, title: 'React Hooks', description: 'Learn about React Hooks and how they can simplify your component logic.' },
    { id: 5, title: 'State Management', description: 'Explore state management solutions in React, including Context API and Redux.' }
  ];

  /** This would normally exist in a database on the backend */
  const javaScriptBasicsLessonList = [
    { id: 1, courseId: 1, title: 'Intro', subTitle:'Intro to JavaScript', url: '#', description: 'Learn the basics of JavaScript, including variables, data types, and operators.', code: '\\ These are example variables \n var exampleVar = 5; \n let exampleLet = 10; \n const exampleConst = 15;' },
    { id: 2, courseId: 1, title: 'Control Structures', subTitle:'Control Structures in JavaScript', url: '#', description: 'Understand how to use if statements, loops, and switch cases to control the flow of your code.', code: 'if (condition) { \n  // code to execute if condition is true \n} else { \n  // code to execute if condition is false \n}' },
    { id: 3, courseId: 1, title: 'Functions', subTitle:'JavaScript Functions', url: '#', description: 'Learn how to define and call functions, including arrow functions and higher-order functions.', code: 'function exampleFunction(param) { \n  return param * 2; \n}' },
    { id: 4, courseId: 1, title: 'Objects and Arrays', subTitle:'Working with Objects and Arrays', url: '#', description: 'Explore how to work with objects and arrays in JavaScript, including methods and properties.', code: 'const exampleArray = [1, 2, 3]; \nconst exampleObject = { key: "value" };' },
    { id: 5, courseId: 1, title: 'Asynchronous JavaScript', subTitle:'Asynchronous JavaScript', url: '#', description: 'Get introduced to asynchronous programming with callbacks, promises, and async/await.', code: 'async function fetchData() { \n  const response = await fetch(url); \n  const data = await response.json(); \n}' }
  ];

  function selectCourse(courseId) {
    const course = courseList.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
    }
  } 

  return (
      <div className="layout">
        <header className="site-header">
          <h1>JavaScript Code Lab</h1>
        </header>

        <SideBar lessonList={javaScriptBasicsLessonList} />

        <main className="main-content">
          <section className="code-editor">
            <textarea placeholder="// Start coding JavaScript here..."></textarea>
          </section>
        </main>
      </div>
  )
}

export default App
