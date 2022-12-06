import moment from 'moment';
import USERS from '../../../common/data/userDummyData';

const now = new Date();

export default [
	{
		id: 0,
		title: 'All Day Event very long title',
		allDay: true,
		// @ts-ignore
		start: moment().add(1, 'day')._d,
		// @ts-ignore
		end: moment().add(1, 'day')._d,
		user: USERS.ELLA,
	},
	{
		id: 1,
		title: 'Long Event',
		// @ts-ignore
		start: moment().add(3, 'day')._d,
		// @ts-ignore
		end: moment().add(5, 'day')._d,
		user: USERS.JANE,
	},
	{
		id: 2,
		title: 'DTS STARTS',
		// @ts-ignore
		start: moment().add(4, 'day').startOf('week')._d,
		// @ts-ignore
		end: moment().add(4, 'day').endOf('week')._d,

		color: 'danger',
		user: USERS.JOHN,
	},
	{
		id: 3,
		title: 'DTS ENDS',
		// @ts-ignore
		start: moment().startOf('week').add(4, 'day')._d,
		// @ts-ignore
		end: moment().endOf('week').add(11, 'day')._d,

		color: 'success',
		user: USERS.CHLOE,
	},
	{
		id: 4,
		title: 'Some Event',
		// @ts-ignore
		start: moment().add(15, 'day')._d,
		// @ts-ignore
		end: moment().add(16, 'day')._d,
		color: 'danger',
		user: USERS.GRACE,
	},
	{
		id: 5,
		title: 'Conference',
		// @ts-ignore
		start: moment().add(18, 'day')._d,
		// @ts-ignore
		end: moment().add(20, 'day')._d,
		desc: 'Big conference for important people',
		color: 'warning',
		users: [USERS.GRACE, USERS.JOHN, USERS.ELLA],
		icon: 'VolumeUp',
	},
	{
		id: 6,
		title: 'Meeting',
		// @ts-ignore
		start: moment().add(22, 'day').add(10, 'hour').add(30, 'minute')._d,
		// @ts-ignore
		end: moment().add(22, 'day').add(12, 'hour').add(30, 'minute')._d,
		desc: 'Pre-meeting meeting, to prepare for the meeting',
		color: 'success',
		users: [USERS.SAM, USERS.CHLOE, USERS.ELLA],
	},
	{
		id: 7,
		title: 'Lunch',
		// @ts-ignore
		start: moment().add(1, 'day').add(12, 'hour').add(30, 'minute')._d,
		// @ts-ignore
		end: moment().add(1, 'day').add(13, 'hour').add(30, 'minute')._d,
		desc: 'Power lunch',
		color: 'dark',
		icon: 'DinnerDining',
	},
	{
		id: 8,
		title: 'Meeting',
		// @ts-ignore
		start: moment().add(3, 'day').add(14, 'hour')._d,
		// @ts-ignore
		end: moment().add(3, 'day').add(15, 'hour').add(30, 'minute')._d,
		color: 'primary',
		user: USERS.RYAN,
	},
	{
		id: 9,
		title: 'Happy Hour',
		// @ts-ignore
		start: moment().add(4, 'day').add(17, 'hour')._d,
		// @ts-ignore
		end: moment().add(4, 'day').add(17, 'hour').add(30, 'minute')._d,
		desc: 'Most important meal of the day',
	},
	{
		id: 10,
		title: 'Dinner',
		// @ts-ignore
		start: moment().add(4, 'day').add(20, 'hour')._d,
		// @ts-ignore
		end: moment().add(4, 'day').add(21, 'hour')._d,
	},
	{
		id: 11,
		title: 'Planning Meeting with Paige',
		// @ts-ignore
		start: moment().add(7, 'day').add(8, 'hour')._d,
		// @ts-ignore
		end: moment().add(7, 'day').add(10, 'hour').add(30, 'minute')._d,
		user: USERS.RYAN,
		color: 'primary',
	},
	{
		id: 11.1,
		title: 'Inconvenient Conference Call',
		// @ts-ignore
		start: moment().add(7, 'day').add(9, 'hour').add(30, 'minute')._d,
		// @ts-ignore
		end: moment().add(7, 'day').add(12, 'hour')._d,
	},
	{
		id: 11.2,
		title: "Project Kickoff - Lou's Shoes",
		// @ts-ignore
		start: moment().add(7, 'day').add(11, 'hour').add(30, 'minute')._d,
		// @ts-ignore
		end: moment().add(7, 'day').add(14, 'hour')._d,
	},
	{
		id: 11.3,
		title: 'Quote Follow-up - Tea by Tina',
		// @ts-ignore
		start: moment().add(7, 'day').add(15, 'hour').add(30, 'minute')._d,
		// @ts-ignore
		end: moment().add(7, 'day').add(16, 'hour')._d,
	},
	{
		id: 12,
		title: 'Late Night Event',
		// @ts-ignore
		start: moment().startOf('day').add(30, 'day').add(23, 'hour').add(30, 'minute')._d,
		// @ts-ignore
		end: moment().startOf('day').add(31, 'day').add(2, 'hour')._d,
		color: 'warning',
		user: USERS.GRACE,
	},
	{
		id: 12.5,
		title: 'Late Same Night Event',
		// @ts-ignore
		start: moment().startOf('day').add(33, 'day').add(20, 'hour').add(30, 'minute')._d,
		// @ts-ignore
		end: moment().startOf('day').add(33, 'day').add(22, 'hour')._d,
		color: 'danger',
		user: USERS.ELLA,
		icon: 'Nightlight',
	},
	{
		id: 13,
		title: 'Multi-day Event',
		// @ts-ignore
		start: moment().startOf('day').add(36, 'day').add(19, 'hour').add(30, 'minute')._d,
		// @ts-ignore
		end: moment().startOf('day').add(38, 'day').add(2, 'hour')._d,
		icon: 'Groups',
	},
	{
		id: 14,
		title: 'Today',
		// @ts-ignore
		start: moment().startOf('hour').add(-2, 'hour')._d,
		// @ts-ignore
		end: moment().startOf('hour').add(2, 'hour')._d,
		icon: 'HourglassTop',
		color: 'primary',
	},
	{
		id: 15,
		title: 'Point in Time Event',
		start: now,
		end: now,
	},
	{
		id: 16,
		title: 'Video Record',
		// @ts-ignore
		start: moment().endOf('month').add(-1, 'day')._d,
		// @ts-ignore
		end: moment().endOf('month').add(1, 'day')._d,
		icon: 'Videocam',
	},
	{
		id: 17,
		title: 'Dutch Song Producing',
		// @ts-ignore
		start: moment().endOf('month').add(12, 'day').startOf('day').add(16, 'hour')._d,
		// @ts-ignore
		end: moment().endOf('month').add(12, 'day').startOf('day').add(20, 'hour')._d,
		icon: 'Mic',
		color: 'success',
		user: USERS.SAM,
	},
	{
		id: 18,
		title: 'Itaewon Halloween Meeting',
		// @ts-ignore
		start: moment().endOf('month').add(13, 'day').startOf('day').add(16, 'hour')._d,
		// @ts-ignore
		end: moment().endOf('month').add(13, 'day').startOf('day').add(20, 'hour')._d,
		icon: 'SentimentVerySatisfied',
		color: 'danger',
	},
	{
		id: 19,
		title: 'Online Coding Test',
		// @ts-ignore
		start: moment().endOf('month').add(14, 'day').startOf('day').add(16, 'hour')._d,
		// @ts-ignore
		end: moment().endOf('month').add(14, 'day').startOf('day').add(20, 'hour')._d,
		icon: 'Code',
		color: 'warning',
	},
	{
		id: 20,
		title: 'An overlapped Event',
		// @ts-ignore
		start: moment().endOf('month').add(15, 'day').startOf('day').add(16, 'hour')._d,
		// @ts-ignore
		end: moment().endOf('month').add(15, 'day').startOf('day').add(20, 'hour')._d,
	},
	{
		id: 21,
		title: 'Phone Interview',
		// @ts-ignore
		start: moment().endOf('month').add(23, 'day').startOf('day').add(16, 'hour')._d,
		// @ts-ignore
		end: moment().endOf('month').add(23, 'day').startOf('day').add(20, 'hour')._d,
	},
	{
		id: 22,
		title: 'Cooking Class',
		// @ts-ignore
		start: moment().endOf('month').add(23, 'day').startOf('day').add(16, 'hour')._d,
		// @ts-ignore
		end: moment().endOf('month').add(23, 'day').startOf('day').add(20, 'hour')._d,
		icon: 'OutdoorGrill',
		color: 'success',
	},
	{
		id: 23,
		title: 'Go to the gym',
		// @ts-ignore
		start: moment().endOf('month').add(23, 'day').startOf('day').add(16, 'hour')._d,
		// @ts-ignore
		end: moment().endOf('month').add(23, 'day').startOf('day').add(20, 'hour')._d,
	},
];
