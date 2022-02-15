const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get("/", defaulPage)
      .get("/hakkimda", aboutPage)
      .get("/iletisim", contactPage)

      
     
let mesajYaz = (pageName)=>{
    return `<h2>${pageName} sayfasina hosgeldiniz...</h2>`
}
function defaulPage(ctx){
    ctx.body = mesajYaz("Ana Sayfa")
}
function aboutPage(ctx){
    ctx.body = mesajYaz("hakkimda")
}
function contactPage(ctx){
    ctx.body = mesajYaz("iletisim")
}

app.use(router.routes())

const port = 3000

  app.listen(port,() => {
      console.log(`Server ${port} Portunda Çalışıyor.`)
  })