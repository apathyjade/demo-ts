
/** 解释器模式 */

class Context {
    private __Variable: Object
    public get Variable (): Object {
        return this.__Variable || (this.__Variable = {}, this.__Variable)
    }
}

abstract class Expression {
    public interpret (context: Context) {

    }
}

class Variable extends Expression {
    public key: string
    constructor (key: string) {
        super()
        this.key = key
    }
    public Interpret (context: Context) {
        const key = this.key
        return context.Variable[key]
    }
}

abstract class OperatorExpression extends Expression {
    protected left: OperatorExpression 
    protected right: OperatorExpression 
    constructor (left: OperatorExpression , right: OperatorExpression ) {
        super()
        this.left = left
        this.right = right
    }
    public Interpret (context: Context): number {return 0}
}

class AddExpression extends OperatorExpression {
    public interpret (context: Context): number {
        return this.left.Interpret(context) + this.right.Interpret(context);
    }
}

class SubExpression extends OperatorExpression {
    public interpret (context: Context): number {
        return this.left.Interpret(context) - this.right.Interpret(context);
    }
}

class MulExpression extends OperatorExpression {
    public interpret (context: Context): number {
        return this.left.Interpret(context) * this.right.Interpret(context);
    }
}

class DivExpression extends OperatorExpression {
    public interpret (context: Context): number {
        return this.left.Interpret(context) / this.right.Interpret(context);
    }
}

class Calculator {
    private expression: string
    private context: Context
    constructor (exp: string) {
        this.expression = exp
        this.context = new Context()
    }
    public calculate () {
        this.expression.split(' ').forEach(c => {
            if (c === '+' || c === '-' || c === '*' || c === '/')
            {
                return;
            }
            
        });
    }
}
