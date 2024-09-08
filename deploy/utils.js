const fs = require('fs')
const { resolve } = require('path')

const readdir = fs.readdirSync
const readFile = fs.readFileSync
const makeDir = (path) => {
   if (!fs.existsSync(path)) {
      fs.mkdirSync(path)
   }
}
const writeFile = (path, content) => {
   fs.writeFile(path, JSON.stringify(content), { flag: 'w+' }, (error) => {
      if (error) {
         console.error(error)
      }
   })
}

const isMetaArray = (meta) => ['Categories', 'Related'].includes(meta.trim())

const isFileOrFolder = (paths) => {
   const currentItem = resolve(...paths)

   if (cleanFilename(currentItem).startsWith('_')) {
      return false
   }

   let type = cleanFilename(currentItem)
   if (currentItem.endsWith('.md')) {
      return { [type]: parseContentToJson(currentItem) }
   } else {
      const files = readdir(currentItem)

      const currentArticle = []
      files.forEach((file) => {
         const rendered = isFileOrFolder([...paths, file])
         if (rendered) {
            currentArticle.push(rendered)
         }
      })

      return { [type]: currentArticle }
   }
}

const cleanFilename = (filepath) => {
   const parts = filepath.split('/')
   const name = parts[parts.length - 1]
   return name.replace('.md', '')
}

const parseMetas = (metaString) => {
   const metas = metaString.trim().split(',')
   return metas.map((meta) => meta.trim())
}

const parseContentToJson = (filepath) => {
   const name = cleanFilename(filepath)
   const data = readFile(filepath, 'utf8')
   let metas = []
   let insideMetas = false
   let title = ''
   let content = []
   let currentHead = 0

   data.split('\n').map((line) => {
      if (0 === line.length) {
         return
      }

      if ('---' === line) {
         insideMetas = !insideMetas
         return
      }

      if (insideMetas) {
         let meta = line.split(':')

         metas.push({
            name: meta[0].trim(),
            value: isMetaArray(meta[0]) ? parseMetas(meta[1]) : meta[1].trim(),
         })
         return
      }

      if (line.startsWith('# ')) {
         title = line.replaceAll('#', '').trim()
         return
      }

      content.push(line)
   })

   content = content.join('\n')

   return { name, metas, title, content }
}

module.exports = {
   cleanFilename,
   readdir,
   writeFile,
   makeDir,
   isFileOrFolder,
}
