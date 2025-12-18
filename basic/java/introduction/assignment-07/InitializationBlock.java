import java.util.*;

public class InitializationBlock {
    static int breadth;
    static int height;

    static boolean flagBH = false;

    static {
        System.out.println("\nArea of a parallelogram");
        System.out.println("\nThis program uses an initialization block to read and set the initial ");
        System.out.println("values of the breadth and height variables.\n");
    
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the breadth: ");
        breadth = sc.nextInt();

        System.out.print("Enter the height: ");
        height = sc.nextInt();

        if (breadth <= 0 || height <= 0) {
            System.out.println("\njava.lang.Exception: Breadth and height must be positive.\n");
        } else {
            flagBH = true;
        }

        sc.close();
    }

    public static void main(String[] args) {  
        if (flagBH) {
            System.out.println("\nArea: " + (breadth * height) + "\n");
        }
    }
}
