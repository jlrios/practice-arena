import java.util.Scanner;

public class MagicMath {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int myNumber = 0;
        int magicNumber = 0;

        System.out.println("\nMagic with Math");

        System.out.print("\nEnter an integer number: ");
        myNumber = sc.nextInt();

        magicNumber = myNumber * myNumber;
        magicNumber = magicNumber + myNumber;
        magicNumber = magicNumber / myNumber;
        magicNumber = magicNumber + 17;
        magicNumber = magicNumber - myNumber;
        magicNumber = magicNumber / 6;

        System.out.println("Magic number -> " + magicNumber + "\n");
        System.out.println("Try with another number ;)\n");

        sc.close();
	}
}