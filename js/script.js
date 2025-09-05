const apiKey = "815b2780d24f1bdac6207055973634387e3259ed076d29401e1ff69d";
const text = "Привет! Проверим этот текст через TextRazor.";

fetch("https://api.textrazor.com/", {
  method: "POST",
  headers: {
    "x-textrazor-key": apiKey,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: `text=${encodeURIComponent(text)}&extractors=entities,words,topics`
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err));
