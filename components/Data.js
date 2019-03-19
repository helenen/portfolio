const fetchIntroduce = () =>
  fetch("http://localhost:1337/introduces")
    .then(response => response.json())
    .then(data => console.log(data));

export default fetchIntroduce;
