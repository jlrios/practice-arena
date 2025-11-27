import java.util.*;

public class IntegerToString {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter an integer number: ");
        int n = sc.nextInt();
        
        try {
            System.out.print("Enter an integer number: ");
            String sn = String.valueOf(n);
            
            System.out.println("Good job, the number" + sn + " has been converted.");
        } catch (Exception e) {
            System.out.println("Wrong answer.");
        }
        
        sc.close();
    }
}