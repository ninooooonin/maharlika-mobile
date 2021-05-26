import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from 'prop-types';

const propTypes = {
	size: PropTypes.number,
    viewBox: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    color: PropTypes.string,
	style: PropTypes.any
};

const defaultProps = {
	size: 24,
	viewBox: '0 0 24 24',
	preserveAspectRatio: '',
	color: '#242526',
	style: {}
};

const UsersIcon = (props: any) => {
	return (
		<Svg width={props.size} height={props.size} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" transform="translate(-2.000000, -2.000000)" fill="none" fill-rule="evenodd">
                <Path fill={props.color} d="M15.4583333,16.5 C18.0350566,16.5 20.1367424,18.5338773 20.245573,21.0838141 L20.25,21.2916667 L20.25,23.2083333 C20.25,23.7376062 19.8209396,24.1666667 19.2916667,24.1666667 C18.800199,24.1666667 18.395139,23.7967115 18.3397807,23.3200952 L18.3333333,23.2083333 L18.3333333,21.2916667 C18.3333333,19.7605558 17.1364517,18.5089917 15.6272614,18.4215472 L15.4583333,18.4166667 L7.79166667,18.4166667 C6.26055582,18.4166667 5.00899166,19.6135483 4.92154716,21.1227386 L4.91666667,21.2916667 L4.91666667,23.2083333 C4.91666667,23.7376062 4.48760622,24.1666667 3.95833333,24.1666667 C3.46686565,24.1666667 3.06180564,23.7967115 3.00644741,23.3200952 L3,23.2083333 L3,21.2916667 C3,18.7149434 5.03387726,16.6132576 7.58381411,16.504427 L7.79166667,16.5 L15.4583333,16.5 Z M22.4062497,16.6550143 C24.4500938,17.182732 25.8991437,18.9817116 25.9949476,21.0741959 L26,21.2916667 L26,23.2083333 C26,23.7376062 25.5709396,24.1666667 25.0416667,24.1666667 C24.550199,24.1666667 24.145139,23.7967115 24.0897807,23.3200952 L24.0833333,23.2083333 L24.0833336,21.2923815 C24.0823563,19.9821849 23.1956765,18.8383679 21.9270836,18.510819 C21.4146173,18.3785009 21.1064463,17.8557999 21.2387643,17.3433336 C21.3710824,16.8308673 21.8937834,16.5226963 22.4062497,16.6550143 Z M11.625,5 C14.2713644,5 16.4166667,7.14530224 16.4166667,9.79166667 C16.4166667,12.4380311 14.2713644,14.5833333 11.625,14.5833333 C8.97863557,14.5833333 6.83333333,12.4380311 6.83333333,9.79166667 C6.83333333,7.14530224 8.97863557,5 11.625,5 Z M18.5710376,5.15453125 C20.691248,5.69739089 22.1741831,7.60785398 22.1741831,9.79645833 C22.1741831,11.9850627 20.691248,13.8955258 18.5710376,14.4383854 C18.0583044,14.5696658 17.5362283,14.2604373 17.4049479,13.7477042 C17.2736675,13.2349711 17.582896,12.712895 18.0956291,12.5816146 C19.3677554,12.2558988 20.2575165,11.1096209 20.2575165,9.79645833 C20.2575165,8.48329572 19.3677554,7.33701787 18.0956291,7.01130208 C17.582896,6.88002167 17.2736675,6.35794555 17.4049479,5.84521245 C17.5362283,5.33247934 18.0583044,5.02325083 18.5710376,5.15453125 Z M11.625,6.91666667 C10.0371813,6.91666667 8.75,8.20384801 8.75,9.79166667 C8.75,11.3794853 10.0371813,12.6666667 11.625,12.6666667 C13.2128187,12.6666667 14.5,11.3794853 14.5,9.79166667 C14.5,8.20384801 13.2128187,6.91666667 11.625,6.91666667 Z"></Path>
			</G>
		</Svg>
	)
};

UsersIcon.propTypes = propTypes;
UsersIcon.defaultProps = defaultProps;

export default React.memo(UsersIcon);