package ifinsa.h4221backend.controller;


import ifinsa.h4221backend.service.ExampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class ExampleController {

    @Autowired
    ExampleService exampleService;

    // POST exemple /attachment/{id}
    @PostMapping("/attachment/{id}")
    public void uploadAttachedFile(@PathVariable(value="id") String idTest){
        exampleService.uploadAttachedFile(idTest);
    }

}
