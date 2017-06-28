export default function search() {
    // let date = new Date(2017, 6, 29),
    //     request = new Request('https://napi.busbud.com/x-departures/dr5reg/f25dvk/' + date.toISOString(), {
    //         headers: new Headers({
    //             'Accept': 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
    //             'Content-Type': 'text/plain; charset=utf-8'
    //         })
    //     });

    const mockData = {
			"origin_city_id": "375dd5879001acbd84a4683dedf9eed1",
			"destination_city_id": "375dd5879001acbd84a4683ded9c875b",
			"cities": [
				{
					"id": "375dd5879001acbd84a4683deda84183",
					"locale": "en",
					"region_id": 6417,
					"name": "New York",
					"lat": 40.71427,
					"lon": -74.00597,
					"geohash": "dr5reg",
					"timezone": "America/New_York",
					"image_url": "/images/promos/city-blocks/new-york.jpg",
					"legacy_url_form": "NewYork,NewYork,UnitedStates",
					"full_name": "New York, New York, United States",
					"region": {
						"id": 6417,
						"locale": "en",
						"country_code2": "US",
						"name": "New York",
						"country": {
							"code2": "US",
							"locale": "en",
							"code3": "USA",
							"name": "United States",
							"continent": "NA",
							"default_locale": "en",
							"default_currency": "USD",
							"population": 310232863
						}
					}
				},
				{
					"id": "375dd5879001acbd84a4683deda84183",
					"locale": "en",
					"region_id": 6418,
					"name": "Montreal",
					"lat": 40.71427,
					"lon": -74.00597,
					"geohash": "dr5reg",
					"timezone": "America/Montreal",
					"image_url": "/images/promos/city-blocks/new-york.jpg",
					"legacy_url_form": "Montreal,Quebec,Canada",
					"full_name": "Montreal, Quebec, Canada",
					"region": {
						"id": 6417,
						"locale": "en",
						"country_code2": "CA",
						"name": "Canada",
						"country": {
							"code2": "CA",
							"locale": "en",
							"code3": "CA",
							"name": "Canada",
							"continent": "NA",
							"default_locale": "en",
							"default_currency": "USD",
							"population": 310232863
						}
					}
				}
			],
			"locations": [
				{
					"id": 1938,
					"city_id": "375dd5879001acbd84a4683dedfb933e",
					"name": "Métro Bonaventure Bus Station",
					"address": [
						"997 Rue St-Antoine Ouest",
						"Montreal, QC H3C 1A6"
					],
					"type": "transit_station",
					"lat": 45.4988273060484,
					"lon": -73.5644745826722,
					"geohash": "f25dvfzcz"
				},
				{
					"id": 1939,
					"city_id": "375dd5879001acbd84a4683dedfb933e",
					"name": "Bus Station Berri",
					"address": [
						"997 Rue St-Antoine Ouest",
						"Montreal, QC H3C 1A6"
					],
					"type": "transit_station",
					"lat": 45.4988273060484,
					"lon": -73.5644745826722,
					"geohash": "f25dvfzcz"
				},
				{
					"id": 1940,
					"city_id": "375dd5879001acbd84a4683dedfb933e",
					"name": "Downtown station",
					"address": [
						"997 Rue St-Antoine Ouest",
						"Montreal, QC H3C 1A6"
					],
					"type": "transit_station",
					"lat": 45.4988273060484,
					"lon": -73.5644745826722,
					"geohash": "f25dvfzcz"
				}
			],
			"departures": [
				{
					"id": "7c5dd26a",
					"source_id": 155,
					"checkout_type": "new",
					"operator_id": "bfc27cd544ca49c18d000f2bc00c58c0",
					"origin_location_id": 1942,
					"destination_location_id": 1938,
					"class": "Economy",
					"class_name": "Economy",
					"amenities": {
						"display_name": "Economy",
						"wifi": true,
						"toilet": true,
						"ac": true,
						"food": false,
						"refreshment": false,
						"power_outlets": true,
						"tv": false,
						"bus_attendant": false,
						"leg_room": false
					},
					"available_seats": 55,
					"prices": {
						"total": 82,
						"breakdown": {
							"base": 5200
						},
						"categories": {},
						"discounted": false
					},
					"ticket_types": [
						"print"
					],
					"departure_timezone": "America/New_York",
					"arrival_timezone": "America/Montreal",
					"departure_time": "2016-01-14T01:00:00",
					"arrival_time": "2016-01-14T07:45:00"
				},
				{
					"id": "7c5dd26a",
					"source_id": 156,
					"checkout_type": "new",
					"operator_id": "bfc27cd544ca49c18d000f2bc00c58c0",
					"origin_location_id": 1942,
					"destination_location_id": 1939,
					"class": "Business 2",
					"class_name": "Business 2",
					"amenities": {
						"display_name": "Business",
						"wifi": true,
						"toilet": true,
						"ac": true,
						"food": false,
						"refreshment": false,
						"power_outlets": true,
						"tv": false,
						"bus_attendant": false,
						"leg_room": false
					},
					"available_seats": 55,
					"prices": {
						"total": 119,
						"breakdown": {
							"base": 5200
						},
						"categories": {},
						"discounted": false
					},
					"ticket_types": [
						"print"
					],
					"departure_timezone": "America/New_York",
					"arrival_timezone": "America/Montreal",
					"departure_time": "2016-01-14T03:00:00",
					"arrival_time": "2016-01-14T09:45:00"
				},
				{
					"id": "7c5dd26a",
					"source_id": 157,
					"checkout_type": "new",
					"operator_id": "bfc27cd544ca49c18d000f2bc00c58c0",
					"origin_location_id": 1942,
					"destination_location_id": 1940,
					"class": "Economy",
					"class_name": "Super Economy",
					"amenities": {
						"display_name": "Super Economy",
						"wifi": true,
						"toilet": true,
						"ac": true,
						"food": false,
						"refreshment": false,
						"power_outlets": true,
						"tv": false,
						"bus_attendant": false,
						"leg_room": false
					},
					"available_seats": 55,
					"prices": {
						"total": 60,
						"breakdown": {
							"base": 5200
						},
						"categories": {},
						"discounted": false
					},
					"ticket_types": [
						"print"
					],
					"departure_timezone": "America/New_York",
					"arrival_timezone": "America/Montreal",
					"departure_time": "2016-01-14T05:00:00",
					"arrival_time": "2016-01-14T11:55:00"
				}
			],
			"complete": false,
			"ttl": 900,
			"is_valid_route": true
		};

    return mockData;

    // fetch(request, {mode: 'cors'})
    //     .then(result => console.log(result))
    //     .catch();
}