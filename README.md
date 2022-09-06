
# Project Instructions 

- When working on a task create a new branch DO NOT WORK IN MASTER

### Steps for creating a new branch off of master
- First go into your project directory
```
cd CSBrand
```
-  Then you want to create a new branch
```
git checkout -b yourBranchName
```
### (Front-end) Steps for when creating a new screen or component
- For every new component that we are adding to the project, create a new folder in the /components folder
    - For example if we want to create a new component card we would create a folder Card with the following files in it
    ```
  Components/
            Card/
                Card.js
                Card.css
    ```
- For every new screen/page create a new folder in /screens folder
    ```
    Screens/
            DashboardScreen/
                DashboardScreen.js
                DashboardScreen.css
    ```

#### (Front-end) EXTRA STUFF **not important - Commamd for generating component and screen files (Mac OS only) 
- There is a command in the scripts of the package.json called `gen-comp` and `gen-screen` that allows you to generate either a screen or component folder with the .jsx and .css file
- In order to use it you must enter like so into the terminal:
For new Component: 
```
name=<ENTER NAME OF FILE HERE> npm run gen-comp
```
For new Screen:
```
name=<ENTER NAME OF FILE HERE> npm run gen-screen
```
Example:
```
name=Footer npm run gen-comp
```
Result: This will generate a folder inside of the Components folder named Footer and the folder will contain the files Footer.jsx and Footer.css
