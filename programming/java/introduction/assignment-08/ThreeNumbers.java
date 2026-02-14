import java.util.Scanner;

public class ThreeNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1, n2, n3, larNum;

        System.out.println("\nFind the largest number among the 3");

        System.out.print("\nEnter first number: ");
        n1 = sc.nextInt();
        System.out.print("Enter second number: ");
        n2 = sc.nextInt();
        System.out.print("Enter third number: ");
        n3 = sc.nextInt();

        if (n1 > n2)
            larNum = n1;
        else
            larNum = n2;
        if (larNum < n3) larNum = n3;

        System.out.println("\nThe largest number is: " + larNum + "\n");

        sc.close();
    }
}
