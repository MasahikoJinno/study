package todolist

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import spark.Spark.path
import spark.Spark.get
import spark.Spark.post
import spark.Spark.delete
import spark.Spark.patch

fun main(args: Array<String>) {
    val objectMapper = ObjectMapper().registerKotlinModule()
    val jsonTransformer = JsonTransformer(objectMapper)
    val taskRepository = TaskRepository()
    val taskController = TaskController(objectMapper, taskRepository)

    path("/tasks") {
        get("", taskController.index(), jsonTransformer)
    }

    path("/task") {
        get("/:id", taskController.show(), jsonTransformer)
        post("/create", taskController.create(), jsonTransformer)
        delete("/:id", taskController.destroy(), jsonTransformer)
        patch("/:id", taskController.update(), jsonTransformer)
    }
}
