import { useRef, useEffect } from "react";

import "../styles/ToDo.css";

export default function ToDo() {
  //Code for modal
  const modalRef = useRef(null);
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    const btn = btnRef.current;
    const span = spanRef.current;

    const openModal = () => {
      modal.style.display = "block";
    };

    const closeModal = () => {
      modal.style.display = "none";
    };

    const outsideClick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    btn.addEventListener("click", openModal);
    span.addEventListener("click", closeModal);
    window.addEventListener("click", outsideClick);

    // Clean up listeners when component unmounts
    return () => {
      btn.removeEventListener("click", openModal);
      span.removeEventListener("click", closeModal);
      window.removeEventListener("click", outsideClick);
    };
  }, []);

  return (
    <>
      <div className="page-container">
        <h1 className="title">Tasks</h1>

        <input type="text" placeholder="Search..." className="search-bar" />

        <button id="myBtn" ref={btnRef}>
          +
        </button>

        <div className="modal" id="myModal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" ref={spanRef}>
              &times;
            </span>
            <form>
              <h1 className="title">Add a New Task </h1> <br />
              <label htmlFor="Title">TITLE</label>
              <br />
              <input type="text" id="Title" name="Title" required />
              <br />
              <label for="project">PROJECT</label>
              <br />
              <select id="project" name="project">
                <option value="1">Project 1</option>
                <option value="2">Project 2</option>
                <option value="3">Project 3</option>
              </select>
              <br />
              <label for="deadline">DEADLINE</label>
              <br />
              <input type="date" id="deadline" name="deadline" />
              <br />
              <label for="members">MEMBERS</label>
              <br />
              <select id="members" name="members">
                <option value="1">Member 1</option>
                <option value="2">Member 2</option>
                <option value="3">Member 3</option>
              </select>
              <br />
              <label htmlFor="Notes">NOTES</label>
              <br />
              <input type="text" id="Notes" name="Notes" />
            </form>
          </div>
        </div>

        <div className="task-container">
          <div className="column">
            <h2 className="container-title">To Do</h2>
            <div className="column-space">
              
              <div class="task">
                <div class="task-title">Task # 1</div>
                <div class="task-note">Build something</div>
                <div class="task-members"> Member images goes here </div>
                <div class="task-deadline">Deadline 20/12/2025</div>
              </div>

              <div class="task">
                <div class="task-title">Task # 2</div>
                <div class="task-note">Build something</div>
                <div class="task-members"> Member images goes here </div>
                <div class="task-deadline">Deadline 20/12/2025</div>
              </div>

              <div class="task">
                <div class="task-title">Task # 3</div>
                <div class="task-note">Build something</div>
                <div class="task-members"> Member images goes here </div>
                <div class="task-deadline">Deadline 20/12/2025</div>
              </div>



            </div>
          </div>

          <div className="column">
            <h2 className="container-title">Doing</h2>
            <div className="column-space"></div>
          </div>

          <div className="column">
            <h2 className="container-title">Done</h2>
            <div className="column-space"></div>
          </div>
        </div>
      </div>
    </>
  );
}
