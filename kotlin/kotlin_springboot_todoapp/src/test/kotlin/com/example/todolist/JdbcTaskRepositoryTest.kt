package com.example.todolist

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest
class JdbcTaskRepositoryTest {

    @Autowired
    private lateinit var sut: JdbcTaskRepository

    @Test
    fun 何もしなければfindAllはからのリストを返す() {
        val got = sut.findAll()
        assertThat(got).isEmpty()
    }
}
