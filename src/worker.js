onmessage = (e) => {
  console.log(e.data);
  postMessage("message received")
}