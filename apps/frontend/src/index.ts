import page from 'page'
import { getPageMeta, addPage, generatePageContent } from './page'

page('*', function (ctx: PageJS.Context) {
  const meta = getPageMeta(ctx.path)
  const page = addPage(meta.pageName)

  generatePageContent(meta)
    .then(() => {
      const heading = page.querySelector('h1');
      heading.focus();
    })
})

page('/home')
