import java.util.Scanner;

public class Greeting {
    public static void main(String[] args) {
        Scanner name = new Scanner(System.in);
        String myName;

        System.out.print("\nWhat is your name: ");
        myName = name.nextLine();

        System.out.println("\nNice to meet you " + myName);
        System.out.println("Welcome to Java programming\n\nJava is fun!\n");

        name.close();
    }
}