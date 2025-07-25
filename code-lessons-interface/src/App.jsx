import { useState, useEffect } from 'react'
import { CourseDashboard } from './components/Course/CourseDashboard'
import './styles.css'
import { Lesson } from './components/Lesson/Lesson';

function App() {

  const SELECTED_COURSE_KEY = 'selectedCourse';

  const [selectedCourse, setSelectedCourse] = useState(() => {
    console.log(`useState: initializing selectedCourse`);
    const savedCourse = localStorage.getItem(SELECTED_COURSE_KEY);
    return savedCourse ? savedCourse : null;
  });

  useEffect(() => {
    console.log(`useEffect: selectedCourse changed to ${selectedCourse}`);
    if(selectedCourse) {
      localStorage.setItem(SELECTED_COURSE_KEY, JSON.stringify(selectedCourse));
    } else {
      localStorage.removeItem(SELECTED_COURSE_KEY);
    }
  }, [selectedCourse]);

  const courseList = [
    { id: 1, title: 'JavaScript Basics', description: 'Learn the fundamentals of JavaScript, including syntax, data types, and control structures.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Dive deeper into JavaScript with topics like closures, promises, and async/await.' },
    { id: 3, title: 'React Basics', description: 'Get started with React, a popular JavaScript library for building user interfaces.' },
    { id: 4, title: 'React Hooks', description: 'Learn about React Hooks and how they can simplify your component logic.' },
    { id: 5, title: 'State Management', description: 'Explore state management solutions in React, including Context API and Redux.' }
  ];

  return (
      <div className="layout">
        <header className="site-header">
          <h1><a href="/" onClick={(e) => { e.preventDefault(); setSelectedCourse(null); }}>DevTronic Labs</a></h1>
        </header>

        { console.log(`SELECTED: ${selectedCourse}`) }
        { selectedCourse ? (
          <Lesson course={selectedCourse} onClose={() => setSelectedCourse(null)} />
        ) : (
          <CourseDashboard courseList={courseList} />
        )}

        <footer className="site-footer">
          <p>&copy; 2025 DevTronic Labs</p>
        </footer>        
      </div>      
  )
}

export default App
