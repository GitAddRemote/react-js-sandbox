export function LessonItem( {title, subTitle, url = "#", description} ) {
    return (
        <li><a href={url} aria-label={description}>{title}: {subTitle}</a></li>
    )
}