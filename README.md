# SomeCypress-Demos
Worked through a Cypress framework as an alternative to rspec framework and the need to do so much ruby gem fixing.  Particularly when targeting shadow roots and other dynamic elements.


# Instructions for running files from command line
1. go to codespaces for whatever is the target service to ensure I don't have any build artifacts running that can get in the way of setup
	*1.* https://github.com/codespaces
2. Open codespace (in vscode desktop ; has best results)
3. split terminal when it finishes building (into 3 terminals ; 1 for yarn start:ci ; 1 for cypress open ; 1 for coding/git pushing
4. In first terminal ; run yarn start:ci
	*1.* If there is an error ; run yarn install or yarn install-components
5. Once successful ; your local host 8080 web browser page should show a blank components (after you login)
	*1.* http://localhost:8080/
6. In the second terminal ; run $(npm bin)/cypress open
7. Once successful ; your local host 4024 web browser page should show a the complenent (context json bit)
	*1.* http://localhost:4204/
