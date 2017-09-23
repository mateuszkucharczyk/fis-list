package com.mateuszkucharczyk.fis.rest;

import com.mateuszkucharczyk.fis.dao.Commission;
import com.mateuszkucharczyk.fis.dao.CommissionRepository;
import com.mateuszkucharczyk.fis.rest.api.CommissionAddRequest;
import com.google.common.collect.Lists;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

@CrossOrigin
@RestController
@RequestMapping("/v1/commissions")
public class CommissionsController {
    private final CommissionRepository commissionRepository;

    public CommissionsController(CommissionRepository commissionRepository) {
        this.commissionRepository = commissionRepository;
    }

    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    @GetMapping
    public ResponseEntity<List<Commission>> getAllCommissions() {
        return ResponseEntity.ok(Lists.newArrayList(commissionRepository.findAll()));
    }

    @Transactional(isolation = Isolation.READ_COMMITTED)
    @PostMapping
    public ResponseEntity<Commission> addCommission(@Validated @RequestBody CommissionAddRequest request) {
        Commission commission = Commission.builder()
                .name(request.getName())
                .count(request.getCount())
                .build();
        commission = commissionRepository.save(commission);
        return ResponseEntity.ok(commission);
    }

    @Transactional(isolation = Isolation.READ_COMMITTED)
    @DeleteMapping(path="/{id}")
    public ResponseEntity<Void> deleteCommission(@PathVariable long id) {
        commissionRepository.delete(id);
        return ResponseEntity.ok().build();
    }
}
