public class MagicMath {
	public static void main(String[] args) {
    // Original number from now on.
    int myNumber = 43;
    int magicNumber = 0;

    magicNumber = myNumber * myNumber;
    magicNumber = magicNumber+ myNumber;
    magicNumber = magicNumber / myNumber;
    magicNumber = magicNumber + 17;
    magicNumber = magicNumber - myNumber;
    magicNumber = magicNumber / 6;

    System.out.println(magicNumber);
	}
}