def get_number():
    while True:
        try:
            a = int(input("Enter the first number: "))
            return a
        except ValueError:
            print("That's not a valid number! Please try again.")

print(f"---------------------------  task 1 ------------------------")
user_name = input("Enter your username: ")
print(f"Hello {user_name}!")

print(f"---------------------------  task 2 ------------------------")

a = get_number()
b = get_number()

c = a + b
print(f"Sum = {c}")

print(f"---------------------------  task 3 ------------------------")

a = get_number()
b = get_number()

square = (a + b) * (a + b)
squares = a*a + b*b

print(f"The square of the sum of {a} and {b} is {square}")
print(f"The sum of the squares of {a} and {b} is {squares}")
