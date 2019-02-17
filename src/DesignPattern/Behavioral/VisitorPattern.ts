
/** 访问者模式 */

abstract class PagePart {
    public Name
    public accept (PageVisitorInc: PageVisitor) {
        PageVisitorInc.visit(this)
    }
}

class PageVisitor {
    public visit (PagePartInc: PagePart) {
        console.log(PagePartInc.Name + "Displaying")
    }
}

class Js extends PagePart {
    public Name = 'js'
}
class Css extends PagePart {
    public Name = 'Css'
}
class Html extends PagePart {
    public Name = 'Html'
}

class Page extends PagePart {
    public Name = 'Page'
    private parts: Array<PagePart>
    constructor () {
        super()
        this.parts = [new Js(), new Css(), new Html()]
    }
    public accept (PageVisitorInc: PageVisitor) {
        this.parts.forEach(item => {
            item.accept(PageVisitorInc)
        })
        PageVisitorInc.visit(this);
    }
}

new Page().accept(new PageVisitor())