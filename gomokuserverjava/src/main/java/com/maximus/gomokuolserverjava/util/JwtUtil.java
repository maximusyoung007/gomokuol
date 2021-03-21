package com.maximus.gomokuolserverjava.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;

public class JwtUtil {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtil.class);

    private static final Long EXPIRE_TIME = 5 * 60 * 1000L;

    private static final String SECRET = "mySecret";

    /**
     * 生成token
     * @param username
     * @return
     */
    public static String createToken(String username) {
        String token = null;
        //过期时间
        Date expireDate = new Date(System.currentTimeMillis() + EXPIRE_TIME);
        //加密算法
        Algorithm algorithm = Algorithm.HMAC256(SECRET);
        token = JWT.create().withClaim("username", username).withExpiresAt(expireDate).sign(algorithm);
        return token;
    }

    /**
     * 验证token
     */
    public static boolean verify(String token, String username) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(SECRET);
            JWTVerifier verifier = JWT.require(algorithm).withClaim("username", username).build();
            verifier.verify(token);
            return true;
        } catch (Exception e) {
            logger.error("token is invalid.{}", e.getMessage());
            return false;
        }
    }

    /**
     * 从token中获取username
     */
    public static String getUsernameFromToken(String token) {
        try {
            DecodedJWT decode = JWT.decode(token);
            String username = decode.getClaim("username").asString();
            return username;
        } catch (Exception e) {
            logger.error("fail to decode jwt", e.getMessage());
            return null;
        }
    }
}
