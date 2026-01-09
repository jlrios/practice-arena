import static java.lang.Character.isSpaceChar;

public class SqueakyClean {
    public static String clean(String identifier) {
        StringBuilder myString = new StringBuilder(identifier);

        for (int s = 0; s <= identifier.length() - 1; s++) {
            System.out.print(identifier.charAt(s));
            if (isSpaceChar(identifier.charAt(s))) {
                identifier = identifier.replace(" ", "_");
            }
            myString.append(identifier);
        }

        return myString.toString();
    }
    public static void main(String... args) {
        System.out.println(clean("The Beatles   "));
    }
}