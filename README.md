# DOM Manipulation Mastery 🚀

Welcome to the **DOM Manipulation** repository! This project serves as a comprehensive guide, reference, and playground for understanding how to interact with the Document Object Model (DOM) using Vanilla JavaScript. It covers everything from basic element selection to advanced event handling and dynamic interface rendering.

## 📌 Features

*   **Element Selection:** Examples using `querySelector`, `querySelectorAll`, `getElementById`, and class/tag selectors.
*   **Style & Class Modifications:** Dynamic CSS injections, toggling classes via `classList`, and inline styling.
*   **Structure Modification:** Creating, appending, replacing, and removing HTML nodes programmatically.
*   **Event Handling:** Event listeners, event bubbling, capturing, and delegation techniques.
*   **Traversing the DOM:** Navigating through parent, child, and sibling elements.

## 🛠️ Tech Stack

*   **HTML5:** Semantic structural markup.
*   **CSS3:** Clean layouts and interactive transitions.
*   **JavaScript (ES6+):** Vanilla DOM API execution.

## 🚀 Getting Started

To explore and test these concepts locally, follow these steps:

### 1. Clone the Repository
```bash
git clone github.com
```

### 2. Navigate into the Project Folder
```bash
cd DOM-manipulation
```

### 3. Run the Files
Simply double-click the `index.html` file to open it in your preferred web browser, or use the **Live Server** extension in VS Code for live-reloading.

## 📂 Project Structure

```text
DOM-manipulation/
│
├── index.html          # Main HTML structure containing practice elements
├── styles.css          # Core layout rules and transitional styling
└── script.js           # DOM manipulation code blocks and event listeners
```

## 💡 Code Cheat Sheet Examples

### 1. Creating and Appending Elements
```javascript
const newElement = document.createElement('div');
newElement.classList.add('card');
newElement.innerText = 'Hello DOM!';
document.body.appendChild(newElement);
```

### 2. Event Delegation (Efficient Listening)
```javascript
document.querySelector('#parent-list').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});
```

## 🤝 Contributing

Contributions are highly welcome! If you have a specific DOM pattern or mini-project to add:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/NewPattern`).
3. Commit your changes (`git commit -m 'Add New DOM Pattern'`).
4. Push to the branch (`git push origin feature/NewPattern`).
5. Open a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
