const React = require("react");

class DefaultLayout extends React.Component {
	render() {
		return (
			<html>
				<head>
					<link rel="stylesheet" href="/css/cardStyles.css" />
				</head>
				<body>
					<div className="wrapper"></div>
					{this.props.children}
				</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;
