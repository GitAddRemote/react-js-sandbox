import { LessonItem } from './LessonItem'

export function LessonList(props) {
    return (
        <ul>
            { props.lessonList?.map(lesson => (
                <LessonItem key={lesson.id} title={lesson.title} subTitle={lesson.subTitle} url={`/lessons/${lesson.id}`} description={lesson.description} />
            ))}
        </ul>

    )
}