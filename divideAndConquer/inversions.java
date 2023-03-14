public class Inversions {
    // Return the number of inversions in the permutation a[].
    public static long count(int[] a) {
        //to do
        return 1;
    }

    // Return a permutation of length n with exactly k inversions.
    public static int[] generate(int n, long k) {
        
        int[] perm = new int[n];

        for (int i = 0; i < n; i++) {

            if (k >= n - i) {
                perm[i] = n - i - 1;

            }

            else if (k > 0 && k < n) {
                perm[n - 1 - (int) k] = n - i - 1;

            }
            
            k = k - n + i + 1;
        }
        int count = 0;
        for (int i = 0; i < n; i++) {

            if (perm[i] == 0) {
                perm[i] = count;
                count++;

            }

        }


        return perm;
    }


    // Takes an integer n and a long k as command-line arguments,
    // and prints a permutation of length n with exactly k inversions.
    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);
        long k = Long.parseLong(args[1]);

        int[] perm = generate(n, k);

        for (int i = 0; i < perm.length; i++) {
            System.out.print(perm[i] + " ");
        }
    }
}