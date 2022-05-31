import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ArchiveCourse({ course, isActive, fetchData }) {

	const archiveToggle = (courseId) => {
		// fetch(`https://one-stop-ecommerce.herokuapp.com/courses/${courseId}/archive`,{
		fetch(`https://localhost:4000/courses/${courseId}/archive`,{
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			}
		})
		.then(res => res.json())
		.then(data => {
			if (data === true) {
				Swal.fire({
				title: 'Success',
				icon: 'success',
				text: 'Course successfully disabled'
				})
				fetchData()
			} else {
				Swal.fire({
				title: 'Error',
				icon: 'error',
				text: 'Something went wrong'
				})
				fetchData()
			}
		})
	}

	//for activating the course
	const activateToggle = (courseId) => {
		// fetch(`http://https://one-stop-ecommerce.herokuapp.com/courses/${courseId}/enable`,{
		fetch(`http://https://localhost:4000/courses/${courseId}/enable`,{
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			}
		})
		.then(res => res.json())
		.then(data => {
			if (data === true) {
				Swal.fire({
				title: 'Success',
				icon: 'success',
				text: 'Course successfully enabled'
				})
				fetchData()
			} else {
				Swal.fire({
				title: 'Error',
				icon: 'error',
				text: 'Something went wrong'
				})
				fetchData()
			}
		})
	}


	return(
		<>

			{isActive ? 
				<Button variant="danger" size="sm" onClick={() => archiveToggle(course)}>Disable</Button>

				:

				<Button variant="danger" size="sm" onClick={() => activateToggle(course)}>Enable</Button>

			}
		</>
		)
}