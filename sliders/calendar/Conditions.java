import java.util.Random;
import java.util.Scanner;

import java.util.InputMismatchException;
import java.util.NoSuchElementException;

public class Conditions {

    private final static Random rnd = new Random();
    public static void main(String[] args) {
        task1();
        task2();
        task3();
        guess();
        game();
    }

    public static void task1() {

        int a = rnd.nextInt(50);
        int b = rnd.nextInt(50);

        display(a, b, "task 1");
        
        if (a == b) {
            System.out.println("a == b");
        } else if (a < b) {
            System.out.println("a < b");
        } else {
            System.out.println("a > b");
        }
    }

    public static void task2() {
        int a = rnd.nextInt(50);
        int b = rnd.nextInt(50);

        display(a, b, "task 2");

        if ((a + b) % 2 == 0) {
            System.out.println("maybe a and b are even");
        } else {
            System.out.println("some variable is odd");
        }
    }

    public static void task3() {
        System.out.printf("%n--------------- %s ---------------%n", "task 3");
        int a = rnd.nextInt(50);

        System.out.printf("a = %s%n", a);
        
        if (a > 10) {
            System.out.println("greater than 10");
        }
        if (a < 100) {
            System.out.println("less than 100");
        }
        if (a / 2 > 20) {
            System.out.println("the result of division by 2 is greater than 20");
        }
        if (a >= 5 && a <= 40) {
            System.out.println("the value of the variable between 5 and 40 inclusive");
        } else {
            System.out.println("the value of the variable is less than 5 or greater than 40");
        }
    }

    public static void display(int a, int b, String task){  
        System.out.printf("--------------- %s ---------------%n", task);
        System.out.printf("a = %s%n", a);
        System.out.printf("b = %s%n", b);
    }

     public static void game() {
        
        Random rand = new Random();
        int targetNumber = rand.nextInt(100) + 1;
        
        int maxAttempts = 5;
        int attempts = 0;
        boolean isGuessed = false;

        Scanner scanner = new Scanner(System.in);

        System.out.println("--------------- guess --------------");
        System.out.println("Try to guess the number between 1 and 100.");

        while (attempts < maxAttempts && !isGuessed) {
            System.out.print("Enter your guess: ");
            int userGuess = scanner.nextInt();

            if (userGuess == targetNumber) {
                System.out.println("Congratulations! You guessed the correct number.");
                isGuessed = true;
            } else {
                System.out.println("Incorrect. The correct number is " +
                        (userGuess < targetNumber ? "greater" : "less") + " than your guess.");
            }

            attempts++;
            int remainingAttempts = maxAttempts - attempts;
            System.out.println("Attempts remaining: " + remainingAttempts);
        }

        if (!isGuessed) {
            System.out.println("Sorry, you've run out of attempts. The correct number was: " + targetNumber);
        }

        scanner.close();
    }

 public static void guess() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("--------------- guess v.2 --------------");
        System.out.println("Think of a number between 1 and 100, and I'll try to guess it.");
        int attempts = 0;
        int lowerBound = 1;
        int upperBound = 100;
        boolean isGuessed = false;
        int MAX_ATTEMPTS = 5;


while (!isGuessed && attempts < MAX_ATTEMPTS) {
            int guess = (lowerBound + upperBound) / 2;

            System.out.println("Is your number " + guess + "?");
            System.out.println("Enter '+' if your number is higher, '-' if lower, or '0' if correct:");

            char userResponse;
            while (true) {
                try {
                    String input = scanner.next();
                    if (input.length() == 1) {
                        userResponse = input.charAt(0);
                        break;
                    } else {
                        throw new NoSuchElementException();
                    }
                } catch (NoSuchElementException e) {
                    System.out.println("Invalid input. Please enter '+', '-', or '0'.");
                    scanner.nextLine(); // consume the invalid input
                }
            }

            switch (userResponse) {
                case '+':
                    lowerBound = guess + 1;
                    break;
                case '-':
                    upperBound = guess - 1;
                    break;
                case '0':
                    System.out.println("Yay! I guessed your number.");
                    isGuessed = true;
                    break;
                default:
                    System.out.println("Invalid input. Please enter '+', '-', or '0'.");
                    break;
            }

            attempts++;
        }

        if (!isGuessed) {
            System.out.println("Sorry, you've reached the maximum number of attempts. The correct number was not guessed.");
            return;
        }

        scanner.close();
    }
}