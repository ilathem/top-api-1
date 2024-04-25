import './index.css';
import whoops from "../src/too_many_requests.png"

document
  .querySelector('button')
  .addEventListener('click', () => fetchAnImage());

const fetchAnImage = () => {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=984QnTym9Qxyr6BerKBTItNptXmUaj2i&s=cats',
    {
      mode: 'cors',
    }
  )
  .then((res) => res.json())
  .then((json) => (document.querySelector('img').src = json.data.images.original.url))
  .catch(() => (document.querySelector('img').src = whoops))
};
