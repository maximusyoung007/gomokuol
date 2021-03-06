package com.maximus.gomokuolserverjava;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.maximus.gomokuolserverjava.mapper")
public class GomokuolServerJavaApplication {

    public static void main(String[] args) {
        SpringApplication.run(GomokuolServerJavaApplication.class, args);
    }

}
