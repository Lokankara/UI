public class MultiDimensionalArrays {

    static int[][][][] array4D = {
            {{{1}, {2}}, {{3}, {4}}},
            {{{5}, {6}}, {{7}, {8}}},
            {{{9}, {10}}, {{11}, {12}}},
            {{{13}, {14}}, {{15}, {16}}},
            {{{17}, {18}}, {{19}, {20}}},
            {{{21}, {22}}, {{23}, {24}}},
            {{{9}, {10}}, {{11}, {12}}},
            {{{13}, {14}}, {{15}, {16}}},
            {{{17}, {18}}, {{19}, {20}}},
            {{{21}, {22}}, {{23}, {24}}},
            {{{9}, {10}}, {{11}, {12}}},
            {{{13}, {14}}, {{15}, {16}}},
            {{{17}, {18}}, {{19}, {20}}},
            {{{21}, {22}}, {{23}, {24}}},
            {{{9}, {10}}, {{11}, {12}}},
            {{{13}, {14}}, {{15}, {16}}},
            {{{17}, {18}}, {{19}, {20}}},
            {{{21}, {22}}, {{23}, {24}}},
            {{{25}, {26}}, {{27}, {28}}},
            {{{29}, {30}}, {{31}, {32}}},
    };

    public static void main(String[] args) {
        int[][][][][][] array6D = new int[2][2][2][2][2][2];

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 2; k++) {
                    for (int l = 0; l < 2; l++) {
                        for (int m = 0; m < 2; m++) {
                            for (int n = 0; n < 2; n++) {
                                array6D[i][j][k][l][m][n] =
                                        i + j + k + l + m + n;
                            }
                        }
                    }
                }
            }
        }

        long startTime1 = System.nanoTime();
        extracted1(array6D);
        long endTime1 = System.nanoTime();
        long duration1 = (endTime1 - startTime1) / 1000;
        System.out.println();
        long startTime = System.nanoTime();
        extracted(array6D);
        long endTime = System.nanoTime();
        long duration = (endTime - startTime) / 1000;
        System.out.println();
        extracted4(array4D);
        System.out.println();
        extracted5(array4D);
        System.out.println();
        System.out.println("\nExecution time: " + duration + " ms");
        System.out.println("\nExecution time: " + duration1 + " ms");
    }

    private static void extracted5(int[][][][] array4D) {
        for (int i = 0; i < array4D.length; i++) {
            for (int j = 0; j < array4D[i].length; j++) {
                for (int k = 0; k < array4D[i][j].length; k++) {
                    for (int l = 0; l < array4D[i][j][k].length; l++) {
                        System.out.print(array4D[i][j][k][l] + "\t");
                    }
                    System.out.print(" ");
                }
                if (j < array4D[i].length - 1) {
                    System.out.print(" ");
                }
            }
            if (i < array4D.length - 1) {
                System.out.println();
            }
        }
    }

    private static void extracted4(int[][][][] arr) {
        int z = arr[0].length;
        int y = arr[0][0].length;
        int x = arr[0][0][0].length;
        for (int i = 0; i < arr.length * z * y * x; i++) {
            int a = i / (y * x * z);
            int b = (i / (y * x)) % z;
            int c = (i / x) % y;
            int d = i % x;
            if (d == 0 && c == 0) {
                System.out.println();
            }
            System.out.print(arr[a][b][c][d] + "\t");
            if (d == x - 1) {
                System.out.print("\t");
            }
        }
    }


    private static void extracted1(int[][][][][][] array6D) {
        int totalElements = array6D.length * array6D[0].length * array6D[0][0].length * array6D[0][0][0].length * array6D[0][0][0][0].length * array6D[0][0][0][0][0].length;
        for (int index = 0; index < totalElements; index++) {
            int i = index / (2 * 2 * 2 * 2 * 2);
            int j = (index / (2 * 2 * 2 * 2)) % 2;
            int k = (index / (2 * 2 * 2)) % 2;
            int l = (index / (2 * 2)) % 2;
            int m = (index / 2) % 2;
            int n = index % 2;
            System.out.print(array6D[i][j][k][l][m][n] + " ");
        }
        System.out.print("");
    }

    private static void extracted(int[][][][][][] array6D) {
        for (int[][][][][] ints : array6D) {
            for (int[][][][] anInt : ints) {
                for (int[][][] value : anInt) {
                    for (int[][] item : value) {
                        for (int[] element : item) {
                            for (int i : element) {
                                System.out.print(i + " ");
                            }
                            System.out.print("");
                        }
                        System.out.print("");
                    }
                    System.out.print("");
                }
                System.out.print("");
            }
            System.out.print("");
        }
    }
}
