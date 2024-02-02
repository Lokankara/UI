import java.util.Arrays;
import java.util.Random;
import java.util.stream.IntStream;

public class Loop {
    static int[] arr = new int[100];

        private static final int[] array = {9, 2, 6, 4, 5, 12, 7, 8, 6};

    public static void main(String[] args) {
        task1();
        task2();
        task3();
        task4();
        task5();
        task61();
        task62();
        moveZeros();
    }

    static void task1() {
        System.out.println("Task #1: Odd Numbers");
        for (int number : array) {
            if (number % 2 != 0) {
                System.out.printf("%s ", number);
            }
        }
    }

    static void task2() {
        System.out.println("Task #2: Numbers Greater than 5");
        for (int number : array) {
            if (number > 5) {
                System.out.printf("%s ", number);
            }
        }
    }

    private static void task3() {
        System.out.println("Task #3: Increase by 15");
        int i = 0;
        while (i < array.length) {
            array[i] += 15;
            System.out.println(array[i]);
            i++;
        }
    }

    private static void task4() {
        IntStream.rangeClosed(0, 15).forEachOrdered(i -> System.out.printf("%s ", i));
        System.out.println("Task #4: Numbers from 0 to 15");
    }

    private static void task5() {
        System.out.println("Task #5: Powers of 5 less than 10000");
        int power = 1;
        while (Math.pow(5, power) < 10000) {
            System.out.println((int) Math.pow(5, power));
            power++;
        }
    }

    private static void task62() {
        System.out.println("Task #6 Variant 2: Multiples of 4 between 40 and 60");
        IntStream.iterate(40, i -> i < 61, i -> i + 4).forEachOrdered(System.out::println);
    }

    private static void task61() {
        System.out.println("Task #6 Variant 1: Multiples of 4 between 40 and 60");
        IntStream.rangeClosed(40, 60).filter(i -> i % 4 == 0).forEachOrdered(System.out::println);
    }

    private static void moveZeros() {
        
        Arrays.setAll(arr, j -> new Random().nextInt(1000));
        IntStream.range(0, new Random().nextInt(50)).forEach(j -> arr[j] = 0);

        int l = 0;
        int r = 0;

        while (r < arr.length && arr[r] != 0) {
            r++;
        }

        while (l < arr.length && r < arr.length) {
            while (l < arr.length && arr[l] != 0) {
                l++;
            }
            while (r < arr.length && arr[r] == 0) {
                r++;
            }
            if (r < arr.length && l < arr.length) {
                int t = arr[l];
                arr[l] = arr[r];
                arr[r] = t;
            } else {
                return;
            }
            r++;
            l++;
        }
        System.out.println(Arrays.toString(arr));
    }
}
