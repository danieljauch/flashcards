class Main {
  constructor () {
    this.con = new Controller();

    this.actionBtn = document.getElementById('actionBtn');
    this.card = document.getElementById('card');
    this.front = document.getElementById('front');
    this.back = document.getElementById('back');

    this.nextQuestion();
  }

  nextQuestion() {
    let qORa = Math.round(Math.random());
    let which = Math.round(Math.random() * (vocab.length - 1));

    this.running = false;
    if (qORa) {
      this.front.innerText = `Q: ${vocab[which]['french']}`;
      this.front.classList.remove('e');
      this.front.classList.add('f');
      this.back.innerText = `A: ${vocab[which]['english']}`;
      this.back.classList.remove('f');
      this.back.classList.add('e');
    } else {
      this.front.innerText = `Q: ${vocab[which]['english']}`;
      this.front.classList.remove('f');
      this.front.classList.add('e');
      this.back.innerText = `A: ${vocab[which]['french']}`;
      this.back.classList.remove('e');
      this.back.classList.add('f');
    }
  }
}
