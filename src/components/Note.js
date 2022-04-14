import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<textarea id = "title" rows='1' cols = '10'
				placeholder='Type to Add a Title.....'>
			</textarea>
			<textarea id = "text-box" rows='9' cols = '10'>
				{text}
			</textarea>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;