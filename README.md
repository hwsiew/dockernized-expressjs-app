# Dockernized ExpressJS App

Dockernized and tech-stack agnostic ExpressJS app using monorepo structure to kick start your application development real quick.

## What is Monorepo
"A monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software development strategy where code for many projects is stored in the same repository." by Wikipedia.

Do not confuse monolithic architecture with monorepo. While these projects in monorepo may be related, they are often logically independent and run by different teams.

## Prerequisites
- Install [NodeJS](https://nodejs.org/en/download/)
- Install Docker
	- [Mac](https://docs.docker.com/docker-for-mac/install/)
	- [Window](https://docs.docker.com/docker-for-windows/install/)
	- [Linux](https://docs.docker.com/engine/install/centos/)

## Get Started
This assuemes you have all the prerequisites ready.
1. `npm install` require packages.
2. `npm run init` to create a .env environment file. It is safe to regenerate same file with different value if necessary.
3. Start docker containers
	- Development mode: `npm run docker:up:dev`
	- Production mode: `npm run docker:up`
	- to build the Dockerfile while booting up append `-- --build`
4. Stop docker containers `npm run docker:down`