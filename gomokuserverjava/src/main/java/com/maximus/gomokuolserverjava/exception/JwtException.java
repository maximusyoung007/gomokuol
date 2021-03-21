package com.maximus.gomokuolserverjava.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import com.maximus.gomokuolserverjava.result.Result;
import org.apache.shiro.ShiroException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class JwtException {
   private static final Logger logger = LoggerFactory.getLogger(JwtException.class);

   @ExceptionHandler(ShiroException.class)
   public Result handle401() {
       return Result.error(401, "您没有访问权限");
   }

//   @ExceptionHandler(Exception.class)
//   public Result globalException(HttpServletRequest request, Throwable e) {
//       logger.error(e.getMessage());
//       return Result.error(getStatus(request).value(), "访问出错，无法访问");
//   }
//
//   private HttpStatus getStatus(HttpServletRequest request) {
//       Integer statusCode = (Integer) request.getAttribute("java.servlet.error.status_code");
//       if (null == statusCode) {
//           return HttpStatus.INTERNAL_SERVER_ERROR;
//       }
//       return HttpStatus.valueOf(statusCode);
//   }
}
