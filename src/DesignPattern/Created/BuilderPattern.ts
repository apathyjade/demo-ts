
/** 建造者模式 */


class PageMacker {
  private js: string
  private css: string
  private html: string
  public setJs (val: string) {
    this.js = val
  }
  public setCss (val: string) {
    this.css = val
  }
  public setHtml (val: string) {
    this.html = val
  }
  public check () {
    console.log(this.js + '检查完毕');
    console.log(this.css + '检查完毕');
    console.log(this.html + '检查完毕');
  }
}


class BuilderPageList {
  private page: PageMacker
  constructor () {
    this.page = new PageMacker()
  }
  public writeJs () {
    console.log('写列表页js代码')
    this.page.setJs('列表页js代码')
  }
  public writeCss () {
    console.log('写列表页css代码')
    this.page.setCss('列表页css代码')
  }
  public writeHtml () {
    console.log('写列表页Html代码')
    this.page.setHtml('列表页Html代码')
  }
  public buildPage () {
    console.log('列表页页面开发完成')
    return this.page
  }
}

class AcmenBuildPage {
  private builder: BuilderPageList
  constructor (builder: BuilderPageList) {
    this.builder = builder
  }
  public devPage () {
    this.builder.writeJs()
    this.builder.writeCss()
    this.builder.writeHtml()
    return this.builder.buildPage()
  }
}

let page = new AcmenBuildPage(new BuilderPageList()).devPage()
page.check()