
/** 适配器模式 */

abstract class Player {
    protected Name: string
    public play (Type: string, FileName: string) {}
}

class PlayerMp4 extends Player {
    protected Name: string = 'mp4播放器'
    public play (Type: string, FileName: string) {
        console.log(`${this.Name}:正在播放${FileName}`)
    }
}
class PlayerRmvb extends Player {
    protected Name: string = 'rmvb播放器'
    public play (Type: string, FileName: string) {
        console.log(`${this.Name}:正在播放${FileName}`)
    }
}

class Adapter {
    public play (type: string, FileName: string) {
        if (type === 'mp4') {
            new PlayerMp4().play(type, FileName)
        } else if (type === 'rmvb') {
            new PlayerRmvb().play(type, FileName)
        } else {
            console.log(`不支持播放 ${type} 格式视频文件`)
        }
    }
}

class PlayerMedia extends Player {
    public play (Type: string, FileName: string) {
        new Adapter().play(Type, FileName)
    }
}

const PlayerInc: PlayerMedia = new PlayerMedia()
PlayerInc.play('mp4', '火影忍者.mp4')
PlayerInc.play('rmvb', '海贼王.rmvb')
PlayerInc.play('avi', '死神.avi')