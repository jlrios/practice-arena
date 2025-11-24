import java.util.Scanner;

public class MagicMath {
	public static void main(String[] args) {
        Scanner intNumber = new Scanner(System.in);
        
        int myNumber = 0;
        int magicNumber = 0;

        System.out.print("\nEnter an integer number: ");
        myNumber = intNumber.nextInt();

        magicNumber = myNumber * myNumber;
        magicNumber = magicNumber+ myNumber;
        magicNumber = magicNumber / myNumber;
        magicNumber = magicNumber + 17;
        magicNumber = magicNumber - myNumber;
        magicNumber = magicNumber / 6;

        System.out.println(magicNumber + "\n");

        intNumber.close();
	}
}