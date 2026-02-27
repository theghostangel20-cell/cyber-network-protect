package com.cybernetworkprotect.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String index() {
        return "index";
    }
    
    @GetMapping("/scan-lien")
    public String ScannerLien() {
        return "scan-lien";
    }

    @GetMapping("/scan-message")
    public String ScannerMessage() {
        return "scan-message";
    }
    
    @GetMapping("/conseils")
    public String conseils() {
        return "conseils";
    }
    
}
