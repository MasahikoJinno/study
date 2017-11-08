package com.example.kotlin_springboot_todoapp_rest

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.jdbc.core.JdbcTemplate

@SpringBootApplication
class KotlinSpringbootTodoappRestApplication {
    @Bean
    fun commandLineRunner(jdbcTemplate: JdbcTemplate) = CommandLineRunner {
        jdbcTemplate.execute("""CREATE TABLE IF NOT EXISTS task(
            id      BIGINT          PRIMARY KEY AUTO_INCREMENT,
            content VARCHAR(100)    NOT NULL,
            done    BOOLEAN         NOT NULL    DEFAULT FALSE
        )""".trimIndent())
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(KotlinSpringbootTodoappRestApplication::class.java, *args)
}
