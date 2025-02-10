<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/BinaryBeast007/subscription-management">
    <img src="https://img.icons8.com/fluency/96/subscription.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Subscription Management</h3>

  <p align="center">
    A tool to track, manage, and organize your subscriptions, with reminders
    <br />
    <a href="https://github.com/BinaryBeast007/subscription-management"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/BinaryBeast007/subscription-management">View Demo</a>
    &middot;
    <a href="https://github.com/BinaryBeast007/subscription-management/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/BinaryBeast007/subscription-management/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Subscription Manager is a simple, easy-to-use tool designed to help users track, manage, and organize their subscription services. Whether it's streaming platforms, software tools, or gym memberships, this app allows users to keep a close eye on all recurring payments in one place, ensuring they never miss a renewal or forget to cancel a subscription.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![NodeJS][NodeJS]][NodeJS-url]
- [![Express][Express]][Express-url]
- [![MongoDB][MongoDB]][MongoDB-url]
- [![Docker][Docker]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of the project up and running, follow these steps. This guide will help you set up the environment for **Subscription Management**

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (Recommended version: >= 22.12)

  - Install from: [Node.js][NodeJS-url]

- **MongoDB** (for database management)

  - Install from: [MongoDB][MongoDB-url]

- **npm** (Node package manager)

  - If you have Node.js installed, npm should be installed automatically. You can verify by running:
    ```bash
    npm -v
    ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/BinaryBeast007/subscription-management.git
   ```
2. Navigate into the project directory:
   ```sh
   cd subscription-management
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Set up environment variables: Create a .env file in the root directory of the project and add the following configuration:

   ```sh
   # PORT
   PORT=5500
   SERVER_URL="http://localhost:5500"

   # ENVIRONMENT
   NODE_ENV='development'

   # DATABASE
   DB_URI="mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@cluster0.example.mongodb.net/?retryWrites=true&w=majority"

   # JWT AUTH
   JWT_SECRET="dummy_jwt_secret_key"
   JWT_EXPIRES_IN="1d"

   # ARCJET
   ARCJET_KEY="ajkey_demo_01jkkdm882f67t2yz6qe4rzsdc"
   ARCJET_ENV="development"

   # UPTASH
   QSTASH_URL="https://qstash.upstash.io"
   QSTASH_TOKEN="ey_demo_token"
   QSTASH_CURRENT_SIGNING_KEY="sig_demo_key_1"
   QSTASH_NEXT_SIGNING_KEY="sig_demo_key_2"

   # NODEMAILER
   EMAIL_USER="youremail@example.com"
   EMAIL_PASSWORD="your-email-password"
   ```

5. Start the development server: Run the following command to start the application:
   ```sh
   npm run dev
   ```
   The application should now be running locally on `http://localhost:5500`
6. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin BinaryBeast007/subscription-management
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

The **Usage** section is currently in progress and will be updated with detailed examples and instructions shortly. Please stay tuned for further updates.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

The roadmap is under development, and specific details will be added soon. Please check the [open issues](https://github.com/BinaryBeast007/subscription-management/issues) for proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/BinaryBeast007/subscription-management/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=BinaryBeast007/subscription-management" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [License][License-url] for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/BinaryBeast007/subscription-management.svg?style=for-the-badge
[contributors-url]: https://github.com/BinaryBeast007/subscription-management/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/BinaryBeast007/subscription-management.svg?style=for-the-badge
[forks-url]: https://github.com/BinaryBeast007/subscription-management/network/members
[stars-shield]: https://img.shields.io/github/stars/BinaryBeast007/subscription-management.svg?style=for-the-badge
[stars-url]: https://github.com/BinaryBeast007/subscription-management/stargazers
[issues-shield]: https://img.shields.io/github/issues/BinaryBeast007/subscription-management.svg?style=for-the-badge
[issues-url]: https://github.com/BinaryBeast007/subscription-management/issues
[license-shield]: https://img.shields.io/github/license/BinaryBeast007/subscription-management.svg?style=for-the-badge
[license-url]: https://github.com/BinaryBeast007/subscription-management/blob/main/LICENSE
[product-screenshot]: images/screenshot.png
[NodeJS-url]: https://nodejs.org/
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Express-url]: https://expressjs.com/
[Express]: https://img.shields.io/badge/express-%23E0234E.svg?style=for-the-badge&logo=express&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[MongoDB]: https://img.shields.io/badge/mongodb-%23316192.svg?style=for-the-badge&logo=mongodb&logoColor=white
[Docker-url]: https://www.docker.com/
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[License-url]: https://github.com/BinaryBeast007/subscription-management/blob/main/LICENSE
