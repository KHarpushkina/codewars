function findNum(note) {
  const clearNote = note.toLowerCase().replace(/[^a-z]+/g, "");
  const numbersDictionary = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  for (let i = 0; i < numbersDictionary.length; i++) {
      if (clearNote.includes(numbersDictionary[i])) {
          return i + 1;
      }    
  }
  return 0;
}
console.log(findNum("It's always worth looking after your friends, even if they've upset you."));
