
/** 代理模式 */

abstract class Data {
  public getData () {}
}

class RemoteData extends Data {
  public getData () {
    console.log(`远程数据请求成功`)
  }
}

class ProxyData extends Data {
  private RemoteDataInc: RemoteData
  constructor () {
    super()
    this.RemoteDataInc = new RemoteData()
  }
  public getData () {
    console.log(`代理前随便说两句`)
    this.RemoteDataInc.getData()
  }
}
new ProxyData().getData()
