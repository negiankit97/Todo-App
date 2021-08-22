(function () {
    const input = document.querySelector(".todo-input");
    const submitBtn = document.querySelector(".submit-btn");
    const list = document.querySelector(".todo-list");
    let inputValue;

    input.addEventListener("change", (e) => {
        inputValue = e.target.value;
    })

    input.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            submitBtn.click();
        }
    })

    window.onload = function () {
        input.focus();
    }

    function createListItem() {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        const spanElement = document.createElement("span");
        const checkbox = document.createElement("input");
        deleteBtn.setAttribute("class", "delete-btn");
        deleteBtn.setAttribute("value", "Delete");
        deleteBtn.textContent = "Delete";
        spanElement.textContent = inputValue;
        spanElement.setAttribute("data-toggle", "tooltip");
        spanElement.setAttribute("title", inputValue);
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "item-checkbox");
        li.appendChild(checkbox);
        li.appendChild(spanElement);
        li.appendChild(deleteBtn);
        li.setAttribute("id", inputValue);
        list.appendChild(li);
        input.value = "";
    }

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(!input.value) return;
        createListItem();
    })

    list.addEventListener("click", (e) => {
        const { nextSibling, nodeName, checked, parentNode } = e.target;
        const target = nextSibling;
        if (nodeName === "INPUT") {
            if (checked) {
                target.style.textDecoration = "line-through";
                target.style.color = "green";
            } else {
                target.style.textDecoration = "none";
                target.style.color = "black";
            }
        }
        if (nodeName === "BUTTON") {
            parentNode.remove();
        }
        return;
    })
})();