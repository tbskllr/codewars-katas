function songDecoder(song) {
  var a = song.split("WUB");
  for (var i = a.length; i >= 0; i--) {
    if (a[i] === "") {
      a.splice(i, 1);
    }
  }
  return a.join(" ");
}
