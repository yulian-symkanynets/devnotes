package org.example.devnotes.repository;

import org.example.devnotes.model.CodeSnippet;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CodeSnippetRepository extends JpaRepository<CodeSnippet, Long> {
}
