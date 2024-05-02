package com.arjun.course.util;

import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtToken {

    private String EKey = "3JPBqp1wnDBddOlsyn411ZrLV2etRLQ33JPBqp1wnDBddOlsyn411ZrLV2etRLQ33JPBqp1wnDBddOlsyn411ZrLV2etRLQ3";
    // 7 Days
    // private int Duration = 604800000;
    private int Duration = 60 * 60 * 24 * 7 * 1000 ;

    public String extractUsername(String token) {
        return extraClaim(token, Claims::getSubject);
    }

    private Date extractExpiration(String token) {
        return extraClaim(token, Claims::getExpiration);
    }

    private <T> T extraClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(getSigningkey()).build().parseClaimsJws(token).getBody();
    }

    private Key getSigningkey() {
        byte keyBytes[] = Decoders.BASE64.decode(EKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails, String username, String role, String name, String phone, Long uId) {
        extraClaims.put("role", role);
    extraClaims.put("name", name);
    extraClaims.put("phone", phone);
    extraClaims.put("uId", uId);
        
        // Building the token with extraClaims
        return buildToken(extraClaims, userDetails, Duration);
    }

    private String buildToken(Map<String, Object> extraClaims, UserDetails userDetails, long expiration) {
        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSigningkey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
}