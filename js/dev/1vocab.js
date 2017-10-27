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

const vocab = [
// Nouns
{
  english: 'boy',
  french: 'garçon',
  pos: 'noun'
},{
  english: 'desk',
  french: 'le bureau',
  pos: 'noun'
},{
  english: 'soccer',
  french: 'le football',
  pos: 'noun'
},{
  english: 'museum',
  french: 'le musée',
  pos: 'noun'
},{
  english: 'shop',
  french: 'la boutique',
  pos: 'noun'
},{
  english: 'secretary',
  french: 'le secrétaire / la secrétaire',
  pos: 'noun'
},{
  english: 'shame',
  french: 'la honte',
  pos: 'noun'
},{
  english: 'time',
  french: 'la fois',
  pos: 'noun'
},{
  english: 'shoe',
  french: 'la chaussure',
  pos: 'noun'
},{
  english: 'factory',
  french: 'l\'usine',
  pos: 'noun'
},{
  english: 'guard / watchman',
  french: 'la sentinelle',
  pos: 'noun'
},{
  english: 'living room',
  french: 'la salon',
  pos: 'noun'
},{
  english: 'heat / warmth',
  french: 'la chaleur',
  pos: 'noun'
},{
  english: 'pencil',
  french: 'le crayon',
  pos: 'noun'
},{
  english: 'year',
  french: 'l\'année',
  pos: 'noun'
},{
  english: 'exercise',
  french: 'le exercice',
  pos: 'noun'
},{
  english: 'bag',
  french: 'le sac',
  pos: 'noun'
},{
  english: 'sweater',
  french: 'le pullover',
  pos: 'noun'
},{
  english: 'coat',
  french: 'le manteau',
  pos: 'noun'
},{
  english: 'story / history',
  french: 'l\'histoire',
  pos: 'noun'
},{
  english: 'ant',
  french: 'la fourmi',
  pos: 'noun'
},{
  english: 'forest',
  french: 'la forêt',
  pos: 'noun'
},{
  english: 'man',
  french: 'l\'homme',
  pos: 'noun'
},{
  english: 'hotel',
  french: 'l\'hôtel',
  pos: 'noun'
},{
  english: 'island',
  french: 'l\'île',
  pos: 'noun'
},{
  english: 'orange',
  french: 'l\'orange',
  pos: 'noun'
},{
  english: 'girl',
  french: 'la fille',
  pos: 'noun'
},{
  english: 'tourist',
  french: 'le touriste / la touriste',
  pos: 'noun'
},{
  english: 'car',
  french: 'la voiture',
  pos: 'noun'
},{
  english: 'American',
  french: 'l\'Américaine',
  pos: 'noun'
},{
  english: 'table',
  french: 'la table',
  pos: 'noun'
},{
  english: 'wine',
  french: 'le vin',
  pos: 'noun'
},{
  english: 'dog',
  french: 'le chien',
  pos: 'noun'
},{
  english: 'water',
  french: 'l\'eau',
  pos: 'noun'
},{
  english: 'woman',
  french: 'la femme',
  pos: 'noun'
},{
  english: 'hat',
  french: 'le chapeau',
  pos: 'noun'
},{
  english: 'radio',
  french: 'la radio',
  pos: 'noun'
},{
  english: 'preference',
  french: 'le préférence',
  pos: 'noun'
},{
  english: 'city',
  french: 'la ville',
  pos: 'noun'
},{
  english: 'pianist',
  french: 'le pianiste',
  pos: 'noun'
},{
  english: 'sister',
  french: 'la sœur',
  pos: 'noun'
},{
  english: 'flower',
  french: 'la fleur',
  pos: 'noun'
},{
  english: 'cross',
  french: 'la croix',
  pos: 'noun'
},{
  english: 'cat',
  french: 'le chat',
  pos: 'noun'
},{
  english: 'night',
  french: 'la nuit',
  pos: 'noun'
},{
  english: 'course / class',
  french: 'le cours',
  pos: 'noun'
},{
  english: 'hand',
  french: 'la main',
  pos: 'noun'
},{
  english: 'friend',
  french: 'l\'ami(e)',
  pos: 'noun'
},{
  english: 'boy',
  french: 'le garçon',
  pos: 'noun'
},{
  english: 'author',
  french: 'l\'auteur',
  pos: 'noun'
},{
  english: 'library',
  french: 'la bibliothèque',
  pos: 'noun'
},{
  english: 'architect',
  french: 'l\'architecte',
  pos: 'noun'
},{
  english: 'hero',
  french: 'le héros',
  pos: 'noun'
},{
  english: 'dictionary',
  french: 'le dictionnaire',
  pos: 'noun'
},{
  english: 'person',
  french: 'la personne',
  pos: 'noun'
},{
  english: 'brother',
  french: 'le frère',
  pos: 'noun'
},{
  english: 'shirt',
  french: 'la chemise',
  pos: 'noun'
},{
  english: 'choice',
  french: 'le choix',
  pos: 'noun'
},{
  english: 'appetizer',
  french: 'le hours-d\'œuvre',
  pos: 'noun'
},{
  english: 'cinema / theater',
  french: 'le cinéma',
  pos: 'noun'
},{
  english: 'child',
  french: 'l\'enfant',
  pos: 'noun'
},{
  english: 'bus',
  french: 'le autobus',
  pos: 'noun'
},{
  english: 'bank',
  french: 'la banque',
  pos: 'noun'
},{
  english: 'lamp',
  french: 'la lampe',
  pos: 'noun'
},{
  english: 'engineer',
  french: 'l\'ingénieur',
  pos: 'noun'
},{
  english: 'writer',
  french: 'l\'écrivain',
  pos: 'noun'
},{
  english: 'university',
  french: 'l\'université',
  pos: 'noun'
},{
  english: 'doctor',
  french: 'le médecin',
  pos: 'noun'
},{
  english: 'heroine',
  french: 'la héroïne',
  pos: 'noun'
},{
  english: 'student',
  french: 'l\'etudiante',
  pos: 'noun'
},{
  english: 'middle',
  french: 'le milieu',
  pos: 'noun'
},{
  english: 'journalist',
  french: 'le journaliste',
  pos: 'noun'
},{
  english: 'teacher / professor',
  french: 'le professeur',
  pos: 'noun'
},{
  english: 'lesson',
  french: 'la leçon',
  pos: 'noun'
},{
  english: 'victim',
  french: 'la victime',
  pos: 'noun'
},{
  english: 'hospital',
  french: 'le hôpital',
  pos: 'noun'
},{
  english: 'work',
  french: 'le travail',
  pos: 'noun'
},{
  english: 'english',
  french: 'l\'anglais',
  pos: 'noun'
},{
  english: 'telephone',
  french: 'le téléphone',
  pos: 'noun'
},{
  english: 'energy',
  french: 'l\'énergie',
  pos: 'noun'
},{
  english: 'ticket',
  french: 'le billet',
  pos: 'noun'
},{
  english: 'harp',
  french: 'la harpe',
  pos: 'noun'
},{
  english: 'amusement',
  french: 'la distraction',
  pos: 'noun'
},{
  english: 'garden',
  french: 'le jardin',
  pos: 'noun'
},{
  english: 'book',
  french: 'le livre',
  pos: 'noun'
},{
  english: 'language',
  french: 'la langue',
  pos: 'noun'
},{
  english: 'suitcase',
  french: 'la valise',
  pos: 'noun'
},{
  english: 'chair',
  french: 'la chaise',
  pos: 'noun'
},{
  english: 'notebook',
  french: 'le cahier',
  pos: 'noun'
},{
  english: 'neighborhood',
  french: 'le quartier',
  pos: 'noun'
},{
  english: 'skin',
  french: 'la peau',
  pos: 'noun'
},{
  english: 'house',
  french: 'la maison',
  pos: 'noun'
},{
  english: 'place',
  french: 'le lieu',
  pos: 'noun'
},{
  english: 'mom',
  french: 'la mère',
  pos: 'noun'
},{
  english: 'bookstore',
  french: 'la librairie',
  pos: 'noun'
},{
  english: 'job',
  french: 'l\'emploi',
  pos: 'noun'
},{
  english: 'nose',
  french: 'le nez',
  pos: 'noun'
},{
  english: 'page',
  french: 'la page',
  pos: 'noun'
},
// Pronouns
{
  english: 'I',
  french: 'je',
  pos: 'pronoun'
},{
  english: 'you (singular, informal)',
  french: 'tu',
  pos: 'pronoun'
},{
  english: 'he',
  french: 'il',
  pos: 'pronoun'
},{
  english: 'she',
  french: 'elle',
  pos: 'pronoun'
},{
  english: 'we',
  french: 'nous',
  pos: 'pronoun'
},{
  english: 'you (plural)',
  french: 'vous',
  pos: 'pronoun'
},{
  english: 'you (singular, formal)',
  french: 'vous',
  pos: 'pronoun'
},{
  english: 'they (masculine)',
  french: 'ils',
  pos: 'pronoun'
},{
  english: 'they (feminine)',
  french: 'elles',
  pos: 'pronoun'
},
// Adjectives
{
  english: 'proud',
  french: 'fier / fiére',
  pos: 'adjective'
},{
  english: 'stingy',
  french: 'avare',
  pos: 'adjective'
},{
  english: 'expensive',
  french: 'cher / chère',
  pos: 'adjective'
},{
  english: 'orange',
  french: 'orange',
  pos: 'adjective'
},{
  english: 'brown',
  french: 'marron',
  pos: 'adjective'
},{
  english: 'yellow',
  french: 'jaune',
  pos: 'adjective'
},{
  english: 'pink',
  french: 'rose',
  pos: 'adjective'
},{
  english: 'purple',
  french: 'violet / violette',
  pos: 'adjective'
},{
  english: 'gray',
  french: 'gris',
  pos: 'adjective'
},{
  english: 'red',
  french: 'rouge',
  pos: 'adjective'
},{
  english: 'white',
  french: 'blanc / blanche',
  pos: 'adjective'
},{
  english: 'blue',
  french: 'bleu / bleue',
  pos: 'adjective'
},{
  english: 'green',
  french: 'vert / verte',
  pos: 'adjective'
},{
  english: 'black',
  french: 'noir',
  pos: 'adjective'
},{
  english: 'pessimistic',
  french: 'pessimiste',
  pos: 'adjective'
},{
  english: 'interesting',
  french: 'intéressant',
  pos: 'adjective'
},{
  english: 'practical',
  french: 'practique',
  pos: 'adjective'
},{
  english: 'conspiratorial',
  french: 'conspirateur / conspiratrice',
  pos: 'adjective'
},{
  english: 'poor',
  french: 'pauvre',
  pos: 'adjective'
},{
  english: 'final',
  french: 'dernier / dernière',
  pos: 'adjective'
},{
  english: 'old / former',
  french: 'ancien / ancienne',
  pos: 'adjective'
},{
  english: 'old (age)',
  french: 'vieux / vieille / vieil',
  pos: 'adjective'
},{
  english: 'beautiful / handsome',
  french: 'beau / belle / bel',
  pos: 'adjective'
},{
  english: 'new',
  french: 'nouveau / nouvelle / nouvel',
  pos: 'adjective'
},{
  english: 'small / short',
  french: 'petit / petite',
  pos: 'adjective'
},{
  english: 'young',
  french: 'jeune',
  pos: 'adjective'
},{
  english: 'big / tall',
  french: 'grand / grande',
  pos: 'adjective'
},{
  english: 'bad',
  french: 'mauvais / mauvaise',
  pos: 'adjective'
},{
  english: 'pretty',
  french: 'joli / jolie',
  pos: 'adjective'
},{
  english: 'good',
  french: 'bon / bonne',
  pos: 'adjective'
},{
  english: 'other',
  french: 'autre',
  pos: 'adjective'
},{
  english: 'courageous',
  french: 'courageux / courageuse',
  pos: 'adjective'
},{
  english: 'boring',
  french: 'ennuyeux / ennuyeuse',
  pos: 'adjective'
},{
  english: 'nice',
  french: 'gentil / gentille',
  pos: 'adjective'
},{
  english: 'hardworking',
  french: 'travailleur / travailleuse',
  pos: 'adjective'
},{
  english: 'serious',
  french: 'sérieux / sérieuse',
  pos: 'adjective'
},{
  english: 'athletic',
  french: 'sportif / sportive',
  pos: 'adjective'
},{
  english: 'generous',
  french: 'généreux',
  pos: 'adjective'
},{
  english: 'extraordinary',
  french: 'extraordinaire',
  pos: 'adjective'
},{
  english: 'optimistic',
  french: 'optimiste',
  pos: 'adjective'
},{
  english: 'inexpensive',
  french: 'bon marché',
  pos: 'adjective'
},{
  english: 'sorry',
  french: 'désolé / désolée',
  pos: 'adjective'
},{
  english: 'difficult',
  french: 'difficile',
  pos: 'adjective'
},{
  english: 'funny',
  french: 'drôle',
  pos: 'adjective'
},{
  english: 'intelligent',
  french: 'intelligent',
  pos: 'adjective'
},{
  english: 'sincere',
  french: 'sincère',
  pos: 'adjective'
},{
  english: 'conservative',
  french: 'conservateur / conservatrice',
  pos: 'adjective'
},{
  english: 'sturdy',
  french: 'costaud / costaude',
  pos: 'adjective'
},{
  english: 'lazy',
  french: 'paresseux / paresseuse',
  pos: 'adjective'
},{
  english: 'pleasant',
  french: 'agréable',
  pos: 'adjective'
},{
  english: 'same',
  french: 'même',
  pos: 'adjective'
},{
  english: 'fat / big',
  french: 'gros / grosse',
  pos: 'adjective'
},{
  english: 'happy / content',
  french: 'content / contente',
  pos: 'adjective'
},{
  english: 'natural',
  french: 'naturel / naturelle',
  pos: 'adjective'
},{
  english: 'naïve',
  french: 'naïf / naïve',
  pos: 'adjective'
},
// Verbs
{
  english: 'to be',
  french: 'être',
  pos: 'verb'
},
// Adverbs
{
  english: 'fairly / rather',
  french: 'assez / plutôt',
  pos: 'adverb'
},{
  english: 'enough (of)',
  french: 'assez (de)',
  pos: 'adverb'
},{
  english: 'often',
  french: 'souvent',
  pos: 'adverb'
},{
  english: 'now',
  french: 'maintenant',
  pos: 'adverb'
},{
  english: 'here',
  french: 'ici',
  pos: 'adverb'
},{
  english: 'how',
  french: 'comment',
  pos: 'adverb'
},{
  english: 'hardly / not very',
  french: 'peu',
  pos: 'adverb'
},{
  english: 'a little (of)',
  french: 'un peu (de)',
  pos: 'adverb'
},{
  english: 'always',
  french: 'toujours',
  pos: 'adverb'
},{
  english: 'too (much, many)',
  french: 'trop (de)',
  pos: 'adverb'
},{
  english: 'very',
  french: 'très',
  pos: 'adverb'
},{
  english: 'sometimes',
  french: 'quelquefois / parfois',
  pos: 'adverb'
},{
  english: 'much / many',
  french: 'beaucoup',
  pos: 'adverb'
},{
  english: 'rarely',
  french: 'rarement',
  pos: 'adverb'
},{
  english: 'today',
  french: 'aujourd\'hui',
  pos: 'adverb'
},{
  english: 'well',
  french: 'bien',
  pos: 'adverb'
},
// Conjunctions
{
  english: 'but',
  french: 'mais',
  pos: 'conjunction'
},{
  english: 'and',
  french: 'et',
  pos: 'conjunction'
},{
  english: 'also / too',
  french: 'aussi',
  pos: 'conjunction'
},{
  english: 'or',
  french: 'ou',
  pos: 'conjunction'
},{
  english: 'if',
  french: 'si',
  pos: 'conjunction'
},{
  english: 'therefore / so',
  french: 'donc',
  pos: 'conjunction'
},
// Prepositions
{
  english: 'at / to',
  french: 'au / à (la)',
  pos: 'preposition'
},{
  english: 'over there',
  french: 'là-bas',
  pos: 'preposition'
},{
  english: 'from / of',
  french: 'du, de (la)',
  pos: 'preposition'
},{
  english: 'in front of',
  french: 'devant',
  pos: 'preposition'
},{
  english: 'on (top of)',
  french: 'sur',
  pos: 'preposition'
},{
  english: 'in / into / inside',
  french: 'dans',
  pos: 'preposition'
},{
  english: 'in',
  french: 'en',
  pos: 'preposition'
}];
