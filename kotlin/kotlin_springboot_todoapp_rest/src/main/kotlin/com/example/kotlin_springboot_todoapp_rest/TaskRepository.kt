package com.example.kotlin_springboot_todoapp_rest

interface TaskRepository {
    fun create(content: String)
    fun update(task: Task)
    fun delete(id: Long)
    fun findAll(): List<Task>
    fun findById(id: Long): Task?
}