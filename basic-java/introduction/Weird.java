import java.util.Scanner;

public class Weird {
    public static void main(String args[]) {
        Scanner intNumber = new Scanner(System.in);
        int number = 0;

        System.out.print("\nEnter an integer number: ");
        number = intNumber.nextInt();

        if (number % 2 != 0) {
            System.out.println("Weird\n");
        } else {
            if (number % 2 == 0 && number >= 2 && number <= 5) {
                System.out.print("Not Weird");
            } 
            if (number % 2 == 0 && number >= 6 && number <= 20) {
                System.out.print("Weird\n");
            }
            if (number % 2 == 0 && number > 20) {
                System.out.println("Not Weird\n");
            }
        }    

        intNumber.close();
    }
}
    
