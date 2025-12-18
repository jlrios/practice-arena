# Basic Java - Assignment 01
## The classic "Hello, World!" program

## Objective
Learn how to create, compile, and run a basic Java program. This activity introduces the structure of a Java class and the use of the `main` method to produce output on the screen.

## Instructions
1. Create a new Java file named `HelloWorld.java`.
2. Inside the file, define a public class called `HelloWorld`.
3. Add the `main` method inside the class using the following format:

   ```java
   public static void main(String[] args) {
       // Code goes here
   }
   ```
4. Inside the main method, use `System.out.println` to display the message:     
    ```java
    System.out.println("Hello, World!");
    ````
5. Save the file and compile it using the Java compiler:
    ```java
    % javac HelloWorld.java
    ````
6. Run the program using:
    ```java
    % java HelloWorld
    ````
## Expected Outcome
Expected Outcome

By the end of this activity, you should be able to:
  * Understand the basic structure of a Java program.
  * Create and define a public class.
  * Use the main method as the entry point of a Java application.
  * Display text on the screen using System.out.println.

## Example Output
```terminal_session
Hello, World!
```