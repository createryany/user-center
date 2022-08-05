package com.createryan.usercenter.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    private Boolean status;
    private String successMessage;
    private String errorMessage;
    private Object data;

    public static Result ok(){
        return new Result(true, null, null, null);
    }
    public static Result ok(String successMessage){
        return new Result(true, successMessage, null, null);
    }
    public static Result ok(Object data){
        return new Result(true, null, null, data);
    }
    public static Result ok(String successMessage, Object data){
        return new Result(true, successMessage, null, data);
    }
    public static Result fail(String errorMessage){
        return new Result(false, null, errorMessage, null);
    }
}