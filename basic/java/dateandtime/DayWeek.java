package dateandtime;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Scanner;

public class DayWeek {
    public static String getDay(int day, int month, int year) {
        LocalDate localDate = LocalDate.of(year, month, day);
        DayOfWeek dayOfWeek = localDate.getDayOfWeek();

        return dayOfWeek.toString();
    }
    public static void main(String []args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Day: ");
        int day = sc.nextInt();

        System.out.print("Month: ");
        int month = sc.nextInt();

        System.out.print("Year: ");
        int year = sc.nextInt();

        System.out.println(getDay(day, month, year));

        sc.close();
    }
}
