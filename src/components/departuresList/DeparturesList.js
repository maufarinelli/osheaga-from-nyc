import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment'
import { Departure } from '../departure/Departure';

export class DeparturesList extends Component {
	constructor(props) {
		super(props);
		this.departures = [];
	}

	componentWillUpdate(nextProps) {
		if(nextProps.departures.departures) {
			this.departures = nextProps.departures.departures.map(departure => {
				let location = _.find(nextProps.departures.locations, {id: departure.destination_location_id});
				return {
					departure: moment(departure.departure_time).format("YYYY/MM/DD - HH:mm"),
					arrival: moment(departure.arrival_time).format("YYYY/MM/DD - HH:mm"),
					location: location.name,
					price: '$' + departure.prices.total
				}
			});
		}
	}

	render() {
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Departure</th>
						<th>Arrival</th>
						<th>Location</th>
						<th>Price USD</th>
					</tr>
				</thead>
				<tbody>
					{ this.departures.map( (departure, i) => {
						return <Departure information={departure} key={i} />
					}) }
				</tbody>
			</table>
		);
	}
};
