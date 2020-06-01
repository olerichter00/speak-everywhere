const { Translate } = require('@google-cloud/translate').v2
const fs = require('fs')

const translate = new Translate()

const TRANSLATION_FILE = './data/translation.json'

const vocabularies = {
  hello: 'Hello',
  thanks: 'Thank You',
  sorry: 'I’m Sorry',
  yes: 'Yes',
  no: 'No',
  'How are you?': 'How are you?',
  goodbye: 'Goodbye',
}

const translation = JSON.parse(fs.readFileSync(TRANSLATION_FILE))

translateAll()

async function translateAll() {
  console.log('START')

  const newTranslation = {}

  await asyncForEach(
    Object.keys(translation),
    async (language, index) => {
      const newTranslations = {}

      try {
        await asyncForEach(
          Object.keys(vocabularies),
          async vocabulary => {
            if (translation[language][vocabulary]) {
              newTranslations[vocabulary] = capitalize(
                translation[language][vocabulary],
              )
            } else {
              newTranslations[vocabulary] = await translateText(
                vocabularies[vocabulary],
                language,
              )
            }
          },
          {},
        )
      } catch (error) {
        console.error(`ERROR (language: ${language})`)
      } finally {
        console.log(`${index + 1}/${Object.keys(translation).length}`)
      }

      newTranslation[language] = {
        ...translation[language],
        ...newTranslations,
      }
    },
    {},
  )

  fs.writeFileSync(TRANSLATION_FILE, JSON.stringify(newTranslation))

  console.log('FINISHED')
}

async function translateText(text, target) {
  let [translations] = await translate.translate(text, target)

  translations = Array.isArray(translations) ? translations : [translations]

  translations.forEach((translation, i) => {
    console.log(`${target}: ${text} => ${translation}`)
  })

  return translations[0]
}

function capitalize(input) {
  return input.replace(/^\w/, c => c.toUpperCase())
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}
