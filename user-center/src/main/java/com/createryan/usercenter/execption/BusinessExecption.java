package com.createryan.usercenter.execption;

import com.createryan.usercenter.common.ErrorCode;

/**
 * 自定义异常
 *
 * @author: createryan
 * @date 2022/8/5 3:27
 */
public class BusinessExecption extends RuntimeException{

    private final int code;

    private final String description;

    public BusinessExecption(String message, int code, String description) {
        super(message);
        this.code = code;
        this.description = description;
    }

    public BusinessExecption(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.code = errorCode.getCode();
        this.description = errorCode.getDescription();
    }

    public BusinessExecption(ErrorCode errorCode, String description) {
        super(errorCode.getMessage());
        this.code = errorCode.getCode();
        this.description = description;
    }

    public int getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }
}
