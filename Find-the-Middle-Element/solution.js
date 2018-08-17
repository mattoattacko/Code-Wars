var gimme = (inputArray) => {
  const sortTheArray = inputArray.slice().sort((a,b) => a - b);
  for (i in sortTheArray) {
    if (inputArray[i] === sortTheArray[1]) {
      return inputArray.indexOf(sortTheArray[1]);
    }}};