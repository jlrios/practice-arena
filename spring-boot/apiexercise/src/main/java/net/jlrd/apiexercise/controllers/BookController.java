package net.jlrd.apiexercise.controllers;

import net.jlrd.apiexercise.models.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Class:
 * Author: José L. Ríos
 * Creation date:
 * Short description:
 * Updates:
 */
@RestController
@RequestMapping("/api/books")
public class BookController {
   private List<Book> books = new ArrayList<>();

   public BookController() {
       books.add(new Book("1", "The Shining", "Stephen King", 1977, "Horror", 19.99));
       books.add(new Book("2", "Dune", "Frank Herbert", 1965, "Science Fiction", 24.50));
       books.add(new Book("3", "Pride and Prejudice", "Jane Austen", 1813, "Romance", 14.75));
   }

   // GET: return all books.
   @GetMapping("/list")
   public List<Book> getAllBooks() {
       return books;
   }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable String id) {
        return books.stream()
                .filter(book -> book.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

}
