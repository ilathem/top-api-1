import "./index.css";

const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=984QnTym9Qxyr6BerKBTItNptXmUaj2i&s=cats",
  {
    mode: "cors",
  },
)
  .then((res) => res.json())
  .then((json) => img.src = json.data.images.original.url);
