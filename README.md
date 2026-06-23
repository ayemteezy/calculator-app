<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ayemteezy/repo_name">
    <img src="images/logo.png" alt="Logo"  height="100">
  </a>

<h3 align="center">Calculator App</h3>
  <p align="center">
  A functional desktop web calculator built as part of The Odin Project curriculum. Features basic arithmetic, operation chaining, decimal support, and full keyboard accessibility.
    <br />
    <a href="https://github.com/ayemteezy/calculator-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ayemteezy.github.io/calculator-app/">View Demo</a>
    &middot;
    <a href="https://github.com/ayemteezy/calculator-app/issues/new?labels=bug&template=bug-report.md">Report Bug</a>
    &middot;
    <a href="https://github.com/ayemteezy/calculator-app/issues/new?labels=enhancement&template=feature-request.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
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
    <li><a href="#keyboard-shortcuts">Keyboard Shortcuts</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Calculator Screen Shot][calculator-screenshot]](https://ayemteezy.github.io/calculator-app/)

This project is part of The Odin Project's Foundations curriculum. The calculator is built entirely from scratch using vanilla HTML, CSS, and JavaScript — no libraries or frameworks.

It handles real-world edge cases like chained operations, repeated equals presses (using the last input as the repeated operand), leading zero prevention, duplicate decimal blocking, and division by zero.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features

- **Basic Arithmetic** — Addition (`+`), subtraction (`−`), multiplication (`×`), division (`÷`)
- **Remainder / Modulo** — `%` operator
- **Square Root** — `√` unary operator applied to the current number
- **Operation Chaining** — Pressing an operator mid-chain evaluates the pending expression first, then continues
- **Repeated Equals** — Pressing `=` repeatedly reuses the last second operand (e.g. `5 + 3 = = =` → `8 → 11 → 14`)
- **Decimal Support** — Prevents duplicate decimal points in both operands
- **Leading Zero Guard** — Blocks invalid inputs like `00`, `007`, etc.
- **Division / Modulo by Zero Handling** — Displays `Error` instead of crashing
- **Square Root Precision** — Results are rounded to 5 decimal places to avoid floating-point noise
- **Clear (`C`)** — Resets everything: numbers, operator, result, and display
- **Backspace (`CE`)** — Deletes the last digit; if no digit exists, removes the active operator
- **Full Keyboard Support** — All operations accessible without touching the mouse

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![HTML5][HTML5-badge]][HTML5-url]
- [![CSS3][CSS3-badge]][CSS3-url]
- [![JavaScript][JavaScript-badge]][JavaScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, clone your GitHub repository to your computer using your terminal. Navigate into the project folder and create your three core files: `index.html`, `style.css`, and `script.js`. Link your CSS stylesheet and JavaScript file within your HTML structure, then open the project in your browser to verify the setup.

### Prerequisites

No build tools, package managers, or dependencies required. Just a modern web browser.

### Installation

1. Clone the repository:

```sh
   git clone https://github.com/ayemteezy/calculator-app.git
```

2. Navigate into the project folder:

```sh
   cd calculator-app
```

3. Open `index.html` in your browser. Done.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Click buttons on the calculator or use your keyboard (see shortcuts below). The display updates in real time, showing the full expression as you type (e.g. `12×`).

After pressing `=`, typing a new digit starts a fresh calculation. Pressing an operator after `=` chains onto the result.

## Keyboard Shortcuts

| Key                | Action                                   |
| ------------------ | ---------------------------------------- |
| `0` – `9`          | Enter digit                              |
| `.`                | Decimal point                            |
| `+`                | Addition                                 |
| `-`                | Subtraction                              |
| `*`                | Multiplication (maps to `×`)             |
| `/`                | Division (maps to `÷`)                   |
| `%`                | Remainder / modulo                       |
| `r`                | Square root (`√`)                        |
| `Enter` or `=`     | Calculate result                         |
| `Backspace`        | Delete last digit / remove operator (CE) |
| `Ctrl + Backspace` | Clear all (C)                            |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

### 1. Core Logic & UI

- [x] **Basic Math Functions**: Create separate functions for add, subtract, multiply, and divide.
- [x] **The `operate` Function**: Build a function taking an operator and 2 numbers, then calling a math function.
- [x] **HTML Calculator UI**: Build a display screen with buttons for digits, operators, and equals.
- [x] **Populate Display**: Wire up number buttons to update the screen with the active display value.
- [x] **Store Input Variables**: Save the first number, operator, and second number during input sequences.
- [x] **Make It Work**: Run the `operate()` function on stored values when the user presses "=".

### 2. Advanced Logic & UX Constraints

- [x] **Operation Chaining**: Evaluate pairs immediately when a consecutive operator is pressed instead of "=".
- [x] **Decimal Point Control**: Prevent users from stringing multiple decimal points together within a single number.
- [x] **Divide-by-Zero Safety**: Display a snarky error message instead of letting the browser crash.
- [x] **Clear Button**: Implement an "AC" button to wipe all data and reset the system fresh.
- [x] **Display Overflow Fix**: Round long decimal answers so they do not spill off the screen.

### 3. Extra Credit Tasks

- [x] **Backspace Button**: Add a delete function to undo the single last typed digit.
- [x] **Keyboard Support**: Add event listeners to map physical keyboard keypresses to calculator buttons.

See the [open issues](https://github.com/ayemteezy/calculator-app/issues) for a full list of proposed features and known bugs.

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

<a href="https://github.com/ayemteezy/calculator-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ayemteezy/calculator-app" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

**Laurence Lester Cariño (Teezy)**

- Twitter/X: [@ayemteezy\_](https://x.com/ayemteezy_)
- Email: [laurencelestercarino@gmail.com](mailto:laurencelestercarino@gmail.com)
- GitHub: [ayemteezy](https://github.com/ayemteezy)

Project Link: [https://github.com/ayemteezy/calculator-app](https://github.com/ayemteezy/calculator-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) — for the project brief and curriculum
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template) — README structure inspiration
- [Shields.io](https://shields.io/) — for the badge components

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ayemteezy/calculator-app.svg?style=for-the-badge
[contributors-url]: https://github.com/ayemteezy/calculator-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ayemteezy/calculator-app.svg?style=for-the-badge
[forks-url]: https://github.com/ayemteezy/calculator-app/network/members
[stars-shield]: https://img.shields.io/github/stars/ayemteezy/calculator-app.svg?style=for-the-badge
[stars-url]: https://github.com/ayemteezy/calculator-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/ayemteezy/calculator-app.svg?style=for-the-badge
[issues-url]: https://github.com/ayemteezy/calculator-app/issues
[license-shield]: https://img.shields.io/github/license/ayemteezy/calculator-app.svg?style=for-the-badge
[license-url]: https://github.com/ayemteezy/calculator-app/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/laurence-lester-cari%C3%B1o/
[calculator-screenshot]: images/screenshot.png

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->

[HTML5-badge]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[CSS3-badge]: https://img.shields.io/badge/CSS-663399?style=for-the-badge
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[JavaScript-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
