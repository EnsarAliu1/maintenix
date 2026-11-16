# Maintenix

## Overview

Maintenix is an early-stage project intended to support maintenance management. The current codebase contains a NestJS backend with a basic API information endpoint.

## Business Problem

Maintenance work can be difficult to coordinate when information is scattered across manual records and separate tools. Maintenix aims to provide a central place to organize this work; detailed business workflows are still to be defined and implemented.

## Technology Stack

- Node.js 24 and npm
- TypeScript and NestJS with Express
- Jest and Supertest for testing
- Oxlint and Prettier for code quality and formatting

## Project Structure

```text
maintenix/
├── backend/
│   ├── src/          # Application source code
│   ├── test/         # End-to-end tests
│   └── package.json  # Backend dependencies and scripts
├── .nvmrc            # Node.js version
└── README.md
```

## Getting Started

Install Node.js 24 and npm, then run the following commands from the project root:

```bash
cd backend
npm ci
npm run start:dev
```

The API information endpoint is available at `http://localhost:3000/api/v1` by default. Set `PORT` to use a different port.

## Project Status

Initial backend setup. A basic endpoint returns the API name, version, and status. Maintenance management features, database integration, authentication, and a frontend are not yet implemented.
