//JS код для кнопки "Наверх"
'use strict';

const e = React.createElement;

class ScrollButton extends React.Component {
constructor(props) {
	super(props);
	this.state = { scrolled: false };
}

render() {
	if (this.state.scrolled) {
	window.scroll(0,0);
	}

	return e(
	'button',
	{ onClick: () => this.setState({ scrolled: true }) },
	'Наверх'
	);
}
}
const domContainer = document.querySelector('#scroll_button_container');
ReactDOM.render(e(ScrollButton), domContainer);