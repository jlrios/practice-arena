import java.util.Scanner;

public class BattingAverage {
    public static void main(String[] args) {
        Scanner data = new Scanner(System.in);

        int hits, atBats;
        double battingAvg;

        System.out.println("\nBatting average");
        System.out.println("----------------");

        System.out.print("Hits: ");
        hits = data.nextInt();

        System.out.print("At-bats: ");
        atBats = data.nextInt();

        battingAvg = (double) hits / atBats;

        System.out.printf("Batting average: %.3f%n\n", battingAvg);

        data.close();
    }
}
