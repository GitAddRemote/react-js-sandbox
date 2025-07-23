import { LessonList } from './Lesson/LessonList'
import '../styles.css'

export function SideBar(props) {
    return (
        <nav className="sidebar">
            <LessonList lessonList={props.lessonList} />
        </nav>
    )
}