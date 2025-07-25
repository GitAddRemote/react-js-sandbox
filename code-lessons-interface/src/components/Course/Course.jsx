export function CourseDashboard({ course, lessonList }) {
    return (
        <div className="course-dashboard">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <LessonList lessonList={lessonList} />
        </div>
    );
}
export default CourseDashboard;