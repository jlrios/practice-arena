import java.util.Scanner;

public class LeapYear {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int leap;

        boolean isLeap;

        System.out.println("\nDetermine if a year is a leap year.");

        System.out.print("Enter year: ");
        leap = sc.nextInt();

        if (leap % 4 == 0 && leap % 100 != 0)
            isLeap = true;
        else
            isLeap = leap % 400 == 0;

        if (isLeap)
            System.out.println("\nThe year " + leap + " is a leap year\n");
        else
            System.out.println("\nThe year " + leap + " is not a leap year\n");

        sc.close();
    }
}