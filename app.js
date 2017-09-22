'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.d = document;
  }

  _createClass(Controller, [{
    key: 'addEvent',
    value: function addEvent(el, type, handler) {
      if (el.attachEvent) el.attachEvent('on' + type, handler);else el.addEventListener(type, handler);
    }
  }, {
    key: 'removeEvent',
    value: function removeEvent(el, type, handler) {
      if (el.detachEvent) el.detachEvent('on' + type, handler);else el.removeEventListener(type, handler);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(el, className) {
      return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(el, className) {
      if (this.hasClass(className)) return el.classList.remove(className);else return el.classList.add(className);
    }
  }, {
    key: 'actionButtonClick',
    value: function actionButtonClick(e) {
      var _this = this;

      e.preventDefault();
      if (this.hasClass(main.card, 'show-answer')) {
        main.front.classList.add('hide');
        main.back.classList.add('hide');
      }
      this.toggleClass(main.card, 'show-answer');
      setTimeout(function () {
        if (!_this.hasClass(main.card, 'show-answer')) {
          main.front.classList.remove('hide');
          main.back.classList.remove('hide');
          return true;
        }
      }, 250);
    }
  }]);

  return Controller;
}();

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this.con = new Controller();
    this.running = false;

    this.actionBtn = document.getElementById('actionBtn');
    this.card = document.getElementById('card');
    this.front = document.getElementById('front');
    this.back = document.getElementById('back');

    this.startTest();
  }

  _createClass(Main, [{
    key: 'startTest',
    value: function startTest() {
      while (this.running) {
        this.nextQuestion();
      }
    }
  }, {
    key: 'nextQuestion',
    value: function nextQuestion() {
      var qORa = Math.round(Math.random());
      var which = Math.round(Math.random() * (vocab.length - 1));

      this.running = false;
      if (qORa) {
        this.front.innerText = 'Q: ' + vocab[which]['french'];
        this.front.classList.remove('e');
        this.front.classList.add('f');
        this.back.innerText = 'A: ' + vocab[which]['english'];
        this.back.classList.remove('f');
        this.back.classList.add('e');
      } else {
        this.front.innerText = 'Q: ' + vocab[which]['english'];
        this.front.classList.remove('f');
        this.front.classList.add('e');
        this.back.innerText = 'A: ' + vocab[which]['french'];
        this.back.classList.remove('e');
        this.back.classList.add('f');
      }
    }
  }]);

  return Main;
}();

var main = new Main();
(function () {
  main.con.addEvent(main.actionBtn, 'click', function (e) {
    main.running = main.con.actionButtonClick(e);
  });
})();

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

