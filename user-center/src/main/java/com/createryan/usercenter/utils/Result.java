package com.createryan.usercenter.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    private Boolean success;
    private String successMessage;
    private String errorMsg;
    private Object data;

    public static Result ok(){
        return new Result(true, null, null, null);
    }
    public static Result ok(String successMessage, Object data){
        return new Result(true, successMessage, null, data);
    }
    public static Result fail(String errorMsg){
        return new Result(false, null, errorMsg, null);
    }
}