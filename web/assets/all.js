document.addEventListener('alpine:init', () => {
   const postprocess = (html) => {
      setTimeout(() => {
         Prism.highlightAll()
      }, 5)

      return html
   }
   marked.use({ hooks: { postprocess } })

   Alpine.data('main', () => ({
      isLoading: true,
      currentArticle: {
         title: 'Loading',
         content: '',
      },
      currentInput: '',
      currentSheet: 'all',
      currentFound: [],
      currentFoundKey: 0,
      content: [],
      sheets: [
         { href: 'readme' },
         { href: 'html', title: 'HTML', description: 'All tags and atributes' },
         // {
         //    title: 'HTTP Codes',
         //    href: 'status-code',
         //    description: 'All response status code',
         // },
      ],
      fastSearch() {
         this.currentFound = []

         if (this.currentInput.length < 3) {
            return
         }

         const term = new RegExp(this.currentInput.trim(), 'gi')

         this.content.forEach((sheet) => {
            if (
               (this.currentSheet !== 'all' &&
                  this.currentSheet !== Object.keys(sheet)[0]) ||
               'readme' === Object.keys(sheet)[0]
            ) {
               return
            }

            for (const [sheetKey, categories] of Object.entries(sheet)) {
               categories.forEach((category) => {
                  for (const [categoryKey, categoryArticles] of Object.entries(
                     category
                  )) {
                     if ('readme' === categoryKey) {
                        continue
                     }

                     categoryArticles.forEach((article) => {
                        let articleMatches = 0
                        article = Object.values(article)[0]

                        let titleMatches = article.title.match(term)
                        if (titleMatches) {
                           articleMatches += titleMatches.length * 2.5
                        }

                        let nameMatches = article.name.match(term)
                        if (nameMatches) {
                           articleMatches += nameMatches.length * 1.5
                        }

                        let contentMatches = article.content.match(term)
                        if (contentMatches) {
                           articleMatches += contentMatches.length * 0.75
                        }

                        if (articleMatches === 0) {
                           return
                        }

                        this.currentFound.push({
                           matches: articleMatches,
                           href: `${sheetKey}/${categoryKey}/${article.name}`,
                           title: `<strong>${article.title}</strong> ${marked
                              .parse(articleFound.content)
                              .replace(/(<([^>]+)>)/gi, '')}`,
                        })
                     })
                  }
               })
            }
         })

         this.currentFound.sort((a, b) => b.matches - a.matches)
      },
      changeFoundKey(e) {
         if (0 === this.currentFound.length) {
         }
         switch (e.key) {
            case 'ArrowDown':
               e.preventDefault()
               if (this.currentFoundKey === this.currentFound.length - 1) {
                  return
               }
               this.currentFoundKey++
               break
            case 'ArrowUp':
               e.preventDefault()
               if (this.currentFoundKey === 0) {
                  return
               }
               this.currentFoundKey--
               break
            case 'Enter':
               e.preventDefault()
               location.hash = this.currentFound[this.currentFoundKey].href
               break
            default:
               break
         }
      },
      setCurrentArticle(path) {
         path = path.replace('#', '')
         const paths = path.split('/')
         const sheetTarget = paths[0]
         const categoryTarget = paths[1] ?? 'readme'
         const articleTarget = paths[2] ?? 'readme'

         const sheetFound = this.content.filter(
            (sheet) => sheetTarget === Object.keys(sheet)[0]
         )[0]

         for (const [sheetName, categories] of Object.entries(sheetFound)) {
            if (categories.name) {
               articleFound = categories
               break
            }

            const categoryFound = categories.filter(
               (category) => categoryTarget === Object.keys(category)[0]
            )[0]

            const articles = Object.values(categoryFound)[0]

            if (articles.name) {
               articleFound = articles
               break
            }

            articleFound = articles.filter(
               (article) => articleTarget === Object.values(article)[0].name
            )[0]

            articleFound = Object.values(articleFound)[0]
         }

         this.currentFound = []
         this.currentInput = ''
         this.currentArticle.title = articleFound.title

         this.currentArticle.content = marked.parse(articleFound.content)
      },
      init() {
         const promises = this.sheets.map(async (sheet) => {
            const res = await fetch(`dist/${sheet.href}.json`)
            return await res.json()
         })

         Promise.all(promises).then((values) => {
            values.map((json) => {
               this.content.push({ ...json })
            })
            this.isLoading = false
            if (location.hash) {
               this.setCurrentArticle(location.hash)
            } else {
               this.setCurrentArticle('readme')
            }
            this.sheets = this.sheets.slice(1)
         })

         addEventListener('hashchange', () => {
            this.setCurrentArticle(location.hash)
         })
      },
   }))
})
