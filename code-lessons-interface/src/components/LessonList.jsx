import { LessonItem } from './LessonItem'

export function LessonList() {
    return (
        <ul>
            <LessonItem title="Lesson 1" subTitle="Variables" url="#" />
            <li><a href="#">Lesson 1: Variables</a></li>
            <li><a href="#">Lesson 2: Functions</a></li>
            <li><a href="#">Lesson 3: Objects</a></li>
            <li><a href="#">Lesson 4: Arrays</a></li>
            <li><a href="#">Lesson 5: DOM Manipulation</a></li>
        </ul>
    )
}