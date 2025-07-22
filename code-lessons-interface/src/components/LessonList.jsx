import { LessonItem } from './LessonItem'

export function LessonList() {
    return (
        <ul>
            <LessonItem title="Lesson 1" subTitle="Variables" url="#" />
            <LessonItem title="Lesson 2" subTitle="Functions" url="#" />
            <LessonItem title="Lesson 3" subTitle="Objects" url="#" />
            <LessonItem title="Lesson 4" subTitle="Arrays" url="#" />
            <LessonItem title="Lesson 5" subTitle="DOM Manipulation" url="#" />
        </ul>
    )
}