import { useState } from "react";
import db from "../../backend/data/db.json";
import {
	ITestingFlashcard,
	convertFlashcardToTestingFlaschard,
} from "../shared/interfaces";

const _flashcards = db.flashcards;
const _testingFlashcards: ITestingFlashcard[] = [];
for (const _flashcard of _flashcards) {
	const testingFlashcard: ITestingFlashcard =
		convertFlashcardToTestingFlaschard(_flashcard);
	_testingFlashcards.push(testingFlashcard);
}

export const PageFlashcards = () => {
	const [testingFlashcards, setTestingFlashcards] =
		useState<ITestingFlashcard[]>(_testingFlashcards);
	const handleTestingFlashcardToggle = (
		testingFlashcard: ITestingFlashcard
	) => {
		testingFlashcard.backIsShowing = !testingFlashcard.backIsShowing;
		setTestingFlashcards(structuredClone(testingFlashcards));
	};
	return (
		<>
			<p>There are {testingFlashcards.length} flashcards.</p>
			<div className="list-disc mt-4">
				{testingFlashcards.map((testingFlashcard) => {
					return (
						<div
							className="mb-5 w-[40rem]"
							key={testingFlashcard.suuid}
						>
							<div
								onClick={() => {
									handleTestingFlashcardToggle(
										testingFlashcard
									);
								}}
								className="bg-slate-600 p-3 rounded-t-lg text-gray-300 cursor-pointer"
							>
								<span className="font-semibold text-yellow-200">{testingFlashcard.category}</span> - {testingFlashcard.front}
							</div>
							{testingFlashcard.backIsShowing && (
								<div className="bg-slate-200 p-3 rounded-b-lg">
									{testingFlashcard.back}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};
