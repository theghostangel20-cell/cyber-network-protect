package com.cybernetworkprotect.model;

public class ScanResult {

    private String level;
    private String message;

    public ScanResult(String level, String message){
        this.level = level;
        this.message = message;
    }

    public String getLevel(){
        return level;
    }

    public String getMessage(){
        return message;
    }
}
