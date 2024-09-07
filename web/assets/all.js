document.addEventListener('alpine:init', () => {
   Alpine.data('main', () => ({
      isLoading: true,
      currentArticle: {
         title: 'Loading',
         content: '',
      },
      currentInput: '',
      currentSheet: 'all',
      currentFound: [],
      currentKeyFound: 0,
      content: [],
      sheets: [
         { href: '_index' },
         { href: 'html', title: 'HTML', description: 'All tags and atributes' },
         // {
         //    title: 'HTTP Codes',
         //    href: 'status-code',
         //    description: 'All response status code',
         // },
      ],
      fastSearch() {
         if (this.currentInput.length < 4) {
            return
         }

         this.currentFound = []
         const term = new RegExp(this.currentInput, 'gi')

         this.content.forEach((sheet) => {
            if (
               this.currentSheet !== 'all' &&
               sheet.sheet !== this.currentSheet
            ) {
               return
            }

            for (const [category, articles] of Object.entries(sheet)) {
               if ('sheet' === category) {
                  continue
               }

               articles.forEach((article) => {
                  let articleMatches = 0
                  let nameMatches = JSON.stringify(article.name).match(term)

                  if (nameMatches) {
                     articleMatches += nameMatches.length * 3
                  }

                  let contentMatches = JSON.stringify(article.content).match(
                     term
                  )

                  if (contentMatches) {
                     articleMatches += contentMatches.length
                  }

                  if (articleMatches === 0) {
                     return
                  }

                  this.currentFound.push({
                     matches: articleMatches,
                     href: `/${sheet.sheet}/${category}/${article.name}`,
                     title: `<strong>${article.content[0].heading}</strong> ${article.content[1].content}`,
                  })
               })
            }
         })

         this.currentFound.sort((a, b) => b.matches - a.matches)
      },
      setCurrentArticle(path) {
         const paths = path.split('/')
         const sheetTarget = paths[0]
         const sheetFound = this.content.filter(
            (sheet) => sheetTarget === sheet.sheet
         )[0]
         const articleKey = paths[1] ?? sheetTarget

         for (const [key, content] of Object.entries(sheetFound)) {
            if ('sheet' === key) {
               continue
            }

            console.log(content)
         }
      },
      init() {
         const promises = this.sheets.map(async (sheet) => {
            const res = await fetch(`dist/${sheet.href}.json`)
            return await res.json()
         })

         Promise.all(promises).then((values) => {
            values.map((json, index) => {
               this.content.push({
                  sheet: this.sheets[index].href,
                  ...json,
               })
            })

            this.isLoading = false
            this.setCurrentArticle('html')
            this.sheets = this.sheets.slice(1)
         })
      },
   }))
})
