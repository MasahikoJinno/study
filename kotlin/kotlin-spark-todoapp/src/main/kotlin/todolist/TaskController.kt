package todolist

import spark.Request
import spark.Response
import spark.Route

class TaskController {
    fun index(): Route = Route { req, res ->
        listOf(
                Task(1, "クリーニングに出す", false),
                Task(2, "テストーーー", true)
        )
    }
}
