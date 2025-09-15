package org.example.devnotes.controller;

import org.example.devnotes.model.CodeSnippet;
import org.example.devnotes.service.CodeSnippetService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/code-snippet")
public class CodeSnippetController {

    private CodeSnippetService codeSnippetService;

    public CodeSnippetController(CodeSnippetService codeSnippetService) {
        this.codeSnippetService = codeSnippetService;
    }
    @GetMapping
    public List<CodeSnippet> getCodeSnippets() {
        return codeSnippetService.getAllCodeSnippets();
    }
    @PutMapping
    public CodeSnippet saveCodeSnippet(@RequestBody CodeSnippet codeSnippet) {
        return codeSnippetService.saveCodeSnippet(codeSnippet);
    }
}
