package com.example.kotlin_springboot_todoapp_rest

data class Task(
    val id: Long,
    val content: String,
    val done: Boolean
)