var vocab = [
// Nouns
{
  'english': 'boy',
  'french': 'garçon',
  'pos': 'noun'
}, {
  'english': 'desk',
  'french': 'le bureau',
  'pos': 'noun'
}, {
  'english': 'soccer',
  'french': 'le football',
  'pos': 'noun'
}, {
  'english': 'museum',
  'french': 'le musée',
  'pos': 'noun'
}, {
  'english': 'shop',
  'french': 'la boutique',
  'pos': 'noun'
}, {
  'english': 'secretary',
  'french': 'le secrétaire / la secrétaire',
  'pos': 'noun'
}, {
  'english': 'shame',
  'french': 'la honte',
  'pos': 'noun'
}, {
  'english': 'time',
  'french': 'la fois',
  'pos': 'noun'
}, {
  'english': 'shoe',
  'french': 'la chaussure',
  'pos': 'noun'
}, {
  'english': 'factory',
  'french': 'l\'usine',
  'pos': 'noun'
}, {
  'english': 'guard / watchman',
  'french': 'la sentinelle',
  'pos': 'noun'
}, {
  'english': 'living room',
  'french': 'la salon',
  'pos': 'noun'
}, {
  'english': 'heat / warmth',
  'french': 'la chaleur',
  'pos': 'noun'
}, {
  'english': 'pencil',
  'french': 'le crayon',
  'pos': 'noun'
}, {
  'english': 'year',
  'french': 'l\'année',
  'pos': 'noun'
}, {
  'english': 'exercise',
  'french': 'le exercice',
  'pos': 'noun'
}, {
  'english': 'bag',
  'french': 'le sac',
  'pos': 'noun'
}, {
  'english': 'sweater',
  'french': 'le pullover',
  'pos': 'noun'
}, {
  'english': 'coat',
  'french': 'le manteau',
  'pos': 'noun'
}, {
  'english': 'story / history',
  'french': 'l\'histoire',
  'pos': 'noun'
}, {
  'english': 'ant',
  'french': 'la fourmi',
  'pos': 'noun'
}, {
  'english': 'forest',
  'french': 'la forêt',
  'pos': 'noun'
}, {
  'english': 'man',
  'french': 'l\'homme',
  'pos': 'noun'
}, {
  'english': 'hotel',
  'french': 'l\'hôtel',
  'pos': 'noun'
}, {
  'english': 'island',
  'french': 'l\'île',
  'pos': 'noun'
}, {
  'english': 'orange',
  'french': 'l\'orange',
  'pos': 'noun'
}, {
  'english': 'girl',
  'french': 'la fille',
  'pos': 'noun'
}, {
  'english': 'tourist',
  'french': 'le touriste / la touriste',
  'pos': 'noun'
}, {
  'english': 'car',
  'french': 'la voiture',
  'pos': 'noun'
}, {
  'english': 'American',
  'french': 'l\'Américaine',
  'pos': 'noun'
}, {
  'english': 'table',
  'french': 'la table',
  'pos': 'noun'
}, {
  'english': 'wine',
  'french': 'le vin',
  'pos': 'noun'
}, {
  'english': 'dog',
  'french': 'le chien',
  'pos': 'noun'
}, {
  'english': 'water',
  'french': 'l\'eau',
  'pos': 'noun'
}, {
  'english': 'woman',
  'french': 'la femme',
  'pos': 'noun'
}, {
  'english': 'hat',
  'french': 'le chapeau',
  'pos': 'noun'
}, {
  'english': 'radio',
  'french': 'la radio',
  'pos': 'noun'
}, {
  'english': 'preference',
  'french': 'le préférence',
  'pos': 'noun'
}, {
  'english': 'city',
  'french': 'la ville',
  'pos': 'noun'
}, {
  'english': 'pianist',
  'french': 'le pianiste',
  'pos': 'noun'
}, {
  'english': 'sister',
  'french': 'la sœur',
  'pos': 'noun'
},
// Pronouns
{
  'english': 'I',
  'french': 'je',
  'pos': 'pronoun'
}, {
  'english': 'you (singular, informal)',
  'french': 'tu',
  'pos': 'pronoun'
}, {
  'english': 'he',
  'french': 'il',
  'pos': 'pronoun'
}, {
  'english': 'she',
  'french': 'elle',
  'pos': 'pronoun'
}, {
  'english': 'we',
  'french': 'nous',
  'pos': 'pronoun'
}, {
  'english': 'you (plural)',
  'french': 'vous',
  'pos': 'pronoun'
}, {
  'english': 'you (singular, formal)',
  'french': 'vous',
  'pos': 'pronoun'
}, {
  'english': 'they (masculine)',
  'french': 'ils',
  'pos': 'pronoun'
}, {
  'english': 'they (feminine)',
  'french': 'elles',
  'pos': 'pronoun'
},
// Adjectives
{
  'english': 'proud',
  'french': 'fier / fiére',
  'pos': 'adjective'
},
// Verbs
{
  'english': 'to be',
  'french': 'être',
  'pos': 'verb'
},
// Adverbs

// Conjunctions
{
  'english': 'but',
  'french': 'mais',
  'pos': 'conjunction'
}, {
  'english': 'and',
  'french': 'et',
  'pos': 'conjunction'
}, {
  'english': 'also / too',
  'french': 'aussi',
  'pos': 'conjunction'
}, {
  'english': 'or',
  'french': 'ou',
  'pos': 'conjunction'
}, {
  'english': 'if',
  'french': 'si',
  'pos': 'conjunction'
}, {
  'english': 'therefore / so',
  'french': 'donc',
  'pos': 'conjunction'
},
// Prepositions
{
  'english': 'at / to',
  'french': 'au / à (la)',
  'pos': 'preposition'
}, {
  'english': 'over there',
  'french': 'là-bas',
  'pos': 'preposition'
}, {
  'english': 'from / of',
  'french': 'du, de (la)',
  'pos': 'preposition'
}, {
  'english': 'in front of',
  'french': 'devant',
  'pos': 'preposition'
}, {
  'english': 'on (top of)',
  'french': 'sur',
  'pos': 'preposition'
}, {
  'english': 'in / into / inside',
  'french': 'dans',
  'pos': 'preposition'
}, {
  'english': 'in',
  'french': 'en',
  'pos': 'preposition'
}];