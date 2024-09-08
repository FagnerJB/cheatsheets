const { resolve } = require('path')
const {
   cleanFilename,
   readdir,
   makeDir,
   writeFile,
   isFileOrFolder,
} = require('./utils')

const buildHtmlDocs = () => {
   const folders = readdir(resolve('docs'))

   folders.map((file_or_folder) => {
      const currentJson = {}

      const keyName = cleanFilename(file_or_folder)
      const rendered = isFileOrFolder(['docs', file_or_folder])

      makeDir(resolve('web', 'dist'))
      writeFile(resolve('web', 'dist', keyName + '.json'), rendered)
   })
}

module.exports = { buildHtmlDocs }
