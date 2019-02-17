
/** 享元模式 */

class ClientDb {
  public work () {
    console.log(`ClientDb 正在工作`)
  }
}
class Config {
  public work () {
    console.log(`Config 正在工作`)
  }
}

class Utility {
  private Map: Object = {}
  public getClientDb () {
    if (!this.Map['ClientDb']) {
      this.Map['ClientDb'] = new ClientDb()
    }
    return this.Map['ClientDb']
  }
  public getConfig () {
    if (!this.Map['Config']) {
      this.Map['Config'] = new Config()
    }
    return this.Map['Config']
  }
}

const UtilityInc = new Utility()
UtilityInc.getClientDb().work()
UtilityInc.getConfig().work()
