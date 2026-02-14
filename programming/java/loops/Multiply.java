import java.util.Scanner;

public class Multiply {
    public static void main(String args[]){
        Scanner intScan = new Scanner(System.in);
        int numMultiply = 0;

        System.out.print("Enter an integer number: ");
        numMultiply = intScan.nextInt();

        for (int m = 1; m <= 10; m++) {
            System.out.println(numMultiply + " x " + m + " = " + numMultiply * m);
        }

        intScan.close();
    }
}
