const main = new Main();
(() => {
  main.con.addEvent(main.actionBtn, 'click', e => {
    main.running = main.con.actionButtonClick(e);
  });
})();
