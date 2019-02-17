


/** 责任链模式 */
abstract class AbstractLogger {
    public static info: Number = 1
    public static warn: Number = 2
    public static error: Number = 3
    protected level:Number
    constructor (level: Number) {
        this.level = level
    }
    public setNextLogger (nextLogger: AbstractLogger): void {
        this.nextLogger = nextLogger
    }
    protected nextLogger: AbstractLogger
    public logMsg (level: Number, msg: String): void {
        if (this.level >= level) {
            this.write(msg)
        } else if (this.nextLogger) {
            this.nextLogger.logMsg(level, msg)
        } else {
            throw "no logger deal class";
        }
    }
    protected write (msg: String): void {
        console.log(`${msg}`)
    }
}

class InfoLogger extends AbstractLogger {
    constructor () {
        super(AbstractLogger.info)
    }
    protected write (msg: String): void {
        console.log(`info:${msg}`)
    }
}

class WarnLogger extends AbstractLogger {
    constructor () {
        super(AbstractLogger.warn)
    }
    protected write (msg: String): void {
        console.log(`warn:${msg}`)
    }
}

class ErrorLogger extends AbstractLogger {
    constructor () {
        super(AbstractLogger.error)
    }
    protected write (msg: String): void {
        console.log(`error:${msg}`)
    }
}

class loggerUtil {
    static getLogger (): AbstractLogger {
        const infoLogger = new InfoLogger()
        const warnLogger = new WarnLogger()
        const errorLogger = new ErrorLogger()
        infoLogger.setNextLogger(warnLogger)
        warnLogger.setNextLogger(errorLogger)
        return infoLogger
    }
}
const logger = loggerUtil.getLogger()
logger.logMsg(AbstractLogger.info, 'i am info')
logger.logMsg(AbstractLogger.warn, 'i am warn')
logger.logMsg(AbstractLogger.error, 'i am error')