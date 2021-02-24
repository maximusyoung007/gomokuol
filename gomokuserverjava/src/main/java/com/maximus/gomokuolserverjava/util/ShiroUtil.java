package com.maximus.gomokuolserverjava.util;

import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.SimpleHash;

public class ShiroUtil {
    /**
     * 产生盐
     * @return
     */
    public static String createSalt() {
        return new SecureRandomNumberGenerator().nextBytes().toString();
    }

    /**
     * 加密密码
     */
    public static String encryptPassword(String password, String salt) {
        int times = 2;
        String algorithmName = "md5";
        String encodedPassword = new SimpleHash(algorithmName, password, salt, times).toString();
        return encodedPassword;
    }
}
