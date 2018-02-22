export function fisherYates(arr, nb_picks) {
  for (let i = arr.length - 1; i > 1; i--) {
    var r = Math.floor(Math.random() * i);
    var t = arr[i];
    arr[i] = arr[r];
    arr[r] = t;
  }

  var test = arr.slice(0, nb_picks);
  console.log(test);
  return test;
}
