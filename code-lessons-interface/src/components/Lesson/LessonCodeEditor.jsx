export function LessonCodeEditor({ code }) {
  return (
    <div className="lesson-code-editor">
      <h3>Code Editor</h3>
      <pre className="code-block">
        {code}
      </pre>
    </div>
  );
}
export default LessonCodeEditor;