const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const splitSentences = tutorials.map((tutorials) => tutorials.split(" "))

  const capitalizeSplitSentences = splitSentences.map(tutorials => tutorials.map((word) => word.charAt(0).toUpperCase() + word.slice(1)))

  const joinedCapitalizedSplitSentences = capitalizeSplitSentences.map((sentences) => sentences.join(" "))

  return joinedCapitalizedSplitSentences
}

// const splitSentences = tutorials.map((tutorials) => tutorials.split(" "))

// console.log(splitSentences)

// const capitalizeSplitSentences = splitSentences.map(tutorials => tutorials.map((word) => word.charAt(0).toUpperCase() + word.slice(1)))

// console.log(capitalizeSplitSentences)

// const joinedCapitalizedSplitSentences = capitalizeSplitSentences.map((sentences) => sentences.join(" "))

console.log(joinedCapitalizedSplitSentences)