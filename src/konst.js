import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap } from 'rxjs/operators';


const inputEl = document.createElement('input');
inputEl.placeholder = 'Type something to search...';
document.body.appendChild(inputEl);

const inputElChange$ = fromEvent(inputEl, 'input');
inputElChange$.pipe(
  map((o) => o.target.value),
  filter((o) => o.trim !== ''),
  debounceTime(100),
  map((o) => new URLSearchParams({q: o})),  
  switchMap((o) => ajax.getJSON(`http://localhost:7070/api/search?${o}`))
).subscribe({
  next: (value) => console.log('next', value),
  error: (error) => console.log('error', error),
  complete: () => console.log('complete')
})
