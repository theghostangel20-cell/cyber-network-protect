package com.cybernetworkprotect.controller;
import org.springframework.web.bind.annotation.RestController;
import com.cybernetworkprotect.model.ScanResult;
import com.cybernetworkprotect.model.ScanRequest;
import com.cybernetworkprotect.service.ScannerLien;
import com.cybernetworkprotect.service.ScannerMessage;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/scan")
public class MainController {

    private final ScannerLien scannerLien;
    private final ScannerMessage scannermessage;

    public MainController(ScannerLien scannerLien, ScannerMessage scannermessage){
        this.scannerLien = scannerLien;
        this.scannermessage = scannermessage;
    }


    /*@PostMapping("/analyze")
    @ResponseBody
    public ScanResult analyze(@RequestBody ScanRequest request) {
        String text = request.getText();

        return scannermessage.analyze(text);
    }
    @PostMapping("/scan")
    @ResponseBody
    public ScanResult scan(@RequestBody ScanRequest request) {
        String link = request.getText();

        return scannerLien.scan(link);
    }*/
    
    @PostMapping("/link")
    public ScanResult scanLink(@RequestBody ScanRequest request) {
        
        return scannerLien.scan(request.getText());
    }

    @PostMapping("/message")
    public ScanResult scanMessage(@RequestBody ScanRequest request) {
        
        return scannermessage.analyze(request.getText());
    }
    
    
}
