import { useState } from "react";
import "./NoteForm.css";
import { actions } from "../../redux/reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  notifictionSelector,
  resetNotification,
} from "../../redux/reducers/notificationReducer";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notifictionSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(noteText));
    setNoteText("");
  };

  if (message) {
    setTimeout(() => {
      dispatch(resetNotification());
    }, 5000);
  }

  return (
    <div>
      {message && (
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            className="form-control mb-3"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <button className="btn btn-success float-end" type="submit">
            Create Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteForm;
