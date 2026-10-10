
class Task {
  constructor(id, title, completed = false, priority = "Medium", categoryId = null, userId = null) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.priority = priority;
    this.categoryId = categoryId;
    this.userId = userId;
  }
}

export default Task;
