
class PomodoroTimer extends React.Component {

	constructor(){
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
		this.interval = setInterval(this.elapseTime.bind(this),1000)
		this.setState({start: new Date()});
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	elapseTime() {
		
		var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
		
		this.setState({timeElapsed: timeElapsed});
		console.log(this);

		if(this.state.timeElapsed >= this.props.workingTime * 60) {
			clearInterval(this.interval);
			alert("Time for a break!");
		} else if(this.state.timeElapsed === 60) {
			this.props.workingTime = this.props.workingTime + 1;
			
		}


	}

	render() {

		return(
			<div>

				<h1>Pomodoro Clock</h1>
				<div id="clockdiv">
					<div>
						<span class="minutes">00</span>
						<div class="smalltext">Minutes</div>
					</div>
					<div>
						<span class="seconds">{this.state.timeElapsed}</span>
						<div class="smalltext">Seconds</div>
					</div>
				</div>
				<br/><br/>
			
				<div>
					This timer runs for {this.props.workingTime} minutes,
					followed by rest of {this.props.restingTime} minutes. 
					<br/> For a total time of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
				</div>

			</div>
			
		)
	}
}


ReactDOM.render(

	<PomodoroTimer workingTime={25} restingTime={5} />,
	document.getElementById('app')

);