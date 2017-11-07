package com.example.kotlin_springboot_todoapp_rest

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestBody

@RestController
class TaskController(private val taskRepository: TaskRepository) {
    @GetMapping("tasks")
    fun index(): String {
        return ""
    }

    @PostMapping("task/new")
    fun create(): String {
        return ""
    }

    @PatchMapping("task/{id}")
    fun update(): String {
        return ""
    }
}