package net.jlrd.apiexercise.models;

/**
 * Class:
 * Author: José L. Ríos
 * Creation date:
 * Short description:
 * Updates:
 */
public class Book {
    private String id;
    private String title;
    private String author;
    private int year;
    private String genre;
    private double price;



    public void Book() {

    }

    public Book(String id, String title, String author, int year, String genre, double price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}