
/** 组合模式 */

abstract class TreeComponent {
  protected Name: string
  constructor (Name: string) {
    this.Name = Name
  }
  public add (TreeComponentInc: TreeComponent) {}
  public remove (TreeComponentInc: TreeComponent) {}
  public display (Leave: number) {}
}

class TreeTrunk extends TreeComponent {
  protected Name: string
  private Children: Array<TreeComponent> = []
  constructor (Name: string) {
    super(Name)
    this.Name = Name
  }
  public add (TreeComponentInc: TreeComponent) {
    this.Children.push(TreeComponentInc)
  }
  public remove (TreeComponentInc: TreeComponent) {
    this.Children = this.Children.filter(item => item === TreeComponentInc)
  }
  public display (Leave: number) {
    let str = ''
    for (let i = 0; i< Leave; i++) {
      str += '-'
    }
    console.log(str + ' ' + this.Name)
    this.Children.forEach(item => {
      item.display(Leave + 1)
    })
  }
}

class TreeLeaf extends TreeComponent {
  protected Name: string
  public add (TreeComponentInc: TreeComponent) {
    console.log('叶子节点不可以添加子元素')
  }
  public remove (TreeComponentInc: TreeComponent) {
    console.log('叶子节点不可以删除子元素')
  }
  public display (Leave: number) {
    let str = ''
    for (let i = 0; i< Leave; i++) {
      str += '-'
    }
    console.log(str + ' ' + this.Name)
  }
}

const root = new TreeTrunk('root') 
const one1 = new TreeTrunk('一级树干 1')
const one2 = new TreeTrunk('一级树干 2')
const one3 = new TreeLeaf('一级树叶 1')
const one4 = new TreeLeaf('一级树叶 2')
root.add(one1)
root.add(one2)
root.add(one3)
root.add(one4)

const two1 = new TreeTrunk('二级树干 1')
const two2 = new TreeTrunk('二级树干 2')
const two3 = new TreeLeaf('二级树叶 1')
const two4 = new TreeLeaf('二级树叶 2')
one1.add(two1)
one1.add(two3)
one2.add(two2)
one2.add(two4)

const three1 = new TreeLeaf('三级树叶 1')
const three2 = new TreeLeaf('三级树叶 3')
two1.add(three1)
two2.add(three2)

root.display(1)
