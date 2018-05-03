
class PomodoroTimer extends React.Component {

	constructor() {
		super();
		this.state = {
			timeElapsed: 0
		};
	}

	totalTime(timeOne, timeTwo) {
		return timeOne + timeTwo;
	}

	componentDidMount() {
		//copnsole.log(new Date());
		this.interval = setInterval(this.elapseTime.bind(this), 1000);
		this.setState({ start: new Date() });
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	elapseTime() {

		var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);

		this.setState({ timeElapsed: timeElapsed });
		console.log(this);

		if (this.state.timeElapsed >= this.props.workingTime * 60) {
			clearInterval(this.interval);
			alert("Time for a break!");
		} else if (this.state.timeElapsed === 60) {
			this.props.workingTime = this.props.workingTime + 1;
		}
	}

	render() {

		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Pomodoro Clock"
			),
			React.createElement(
				"div",
				{ id: "clockdiv" },
				React.createElement(
					"div",
					null,
					React.createElement(
						"span",
						{ "class": "minutes" },
						"00"
					),
					React.createElement(
						"div",
						{ "class": "smalltext" },
						"Minutes"
					)
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"span",
						{ "class": "seconds" },
						this.state.timeElapsed
					),
					React.createElement(
						"div",
						{ "class": "smalltext" },
						"Seconds"
					)
				)
			),
			React.createElement("br", null),
			React.createElement("br", null),
			React.createElement(
				"div",
				null,
				"This timer runs for ",
				this.props.workingTime,
				" minutes, followed by rest of ",
				this.props.restingTime,
				" minutes.",
				React.createElement("br", null),
				" For a total time of ",
				this.totalTime(this.props.workingTime, this.props.restingTime),
				" minutes."
			)
		);
	}
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));