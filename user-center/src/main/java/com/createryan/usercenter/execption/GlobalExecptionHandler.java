package com.createryan.usercenter.execption;

import com.createryan.usercenter.common.BaseResponse;
import com.createryan.usercenter.common.ErrorCode;
import com.createryan.usercenter.common.ResultUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 全局异常处理器
 *
 * @author: createryan
 * @date 2022/8/5 3:42
 */
@RestControllerAdvice
@Slf4j
public class GlobalExecptionHandler {

    @ExceptionHandler(BusinessExecption.class)
    public BaseResponse businessExecptionHandler(BusinessExecption businessExecption) {
        log.error("BusinessExecption", businessExecption.getMessage(), businessExecption);
        return ResultUtils.error(businessExecption.getCode(), businessExecption.getMessage(), businessExecption.getDescription());
    }

    @ExceptionHandler(RuntimeException.class)
    public BaseResponse businessExecptionHandler(RuntimeException runtimeException) {
        log.error("RuntimeException", runtimeException);
        return ResultUtils.error(ErrorCode.SYSTEM_ERROR, runtimeException.getMessage(), "");
    }
}
