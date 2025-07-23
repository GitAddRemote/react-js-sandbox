export function LessonItem( {title, subTitle, url = "#", description} ) {
    // console.log('LL: LessonItem component loaded: ', {title, subTitle, url, description});
    return (
        <li><a href={url} alt={description}>{title}: {subTitle}</a></li>
    )
}