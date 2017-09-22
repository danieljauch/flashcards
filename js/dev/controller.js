class Controller {
  constructor () {
    this.d = document;
  }

  addEvent (el, type, handler) {
    if (el.attachEvent)
      el.attachEvent(`on${type}`, handler);
    else
      el.addEventListener(type, handler);
  }
  removeEvent (el, type, handler) {
    if (el.detachEvent)
      el.detachEvent(`on${type}`, handler);
    else
      el.removeEventListener(type, handler);
  }
  hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp(`\\b ${className}\\b`).test(el.className);
  }
  toggleClass(el, className) {
    if (this.hasClass(el, className))
      el.classList.remove(className)
    else
      el.classList.add(className)
  }

  actionButtonClick (e) {
    e.preventDefault();
    if (this.hasClass(main.card, 'show-answer')) {
      main.front.classList.add('hide');
      main.back.classList.add('hide');
    }
    this.toggleClass(main.card, 'show-answer');
    setTimeout(() => {
      if (!this.hasClass(main.card, 'show-answer')) {
        main.front.classList.remove('hide');
        main.back.classList.remove('hide');
        main.nextQuestion();
      }
    }, 250);
  }
}
