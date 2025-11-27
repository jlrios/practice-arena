# Java basic - Assignment 02
## Java System Information program

## Objective
Create a Java program that displays information about your Java installation.  
This activity will help you practice the use of `System.out.println` for printing output to the screen and introduce you to `System.getProperty` for reading system properties.

## Instructions
1. Create a new Java file named `JavaInfo.java`.
2. Inside the class, define the `main` method.
3. Use `System.out.println` to display text messages and the values you retrieve.
4. Use `System.getProperty` to read system properties such as:
   * `"java.version"`
   * `"java.runtime.version"`
   * `"java.home"`
   * `"java.vendor"`
   * `"java.vendor.url"`
   * `"java.class.path"`
   * `"os.name"`
   * `"os.version"`
   
## Expected Outcome
By the end of this activity, you should be able to:
- Print information to the screen using `System.out.println`.
- Retrieve and display system properties using `System.getProperty`.
- Understand how Java interacts with the underlying system environment.

## Example Output
```terminal_session
Java Installation Info
------------------------
Java Version: 25.0.1
Java Runtime Version: 25.0.1+8-27
Java Home: /Users/default/Library/Java/JavaVirtualMachines/openjdk-25.0.1/Contents/Home
Java Vendor: Oracle Corporation
Java Vendor URL: https://java.oracle.com/
Java Class Path: /Users/default/Library/Application Support/Code/User/workspaceStorage/a73728f5acbab11fa51bc284f0f4ead8/redhat.java/jdt_ws/basic-java_524b3122/bin
```