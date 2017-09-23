package com.mateuszkucharczyk.fis.rest.api;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
public class CommissionAddRequest {
    @NotEmpty(message="{fis.commission.name.notEmpty}")
    private final String name;
    @NotNull(message = "{fis.commission.count.notNegative}")
    @Min(value = 0, message = "{fis.commission.count.notNegative}")
    private final Long count;
}