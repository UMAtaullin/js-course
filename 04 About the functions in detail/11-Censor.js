/**
 * Создает функцию, которая принимает опционально 1 или 2 параметра:
 * если 2 - ничего не возвращает, а сохраняет пару как массив
 * если 1 - возвращает полученную строку, заменив все слова, согласно ранее сохраненным парам
 * @param {string}
 * @returns {function}
 */
function censor() {
  const pairs = [] // [['as', 'sd'], ['dd', dfd']]
  function doReplace (str1, str2 = '') {
    if (str2) {
      pairs.push([str1, str2])
    } else {
      for (let pair of pairs) {
        str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
      }
      return str1
    }
  }
  return doReplace
}




const changeScene = censor()

changeScene('PHP', 'JS')

changeScene('backend', 'frontend')

console.log(changeScene('PHP is the most popular programming language for backend web-development')) // должно распечатать 'JS is the most popular programming language for frontend web-development'

