import re

""" Daily Problem #114
Given a string and a set of delimiters, reverse the words in the string while maintaining the relative order of the delimiters. For example, given "hello/world:here", return "here/world:hello"

Follow-up: Does your solution work for the following cases: "hello/world:here/", "hello//world:here"
"""


def reverseDelimiters(string: str, delimiters: str) -> str:
    words = re.split('[' + delimiters + ']+', string)

    if len(words) > 0 and words[-1] == '':
        words = words[:-1]

    if len(words) > 0 and words[0] == '':
        words = words[1:]

    reversed_iter = reversed(words)
    result = []
    atDelimiter = True

    for char in string:
        if char in delimiters:
            atDelimiter = True
            result.append(char)
        elif atDelimiter:
            atDelimiter = False
            result.append(next(reversed_iter))

    return ''.join(result)


print(reverseDelimiters('/hello/world:here/', '/:'))
print(reverseDelimiters('hello//world:here', '//:'))