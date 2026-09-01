# Square(n) Sum
# 8 Kyu
# https://www.codewars.com/kata/515e271a311df0350d00000f/train/python

def square_sum(numbers):
    sum = 0
    for num in numbers:
        num = num**2
        sum+=num
    return sum