import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';


export default function CoursePage() {

	const [ allCourses, setAllCourses ] = useState([])

	const fetchData = () => {
		fetch('http://localhost:4000/courses/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			//storing all the data to our useState allCourses
			setAllCourses(data)
		})
	}

	//render
	useEffect(() => {
		fetchData()
	}, [])

	const { user } = useContext(UserContext);

	return(
		<>
			<h1>Courses</h1>

			{(user.isAdmin === true) ? 
				<AdminView coursesData={allCourses} fetchData={fetchData} />

				:

				<UserView coursesData={allCourses} />
			}

		</>


		)
}



/*import CourseCard from '../components/CourseCard';
import coursesData from '../mockData/coursesData';

export default function CoursePage() {
	//Check if the mock data was captured
	console.log(coursesData);

	console.log(coursesData[0]);

	//For us to be able to display all the courses from the data file we are going to use the map() method.
	const courses = coursesData.map(individualCourse => {
		return(
			<CourseCard key={individualCourse.id} courseProp={individualCourse}/>
			//add key property to keep track the number of courses and to avoid duplication

			)
	})

	return(

		<>
			<h1>Courses</h1>
			{courses}
		</>


		)
}*/