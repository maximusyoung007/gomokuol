package com.maximus.gomokuolserverjava.result;

import lombok.Data;

@Data
public class Result<T> {
    private Integer code;

    private String message;

    private T data;

    private boolean success;

    private Result(int code, String message, T data, boolean success) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.success = success;
    }

    private Result(int code, String message, boolean success) {
        this.code = code;
        this.message = message;
        this.success = success;
    }

    public static<T> Result<T> success(T data, String message) {
        return new Result<>(ResultType.SUCCESS.getCode(), message, data, true);
    }

    public static<T> Result<T> success(String message) {
        return new Result<>(ResultType.SUCCESS.getCode(), message, true);
    }

    public static<T> Result<T> error(String message) {
        return new Result<>(ResultType.ERROR.getCode(), message, false);
    }
}
