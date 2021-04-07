import "./filtering.css";

export default function Filtering(props) {
  return (
    <div>
      <div className="selection-bar">
        <button
          className="button all-button"
          onClick={() => props.setStatus(null)}
          value="all"
        >
          All
        </button>
        <button
          className="button done-button"
          onClick={() => props.setStatus(true)}
          value="done"
        >
          Done
        </button>
        <button
          className="button undone-button"
          onClick={() => props.setStatus(false)}
          value="undone"
        >
          Undone
        </button>
      </div>
    </div>
  );
}
