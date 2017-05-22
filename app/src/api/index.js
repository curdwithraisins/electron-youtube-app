import Rx from 'rxjs/Rx';
import { apiYouTube, key } from '../config'

export function VideoList ({ query = '', pageToken = '' }) {
  return Rx.Observable
    .fromPromise(fetch(`${apiYouTube}search?part=snippet&key=${key}&chart=mostPopular&pageToken=${pageToken}&maxResults=10&q=${query}`))
    .flatMap(res => Rx.Observable.fromPromise(res.json()))
  // .map(json => json.items)
}

export function Video (id) {
  return Rx.Observable
    .fromPromise(fetch(`${apiYouTube}videos?part=snippet&key=${key}&id=${id}`))
    .flatMap(res => Rx.Observable.fromPromise(res.json()))
  // .map(json => json.items)
}