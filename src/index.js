import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap } from 'rxjs/operators';

const inputEl = document.createElement('input');
inputEl.placeholder = 'Type something to search...';
document.body.appendChild(inputEl);
const divWrapper = document.createElement('div');
document.body.appendChild(divWrapper);

// Rxjs поток
const inputElChange$ = fromEvent(inputEl, 'input');

inputElChange$.pipe(
  map((o) => o.target.value),
  filter((o) => o.trim !== ''),
  debounceTime(100),
  map((o) => new URLSearchParams({q: o})),  
  switchMap((o) => ajax.getJSON(`http://localhost:7070/api/search?${o}`))
).subscribe({
  next: (value) => {
    console.log('EVent');
    if (!inputEl.value.trim().length) {
      value = [];
    }
    fnList(value);
  },
  error: (error) => console.log('error', error),
  complete: () => console.log('complete')
})
//===

// Прорисовка результата запроса
function fnList(arr) {
  divWrapper.innerHTML='';
  arr.forEach((item) => {
    divWrapper.insertAdjacentHTML('beforeend', `<p>${item.name}</p>`);
  })
}
