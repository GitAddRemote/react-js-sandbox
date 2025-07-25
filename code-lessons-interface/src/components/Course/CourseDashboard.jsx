import { useState, useEffect } from 'react'
import { CourseCard } from './CourseCard';

export function CourseDashboard({ courseList }) {

  const [selectedCourse, setSelectedCourse] = useState(null);

  const SELECTED_COURSE_KEY = 'selectedCourse';
  
  useEffect(() => {
    console.log(`useEffect: selectedCourse changed to ${selectedCourse}`);
    if(selectedCourse) {
      localStorage.setItem(SELECTED_COURSE_KEY, JSON.stringify(selectedCourse));
    } else {
      localStorage.removeItem(SELECTED_COURSE_KEY);
    }
  }, [selectedCourse]);

  function handleCourseSelect(courseId) {
    console.log(`Selected course ID: ${courseId}`);
    const course = courseList.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
    }
  } 

  return (
      <main className="dashboard">
          <section className="course-container">
              <div className="course-grid">
                  { courseList.map( course => ( <CourseCard key={course.id} course={course} onClick={() => handleCourseSelect(course.id)} /> )) }
              </div>
          </section>
      </main>
  );
}
export default CourseDashboard;