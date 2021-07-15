"""
Given a string, return whether it represents a number. Here are the different kinds of numbers:

"10", a positive integer
"-10", a negative integer
"10.1", a positive real number
"-10.1", a negative real number
"1e5", a number in scientific notation
"""

def is_number(string: str):
    return is_scientific_notation(string) or is_real_num(string) or is_int(string)

def is_scientific_notation(string: str):
    if string.count('e') != 1: return False
    base, exp = string.split('e')
    return is_number(base) and is_int(exp)

def is_real_num(string: str):
    if string.count('.') != 1: return False
    left, right = string.split('.')
    return is_int(left) and is_int(right)

def is_int(string: str):
    if string[0] == '-':
        if len(string) == 1: return False
        return string[1:].isdigit()
    return string.isdigit()


tests = ['10.1', '-10.1', '1e5', 'a', 'x 1', 'a-2', '-', '1.5e2', '2e19.7']

for test in tests:
    print(is_number(test))

# True
# True
# True
# False
# False
# False
# False
# True
# False
