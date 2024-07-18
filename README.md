# React + Vite
## React Fundamentals Project: 1 (Task-App)

This project is build as 1st assignment for the learning path of **React-Fundamentals-Your-Gateway-to-Frontend-Mastery** organized by **OneYear Academy**

### Project Overview ###
Have to create a project which will have a form to create/add tasks having name to assign task, task title, and task description. A checkbox is required with text "I want to add this task" to check to activate save button to save the task.

User should able to type 100 characters as description. And a counter to count characters should show and after 100 characters user should not able to type any more.

A page to view all the tasks created from where a task data can be edited and also should be deletable.

Project will be 3 pages `Home`, `Task View` and `Contact`

To do this project have to use following. <br/>
1. Tailwind CSS is must.
2. Tostify plugin to show success/error message as toast.
2. Any other plugin required to do above task.

Steps Followed: <br/>
1. Run `npm create vite@latest`
2. Type project name, in my case `react-fundamentals-project-1-task`
3. Select `React` from the framework/library list.
4. Select `Javascript + SWC`
5. Above _commands_ will create project.
6. To enter to project directory, run `cd react-fundamentals-project-1-task`
7. Run `npm i` or `npm install`
8. Run `npm run dev` to run the project in browser.

Above will setup initial project to work with. Then installed following packages for the project.

Installation of **Tailwind CSS** <br/>

Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

To configure template paths open `tailwind.config.js` file and 
```
"./index.html",
"./src/**/*.{js,jsx,ts,tsx}",
```
between `content: [here]`

Add following Tailwind derectives to `./src/index.css` at top.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install Tostify
```
npm install --save react-toastify
```

Install React-Router-Dom
```
npm install react-router-dom 
```

Install Helmet to work with &lt;head&gt;&lt;/head&gt; elements.
```
npm i react-helmet-async
```