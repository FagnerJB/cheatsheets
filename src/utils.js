const isMetaArray = (meta) => ['Categories', 'Related'].includes(meta.trim())

const parseMetas = (metaString) => {
   const metas = metaString.trim().split(',')
   return metas.map((meta) => meta.trim())
}

const parseContentToJson = (name, data) => {
   let metas = []
   let insideMetas = false
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
      }

      if (line.startsWith('#')) {
         currentHead = content.push({
            heading: line.replaceAll('#', '').trim(),
            level: line.split('#').length - 1,
            content: [],
         })
         return
      }

      if (!!currentHead) {
         content[currentHead - 1].content.push(line)
      }
   })

   return { name, metas, content }
}

module.exports = { parseContentToJson }
