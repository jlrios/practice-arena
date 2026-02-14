import java.util.Scanner;

public class SecondsConverter {
    public static void main(String[] args) {
        Scanner inputSeconds = new Scanner(System.in);

        final int minute = 60;
        final int hour = 60;

        int hours, minutes, remainingMinutes, seconds;

        System.out.println("\nConvert seconds into hours, minutes, and remaining seconds");
        
        System.out.print("Enter seconds: ");
        seconds = inputSeconds.nextInt();

        System.out.println("\n" + seconds + " seconds are: ");
        
        // Minutes
        minutes = seconds/minute;
        // Hours
        hours = minutes/hour;
        // Remaining minutes
        remainingMinutes = minutes%hour;
        // Seconds
        seconds = seconds%minutes;

        System.out.println("Hours: " + hours);
        System.out.println("Minutes: " + remainingMinutes);
        System.out.println("Seconds: " + seconds + "\n");

        inputSeconds.close();
    }    
}
