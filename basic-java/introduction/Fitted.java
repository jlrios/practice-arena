import java.util.Scanner;

public class Fitted {
    public static void main(String... args) {
        Scanner scanNum = new Scanner(System.in);
        int numCases = 0;
        long checkNumber = 0;

        System.out.print("\nEnter a number of cases: ");
        numCases = scanNum.nextInt();

        System.out.println();

        for (int c = 0; c <= numCases - 1; c++) {
            try {
                checkNumber = scanNum.nextLong();
            
                System.out.println(checkNumber + " can be fitted in: ");
            
                if (checkNumber >= Byte.MIN_VALUE && checkNumber <= Byte.MAX_VALUE) {
                    System.out.println("* byte");
                }

                if (checkNumber >= Short.MIN_VALUE && checkNumber <= Short.MAX_VALUE) {
                    System.out.println("* short");
                }

                if (checkNumber >= Integer.MIN_VALUE && checkNumber <= Integer.MAX_VALUE) {
                    System.out.println("* int");    
                } 

                System.out.println("* long");
            } catch (Exception e) {
                String notFitInput = scanNum.next();
                System.out.println(notFitInput + " can't be fitted anywhere.");
            }
        }
        scanNum.close();
    }
}