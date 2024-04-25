import './index.css';
import 'toastify-js/src/toastify.css';
import Toastify from 'toastify-js';
import whoops from '../src/too_many_requests.png';

document
  .querySelector('button')
  .addEventListener('click', () => fetchAnImage());

document.addEventListener('keyup', e => {
  if (e.key === 'Enter') fetchAnImage()
})

const fetchAnImage = () => {
  const query = document.querySelector('input').value;
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=984QnTym9Qxyr6BerKBTItNptXmUaj2i&s=${query}`,
    {
      mode: 'cors',
    }
  )
    .then((res) => res.json())
    .then((json) => {
      if (Array.isArray(json.data) && json.status === 200) {
        Toastify({
          text: 'Nothing found with that query! :(',
          style: {
            fontSize: '2rem',
          },
        }).showToast();
        document.querySelector('img').src =
          'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2Y4eTlqN3FiMG8zNnlzZWh1ZnV2dmNmMHhoeHI4OTZ1Y2pjMmFscyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UbolGJUaDcESozBrf9/giphy.gif';
      } else if (json.data) {
        document.querySelector('img').src = json.data.images.original.url;
      }
    })
    .catch(() => {
      document.querySelector('img').src = whoops;
      Toastify({
        text: 'Too many requests, wait a bit...?',
        style: {
          fontSize: '2rem',
        },
      }).showToast();
    });
};
