# Steps to reproduce crash for issue [1038329](https://bugs.chromium.org/p/chromium/issues/detail?id=1038329)

NOTE: This will only work if the machine you are on has a secondary monitor to present to. This application uses the [Presentation API](https://w3c.github.io/presentation-api/) available in Chrome. This is key to reproducing this issue.

## Step 1: Unzip the Angular projects attached to this issue.

*Chrome.Issue.1038329.Main-master.zip* contains the primary application that acts as the presentation controller.

*Chrome.Issue.1038329.Secondary-master.zip* contains the secondary application that acts as the presentation receiver.

## Step 2: Install the Angular CLI globally.

This should be run from an admin command prompt. The command is `npm install -g @angular/cli`. NOTE: this requires that [node.js](https://nodejs.org/) be installed on your machine. The LTS version of node would be best. Node is required for the following steps, too.

## Step 3: Run `npm install` for **each** code base.

This should be run from an admin command prompt, and the command prompt's current directory should be the directory where the *package.json* file is located for each code base. Run `npm install` for both code bases include with this issue.

## Step 4: Use secondary application to set up auto fill

### Step 4.1: *Offer to save passwords* should be enabled in Chrome

In Chrome Settings, under Autofill and Passwords, enable *Offer to save passwords*

### Step 4.2: Serve the secondary application.

To serve the secondary application so it can be accessed, run `npm run s` from the command prompt. Make sure the prompt's current directory is the directory where the secondary application's *package.json* file is located. 

This will use localhost port 4222 to serve the secondary application using the Angular CLI.

### Step 4.3: Set a saved username and password using secondary application

Using Chrome, navigate to http://localhost:4222/login, use any username and password, click Login. When asked by Chrome to save username and password, choose Save. Close the browser window, or tab.

**Do not stop the secondary serve process**; the primary application will access it in the following steps.

## Step 5: Use primary application to reproduce issue

NOTE: This will only work if the machine you are on has a secondary monitor to present to. This application uses the [Presentation API](https://w3c.github.io/presentation-api/) available in Chrome.

### Step 5.1: Serve the primary application.

To serve the primary application so it can be accessed, run `ng serve` from the command prompt. Make sure the prompt's current directory is the directory where the primary application's *package.json* file is located. 

This will use localhost port 4200 to serve the primary application using the Angular CLI.

### Step 5.2: Open primary application

Using Chrome, navigate to http://localhost:4200/.

### Step 5.3: Begin presentation

Click the Start button. You will be asked by Chrome to choose a display to present content; this content will come from the secondary application. The dialog/prompt will be labeled Cast localhost:4200. Choose any option from the list. Within a seconds after choosing a display the window will display the login form from the secondary application.

### Step 5.4: Reproduce crash

Click inside the Username input in the presented form. Or, tab to the form input and type any letter. Crash should occur immediately.

