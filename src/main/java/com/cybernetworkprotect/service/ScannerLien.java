package com.cybernetworkprotect.service;

import org.springframework.stereotype.Service;

import com.cybernetworkprotect.model.ScanResult;
@Service
public class ScannerLien {

        /*public ScanResult scan(String url) {
        if (url == null || url.isBlank()) {
            return new ScanResult("warning", " Aucun lien fourni");
        }
        url = url.toLowerCase().trim();
        // Vérification format lien
        boolean isLink =
                url.startsWith("http://")
             || url.startsWith("https://")
             || url.startsWith("www.");
        if (!isLink) {
            return new ScanResult(
                "danger",
                " Ce contenu n'est pas un lien valide"
            );
        }
        // Domaines très suspects (exemples MVP)
        String[] suspiciousDomains = {
            ".tk", ".ml", ".ga", ".cf",
            "bonus", "gratuit", "free",
            "gift", "win", "promo"
        };
        for (String d : suspiciousDomains) {
            if (url.contains(d)) {
                return new ScanResult(
                    "danger",
                    " Lien fortement suspect détecté"
                );
            }
        }
        // Liens raccourcis (dangereux par nature)
        String[] shorteners = {
            "bit.ly", "tinyurl", "t.co", "cutt.ly"
        };
        for (String s : shorteners) {
            if (url.contains(s)) {
                return new ScanResult(
                    "warning",
                    "Lien raccourci — destination inconnue"
                );
            }
        }
        // Par défaut : lien inconnu ≠ sûr
        return new ScanResult(
            "warning",
            " Lien inconnu, prudence recommandée"
        );
    }*/


    public ScanResult scan(String link){
        if (link == null || link.isBlank()) {
            return new ScanResult("warning", "le champ n'as pas été rempli ou le lien est invalide");
        }

        String lower = link.toLowerCase().trim();

        if (lower.startsWith("http://") || (lower.startsWith("https://") && lower.contains(".xyz"))) {
            return new ScanResult("danger", "lien non securisé EVITEZ D'Y ENTRER VOS INFORMATIONS PERSONNELLE");
        }
        
        String[] suspiciousDomains = {
            ".xyz", ".html", "reg?", "register",
            "exemple", "signup?", "free",
            "gift", "win", "promo"
        };
        for (String s : suspiciousDomains){
            if (lower.contains(s)) {
                return new ScanResult("warning", "Lien ou raccourci suspect n'y effectuer AUCUNE TRANSACTIONS sous risque de perte");
            }
        }

        String[] raccourcies = {
            "bit.ly", "tinyurl", "t.co",
            "cutt.ly", "gratuit", "promo",
            ".buzz"
        };
        for (String r : raccourcies){
            if (lower.contains(r)) {
                return new ScanResult("warning", "Lien promotionnel suspect necessite surement le SPAM DANS DES DISSCUSSIONS OU DES GROUPES ET DES RISQUENT DE SIGNALEMENT entrennant la PERTE DE COMPTE");
            }
        }
        return new ScanResult("warning", "Lien SEMBLE SUR N'OUBLIEZ PAS DE CONSULTER NOS CONSEILS AVANT TOUTE OPERATIONS SUR LE NET POUR PLUS DE SECURITé");
        
    }

}
