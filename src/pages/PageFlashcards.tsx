import db from "../../backend/data/db.json";

const flashcards = db.flashcards;

export const PageFlashcards = () => {
	return (
		<>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-4 mt-4">
				{flashcards.map((flashcard) => {
					return <li key={flashcard.suuid}>{flashcard.front}</li>;
				})}
			</ul>
		</>
	);
};
