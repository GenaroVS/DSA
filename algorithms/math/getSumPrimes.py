from math import ceil

def isPrime(n):
  for num in range(2, n // 2):
    if n % num == 0:
      return False

  return True



def getSumPrimes(n):
  """
  :param: int => n, even number greater than 2
  :return: int()
  """
  if n < 4:
    return None

  for num in range(2, ceil(n / 2)):
    if (num > 2 and num % 2 == 0): continue

    if isPrime(num) and isPrime(n - num):
      return (num, n - num)

  return None


print(getSumPrimes(78))