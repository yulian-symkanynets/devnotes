package org.example.devnotes.service;

import org.example.devnotes.model.CodeSnippet;
import org.example.devnotes.repository.CodeSnippetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CodeSnippetService {
    private final CodeSnippetRepository codeSnippetRepository;

    public CodeSnippetService(CodeSnippetRepository codeSnippetRepository) {
        this.codeSnippetRepository = codeSnippetRepository;
    }
    public List<CodeSnippet> getAllCodeSnippets() {
        return codeSnippetRepository.findAll();
    }

    public CodeSnippet saveCodeSnippet(CodeSnippet codeSnippet) {
        return codeSnippetRepository.save(codeSnippet);
    }
}
