package com.maximus.gomokuolserverjava.result;

public enum ResultType {
    SUCCESS(200), ERROR(600);

    private Integer code;

    ResultType(int code) {
        this.code = code;
    }

    public Integer getCode() {
        return code;
    }

}
