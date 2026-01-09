import java.util.Scanner;

public class ConvertCelsius {
    public static void main() {
        Scanner scanner = new Scanner(System.in);

        double celsius, fahrenheit, kelvin;

        final double kelvinConst = 273.15;

        System.out.println("\nConvert Celsius temperature");
        System.out.println("---------------------------");

        System.out.print("Input Celsius temperature: ");
        celsius = scanner.nextFloat();

        fahrenheit = ((celsius * (9.0/5)) + 32);
        // Or fahrenheit = (celsius * 1.8) + 32);

        kelvin = celsius + kelvinConst;

        System.out.printf("%.1f Celsius to Fahrenheit -> %.1f", celsius, fahrenheit);
        System.out.printf("%.2f Celsius to Kelvin -> %.2f", celsius, kelvin);
        
        scanner.close();
    }    
}
