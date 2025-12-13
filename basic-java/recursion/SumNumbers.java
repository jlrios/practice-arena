package recursion;

public class SumNumbers {
    public static int sumNumbers(int startNum, int endNum) {
        if (endNum > startNum) {
            return endNum + sumNumbers(startNum, endNum - 1);
        } else {
            return endNum;
        }
    }

    public static void main(String args[]) {
        int startNum = 3;
        int endNum = 9;

        int result = sumNumbers(startNum, endNum);

        System.out.println(result);
    }
}
