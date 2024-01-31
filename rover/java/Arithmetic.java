import java.math.BigDecimal;
import java.math.RoundingMode;
import java.lang.Math;

public class Arithmetic {
    public static void main(String[] args) {
        
        BigDecimal dividend = new BigDecimal("10.1");
        BigDecimal divisor = new BigDecimal("2");
        BigDecimal result = dividend.remainder(divisor);
        System.out.println("Remainder: " + result);
            int a = 17;
            int b = 3;

            System.out.println("a = " + a);
            System.out.println("b = " + b);

            int sum = a + b;
            int product = a * b;
            int difference = a - b;

            BigDecimal quotient = BigDecimal.valueOf(a).divide(BigDecimal.valueOf(b), 10, RoundingMode.HALF_UP);
            int remainder = a % b;

            System.out.println("Сложение (a + b): " + sum);
            System.out.println("Умножение (a * b): " + product);
            System.out.println("Вычитание (a - b): " + difference);
            System.out.println("Деление (a / b): " + quotient);
            System.out.println("Остаток от деления (a % b): " + remainder);

            checkEvenOdd(a, "a");
            checkEvenOdd(b, "b");

    }

    private static void checkEvenOdd(int number, String variableName) {
        if (number % 2 == 0) {
            System.out.println(variableName + " четное число.");
        } else {
            System.out.println(variableName + " нечетное число.");
        }
    }
}
