import { LessonList } from './LessonList';
import { LessonCodeEditor } from './LessonCodeEditor';
import '../../styles.css';

export function Lesson({ course }) {

    /** This would normally exist in a database on the backend */
    const javaScriptBasicsLessonList = [
        { id: 1, courseId: 1, title: 'Intro', subTitle:'Intro to JavaScript', url: '#', description: 'Learn the basics of JavaScript, including variables, data types, and operators.', code: '\\ These are example variables \n var exampleVar = 5; \n let exampleLet = 10; \n const exampleConst = 15;' },
        { id: 2, courseId: 1, title: 'Control Structures', subTitle:'Control Structures in JavaScript', url: '#', description: 'Understand how to use if statements, loops, and switch cases to control the flow of your code.', code: 'if (condition) { \n  // code to execute if condition is true \n} else { \n  // code to execute if condition is false \n}' },
        { id: 3, courseId: 1, title: 'Functions', subTitle:'JavaScript Functions', url: '#', description: 'Learn how to define and call functions, including arrow functions and higher-order functions.', code: 'function exampleFunction(param) { \n  return param * 2; \n}' },
        { id: 4, courseId: 1, title: 'Objects and Arrays', subTitle:'Working with Objects and Arrays', url: '#', description: 'Explore how to work with objects and arrays in JavaScript, including methods and properties.', code: 'const exampleArray = [1, 2, 3]; \nconst exampleObject = { key: "value" };' },
        { id: 5, courseId: 1, title: 'Asynchronous JavaScript', subTitle:'Asynchronous JavaScript', url: '#', description: 'Get introduced to asynchronous programming with callbacks, promises, and async/await.', code: 'async function fetchData() { \n  const response = await fetch(url); \n  const data = await response.json(); \n}' }
    ];

    // {javaScriptBasicsLessonList.find(lesson => lesson.courseId === course?.id)?.code}
    return (
        <div className="lesson">
            <h2>{course?.title}</h2>
            <p>{course?.description}</p>
            <LessonList lessons={javaScriptBasicsLessonList.length} />
            <LessonCodeEditor code={javaScriptBasicsLessonList[0]?.code} />
        </div>
    );
}