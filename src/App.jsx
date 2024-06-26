import { useState } from 'react'
import Note from './components/Note'

const App = props => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('A new note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = event => {
    event.preventDefault()

    const note = {
      id: notes.length + 1,
      important: Math.random() < 0.5,
      content: newNote
    }

    setNotes(notes.concat(note))
    setNewNote('')
  }

  const handleNoteChange = event => setNewNote(event.target.value)

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input onChange={handleNoteChange} value={newNote} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default App
