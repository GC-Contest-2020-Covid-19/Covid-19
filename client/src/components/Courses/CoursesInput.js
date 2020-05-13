import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// redux
import { useDispatch } from "react-redux";
import {
	clearCourses,
	addCourse,
	changeCourseCouseraStatus,
	changeCourseEdxStatus,
	changeCourseRequested
} from "../../redux/actions/courseActions";

const SERVER_PATH = "https://covid19-gc.herokuapp.com/";

export const CoursesInput = () => {
	const dispatch = useDispatch();

	const [query, setQuery] = useState("");

	const SubmitHandler = (e) => {
		e.preventDefault();
		dispatch(clearCourses());
		dispatch(changeCourseCouseraStatus(true));
		dispatch(changeCourseEdxStatus(true));
		dispatch(changeCourseRequested(true));

		getCoursera(query).then((json) => {
			if (json === false || json.success === false) {
				dispatch(changeCourseCouseraStatus(false))
				return false;
			}

			for (let i = 0; i < json.titles.length; i++) {
				dispatch(
					addCourse({
						id: uuidv4(),
						university: json.universities[i],
						title: json.titles[i],
						rating: json.ratings[i],
						enrollement: json.enrollement[i],
						difficulty: json.difficulties[i],
						link: `https://www.coursera.org${json.links[i]}`,
					})
				);
			}
		});
		getEDX(query).then((json) => {
			if (json === false || json.success === false) {
				dispatch(changeCourseEdxStatus(false))
				return false;
			}
			for (let i = 0; i < json.titles.length; i++) {
				dispatch(
					addCourse({
						id: uuidv4(),
						university: json.universities[i],
						title: json.titles[i],
						link: json.links[i],
					})
				);
			}
		})
	};

	return (
		<div className='custom-ml-5 custom-mr-5 custom-mt-3'>
			<h3 className='is-size-3'>University Courses</h3>
			<p className='is-size-5'>Expand your knowledge with a university course!</p>
			<form
				onSubmit={SubmitHandler}
				className='field'>
				<div className='control'>
					<input
						className='input is-rounded custom-mb-3'
						type='text'
						id='time'
						placeholder='Query'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<button type='submit' className='button is-rounded'>
					Search!
				</button>
			</form>
		</div>
	);
};

function getCoursera(query) {
	return fetch(encodeURI(SERVER_PATH + `api/coursera/${query}`), {
		mode: "cors",
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response;
		})
		.then((response) => response.json())
		.catch((error) => {
			console.log(error);
			return false;
		});
}

function getEDX(query) {
	return fetch(encodeURI(SERVER_PATH + `api/edx/${query}`), {
		mode: "cors",
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response;
		})
		.then((response) => response.json())
		.catch((error) => {
			console.log(error);
			return false;
		});
}