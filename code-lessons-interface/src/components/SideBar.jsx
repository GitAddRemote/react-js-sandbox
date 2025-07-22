import { LessonList } from './LessonList'
import '../styles.css'

export function SideBar() {
    return (
        <nav className="sidebar">
            <LessonList />
        </nav>
    )
}