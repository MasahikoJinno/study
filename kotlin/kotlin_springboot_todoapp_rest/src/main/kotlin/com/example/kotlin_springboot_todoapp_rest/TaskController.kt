package com.example.kotlin_springboot_todoapp_rest

import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.PathVariable

@RestController
class TaskController(private val taskRepository: TaskRepository) {

    @RequestMapping(value = "/tasks", method = arrayOf(RequestMethod.GET))
    fun index(): List<Task> {
        return taskRepository.findAll()
    }

    @RequestMapping(value = "/task/create", method = arrayOf(RequestMethod.POST))
    fun create(@RequestBody task: Task): String {
        taskRepository.create(task.content)
        return "success"
    }

    @RequestMapping(value = "/task/update", method = arrayOf(RequestMethod.PATCH))
    fun update(@RequestBody task: Task): String {
        taskRepository.update(task)
        return "success"
    }

    @RequestMapping(value = "/task/{id}", method = arrayOf(RequestMethod.DELETE))
    fun delete(@PathVariable("id") id: Long): String {
        taskRepository.delete(id)
        return "success"
    }
}