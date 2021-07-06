"""
Evaluate the value of an arithmetic expression in Reverse Polish Notation
(https://en.wikipedia.org/wiki/Reverse_Polish_notation).

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.
"""

def evaluate(operation):
    stack = []

    for item in operation:
        if item == '+':
            result = stack.pop() + stack.pop()
            stack.append(result)
        elif item == '-':
            second = stack.pop()
            first = stack.pop()
            stack.append(first - second)
        elif item == '*':
            result = stack.pop() * stack.pop()
            stack.append(result)
        elif item == '/':
            second = stack.pop()
            first = stack.pop()
            result = first / second
            stack.append(int(first / second))
        else:
            stack.append(int(item))

    return stack[0]

op1 = ["2","1","+","3","*"]
print(evaluate(op1))