import React, { Component } from 'react';
import { Departure } from '../departure/Departure';

export class DeparturesList extends Component {
	constructor(props) {
		super(props);

		this.departures = this.props.departures.departures.map(departure => {
			return {
				departure: departure.departure_time,
				arrival: departure.arrival_time,
				price: departure.prices.total
			}
		});
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<td>Departure</td>
						<td>Arrival</td>
						<td>Location</td>
						<td>Price USD</td>
					</tr>
				</thead>
				<tbody>
					{ this.departures.map( (departure, i) => {
						return <Departure information={departure} key={i} />
					})}
				</tbody>
			</table>
		);
	}
};
