const { resolve } = require('path')
const fs = require('fs')
const { readdir, readFile } = require('node:fs/promises')
const { parseContentToJson } = require('./utils')

const buildHtmlDocs = async () => {
   const allTags = []
   const allAttributes = {}
   const filesAttributes = await readdir(resolve('docs', 'html', 'attributes'))

   await Promise.all(
      filesAttributes.map(async (file) => {
         if (file.startsWith('_')) {
            return
         }

         const content = await readFile(
            resolve('docs', 'html', 'attributes', file),
            'utf8'
         )

         const name = file.replace('.md', '')
         allAttributes[name] = parseContentToJson(name, content)
      })
   )

   const filesTags = await readdir(resolve('docs', 'html', 'tags'))

   await Promise.all(
      filesTags.map(async (file) => {
         if (file.startsWith('_')) {
            return
         }

         const content = await readFile(
            resolve('docs', 'html', 'tags', file),
            'utf8'
         )

         allTags.push(parseContentToJson(file.replace('.md', ''), content))
      })
   )

   if (!fs.existsSync(resolve('dist'))) {
      fs.mkdirSync(resolve('dist'))
   }

   fs.writeFile(
      resolve('dist', 'html.json'),
      JSON.stringify({
         tags: allTags,
         attributes: allAttributes,
      }),
      { flag: 'w+' },
      (error) => {
         if (error) {
            console.error(error)
         }
      }
   )
}

module.exports = { buildHtmlDocs }
