# Github Trending Languages

Github Trending Languages is a web application built with Node.js and React that displays a list of programming languages trending on Github based on the number of repositories created for each language. 

The server-side of the application fetches data from the Github API and returns a JSON response to the client-side. The client-side then displays the list of languages and the URLs of the repositories using React components.

## Prerequisites

To run this application, you must have Node.js and NPM (Node Package Manager) installed on your machine.

## Installation

1. Clone the repository to your local machine.
2. Open a terminal window and navigate to the root directory of the project.
3. Run the command `npm install` to install the required dependencies.
4. Run the command `npm run live` to start the application.

The application will be running at `http://localhost:8080`.

## Usage

Upon visiting `http://localhost:8080`, the user will see a list of programming languages and the URLs of the repositories based on the number of repositories created for each language.

The list is sorted in descending order by the number of repositories. Clicking on a URL will open the repository in a new browser tab.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
