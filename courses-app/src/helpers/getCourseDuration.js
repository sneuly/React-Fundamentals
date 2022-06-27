export default function getCourseDuration(duration) {
	let formatedDuration = '';
	const hours = Math.floor(duration / 60);
	const minutes = duration - hours * 60;

	formatedDuration += hours < 10 ? `0${hours}:` : `${hours}:`;
	formatedDuration += minutes < 10 ? `0${minutes} hours` : `${minutes} hours`;

	return formatedDuration;
}
