import java.util.Scanner;

public class PythagoreanTheorem {
    
    public static void main(String... args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=== Pythagorean Theorem ===");
        System.out.println("Choose an option: ");
        System.out.println("1. Calculate hypotenuse");
        System.out.println("2. Calculate a leg (cathetus)");
        System.out.print("Option: ");

        int option = scanner.nextInt();

        if (option == 1) {
            System.out.println("Enter a leg a:");
            double a = scanner.nextDouble();

            System.out.println("Enter a leg b:");
            double b = scanner.nextDouble();

            double c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

            System.out.println("Hypotenuse: " + c);
        } else if (option == 2) {
            System.out.println("Enter a know leg: ");
            double a = scanner.nextDouble();

            System.out.println("Enter hypotenuse: ");
            double c = scanner.nextDouble();

            if (a > c) {
                System.out.println("Error: the hypotenuse must be greater than the leg...");
            } else {
                double b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                System.out.println("Missing leg: " + b);
            }
        } else {
            System.out.println("Invalid option.");
        }

        scanner.close();
    }
}
