import java.util.*;

public class InitializationBlock {
    static int breadth;
    static int height;

    static boolean flagBH = false;

    static {
        Scanner sc = new Scanner(System.in);
        breadth = sc.nextInt();
        height = sc.nextInt();

        if (breadth <= 0 || height <= 0) {
            System.out.println("java.lang.Exception: Breadth and height must be positive.");
        } else {
            flagBH = true;
        }

        sc.close();
    }

    public static void main(String[] args) {
        if (flagBH) {
            System.out.println(breadth * height);
        }
    }
}
