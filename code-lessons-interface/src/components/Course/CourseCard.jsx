export function CourseCard({ course, lessonList, onClick }) {
    return (
        <div className="course-card" onClick={onClick}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
        </div>
    );
}
export default CourseCard;