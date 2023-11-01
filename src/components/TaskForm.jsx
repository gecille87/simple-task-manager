import { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    // checks if available on the tags array
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      // checks if tags is already on the array
      const filterTags = taskData.tags.filter((item) => item !== tag); //filter() get items in the list and return a new array
      setTaskData((prev) => {
        return { ...prev, tags: filterTags }; // removes selected tag
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] }; // adds new tag to the array
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);

    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
          value={taskData.task}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="Personal"
              selectTag={selectTag}
              selected={checkTag("Personal")}
            />
            <Tag
              tagName="Work"
              selectTag={selectTag}
              selected={checkTag("Work")}
            />
            <Tag
              tagName="Education"
              selectTag={selectTag}
              selected={checkTag("Education")}
            />
            <Tag
              tagName="Others"
              selectTag={selectTag}
              selected={checkTag("Others")}
            />
          </div>

          <div>
            <select
              name="status"
              className="task_status"
              onChange={handleChange}
              value={taskData.status}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
