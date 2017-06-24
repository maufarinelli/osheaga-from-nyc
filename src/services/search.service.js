export default function search() {
    var date = new Date(2017, 6, 29),
        request = new Request('https://napi.busbud.com/x-departures/dr5reg/f25dvk/' + date.toISOString(), {
            headers: new Headers({
                'Accept': 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
                'Content-Type': 'text/plain; charset=utf-8'
            })
        });

    fetch(request, {mode: 'cors'})
        .then(result => console.log(result))
        .catch();
}