export function formatDate(date: string) {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
	const [year, month, day] = date.split("-").map((i) => parseInt(i, 10))
	const monthName = monthNames[month - 1]
	return `${monthName} ${day} ${year}`
}
