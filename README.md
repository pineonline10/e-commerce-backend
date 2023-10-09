# E-commerce Backend

This is the backend component of an e-commerce application. It provides a RESTful API for managing products, categories, and tags in an e-commerce store. The backend is built using Node.js, Express.js, and Sequelize ORM for interacting with the database.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The e-commerce backend is a critical component of any online store. It provides the necessary functionality for managing products, categories, and tags, which are essential for a seamless shopping experience. This backend system is designed to be robust, scalable, and easy to use.

## Features

- **Product Management:** Create, read, update, and delete products. Each product can have a name, price, and belong to one or more categories and tags.

- **Category Management:** Create, read, update, and delete product categories.

- **Tag Management:** Create, read, update, and delete tags for products.

- **Database Integration:** Uses Sequelize ORM to interact with a relational database.

- **Validation and Error Handling:** Includes input validation and error handling for robust API endpoints.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure you have Node.js installed on your system.

- **Database:** You should have a MySQL database set up and configure the database connection in the `config/connection.js` file.

## Installation

To install and run the project locally, follow these steps:
