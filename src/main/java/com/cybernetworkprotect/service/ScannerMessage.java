package com.cybernetworkprotect.service;

import org.springframework.stereotype.Service;

import com.cybernetworkprotect.model.ScanResult;
@Service
public class ScannerMessage {

    public ScanResult analyze(String message){

        if (message == null || message.isBlank()) {
            return new ScanResult("WARNING", "Message vide ou invalide vérifier puis REESAYER!!!");
        }

        String lower = message.toLowerCase();

        String[] suspiciousMessages = {
            "dépôt urgent", "envoie dès maintenant",
            "reçois immediatement", "il ne te reste plus que",
            "derniere chance", "souscris pour recevoir"
        };
        for ( String m : suspiciousMessages){
            if (lower.contains(m)) {
                return new ScanResult("danger", "Message de pression détecté il S'agit surement d'une ARNAQUE");            
            }
        }

        String[] financialScam = {
            "argent en 24h", "premier dépôt",
            "investir", "promo",
            "envoie d'abord", "déposez une somme de"
        };
        for (String f : financialScam){
            if (lower.contains(f)) {
                return new ScanResult("warning", "Demande financière SUSPECTE generalement accompagné d'un RISQUE IMPORTANT DE PERTE D'ARGENT");
            }
        }
        String[] manipulation = {
            "tu as gagné", "clique et reçois",
            "gagner gratuitement", "recevez en cliquant",
            "gratuit", "envoyez-le"
        };
        for (String m : manipulation){
            if (lower.contains(m)) {
                return new ScanResult("warning", "Tentative de MANIPULATION détectée");
            }
        }
        return new ScanResult("safe", "Message SEMBLE FIABLE n'hesitez pas à consulter nos CONSEILS SUR LA SECURITE INFORMATIQUE");
    }
}
