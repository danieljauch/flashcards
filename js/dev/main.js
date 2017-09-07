// score? progress? correct / incorrect buttons and counts by word? Keep track of words used this session
$(document).ready(function () {
  nextQuestion();
  $('button').click(function (e) {
    e.preventDefault();
    if ($('.card').hasClass('show-answer')) {
      $('.q, .a').addClass('hide');
    }
    $('.card').toggleClass('show-answer');
    setTimeout(function () {
      if (!$('.card').hasClass('show-answer')) {
        nextQuestion();
        $('.q, .a').removeClass('hide');
      }
    }, 250);
  });
});

// needs part of speech, lesson limiters
var vocab = [{
    french: 'garçon',
    english: 'boy',
    pos: 'noun',
    danielScore: 0,
    linzyScore: 0,
    dateAdded: ''
  },{
    french: 'fier ♂ / fiére ♀',
    english: 'proud',
    pos: 'adjective',
    danielScore: 0,
    linzyScore: 0,
    dateAdded: ''
  },{
    french: 'to be',
    english: 'être',
    pos: 'verb',
    danielScore: 0,
    linzyScore: 0,
    dateAdded: ''
}];

function newTest() {

}
function nextQuestion() {
  var qORa = Math.round(Math.random()),
      which = Math.round(Math.random() * (vocab.length - 1));
  if (qORa) {
    $('.q').text("Q: " + vocab[which]["french"]).removeClass('e').addClass('f');
    $('.a').text("A: " + vocab[which]["english"]).removeClass('f').addClass('e');
  } else {
    $('.q').text("Q: " + vocab[which]["english"]).removeClass('f').addClass('e');
    $('.a').text("A: " + vocab[which]["french"]).removeClass('e').addClass('f');
  }
}

// http://sites.psu.edu/symbolcodes/windows/codealt/
/* - - - - - - - - - - - - - - - - - - - - - -+
 | À È Ì Ò Ù    | Grave Cap                   |
 | à è ì ò ù    | Grave Lower                 |
 | Á É Í Ó Ú Ý  | Acute Cap                   |
 | á é í ó ú ý  | Acute Lower                 |
 | Â Ê Î Ô Û    | Circumflex Cap              |
 | â ê î ô û    | Circumflex Lower            |
 | Ä Ë Ï Ö Ü Ÿ  | Umlaut Cap                  |
 | ä ë ï ö ü ÿ  | Umlaut Lower                |
 | Ç Œ Æ        | Cedille and Ligatures Cap   |
 | ç œ æ        | Cedille and Ligatures Lower |
 + - - - - - - - - - - - - - - - - - - - - - -+*/
