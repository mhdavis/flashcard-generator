function ClozeCard (text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.partial = partial();
}

ClozeCard.prototype.partial = function () {
  let sent = this.text;
  let arr = sent.split(" ");
  let index = arr.indexOf(this.cloze);

  if (index < 0) {
    console.log("Error: " + this.cloze + " doesn't appear in " + this.text);
    return this.partial = undefined;
  } else {
    arr[index] = "...";
    let part = arr.join(" ");
    return this.partial = part;
  }
}

let test = new ClozeCard("George Washington was the first president", "George Washington");

console.log("text: " + test.text);
console.log("cloze: " + test.cloze);
console.log("Partial: " + test.partial);

module.exports = ClozeCard;
