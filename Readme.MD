#
<span style="display:block;text-align:center">

[![Made With][made-with-shield]][made-with-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</span>

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/kanitmann/theoryJS">
    <img src="./img/Thinkjs.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Theory-JS</h3>

  <p align="center">
    TheoryJS is a CLI tool to help you quickly save your thoughts directly from your terminal.
    <br />
    <a href="https://github.com/kanitmann/theoryJS"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kanitmann/theoryJS">View Demo</a>
    ·
    <a href="https://github.com/kanitmann/theoryJS/issues">Report Bug</a>
    ·
    <a href="https://github.com/kanitmann/theoryJS/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
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
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![TheoryJS][product-screenshot]](https://github.com/kanitmann/theoryJS)

### Built With

- [NodeJS](https://nodejs.org/en/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
[![TheoryJS][product-installation]](https://github.com/kanitmann/theoryJS)
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kanitmann/theoryJS.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install `theoryJS` package as global package
   ```sh
   npm install -g .
   ```
[![TheoryJS][product-screenshot]](https://github.com/kanitmann/theoryJS)
<!-- USAGE EXAMPLES -->

## Usage

After installing the package, you can easily open the help menu by typing `theoryJS --help` in the terminal.

- Running the help menu on terminal
   ```sh
   theory --help
   ```
[![TheoryJS][product-screenshot]](https://github.com/kanitmann/theoryJS)

- Writing memo to a file
   ```sh
   theory -m "This is a test"
   ```
[![TheoryJS][product-screenshot2]](https://github.com/kanitmann/theoryJS)


A 'memo folder' is created once you run `theoryJS -m` for the first time. 

[![TheoryJS][product-screenshot3]](https://github.com/kanitmann/theoryJS)


<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/kanitmann/theoryJS/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the GNU GPL3.0 License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Kanit Mann](https://github.com/kanitmann/)

> Made with 💙 by Kanit Mann

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/kanitmann/theoryJS.svg?style=for-the-badge
[contributors-url]: https://github.com/kanitmann/theoryJS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kanitmann/theoryJS.svg?style=for-the-badge
[forks-url]: https://github.com/kanitmann/theoryJS/network/members
[stars-shield]: https://img.shields.io/github/stars/kanitmann/theoryJS.svg?style=for-the-badge
[stars-url]: https://github.com/kanitmann/theoryJS/stargazers
[license-shield]: https://img.shields.io/github/license/kanitmann/theoryJS?style=for-the-badge&logo=appveyor
[issues-shield]: https://img.shields.io/github/issues/kanitmann/theoryJS.svg?style=for-the-badge
[issues-url]: https://github.com/kanitmann/theoryJS/issues
[license-url]: https://github.com/kanitmann/theoryJS/blob/master/LICENSE.txt
[made-with-shield]: https://img.shields.io/github/languages/top/kanitmann/theoryJS?style=for-the-badge
[made-with-url]: https://shields.io/github/languages/top/kanitmann/theoryJS.svg?style-for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kanitmann
[product-screenshot]: img/Theoryjs_help.png
[product-screenshot2]: img/Theoryjs_memo.png
[product-screenshot3]: img/MemoFolder.png
[product-installation]: img/Global_Installation.png