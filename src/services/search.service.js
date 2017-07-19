import moment from 'moment'

export default function search() {
    let date = moment('2017-07-29').format('YYYY-MM-DD'),
        request = new Request('https://napi.busbud.com/x-departures/dr5reg/f25dvk/' + date, {
            headers: new Headers({
                'Accept': 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
                'Content-Type': 'text/plain; charset=utf-8',
				'X-Busbud-Token': 'PARTNER_JSWsVZQcS_KzxNRzGtIt1A',
				'User-Agent': 'Mauricio\'s Challenge/2.0'
            })
        });

     return fetch(request);
}