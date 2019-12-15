[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/luksluki/dilo-final-bookstore-fe">
    <img src="https://via.placeholder.com/80" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Book Store Web App</h3>

  <p align="center">
    A Book Store FrontEnd Web App created with react.js!
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/luksluki/dilo-final-bookstore-be">View BackEnd</a>
    ·
    <a href="https://github.com/luksluki/dilo-final-bookstore-fe/issues">Report Bug</a>
    ·
    <a href="https://github.com/luksluki/dilo-final-bookstore-fe/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Structure](#structure)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

Project Final in DILO BCamp.
To Create Book Store Online, including FrontEnd BackEnd.

Here's the assessment:
+ Pengguna / User
    - pengguna dapat mendaftar pada sistem.
    - pengguna dapat login pada sistem.
    - pengguna dapat melihat daftar buku.
    - pengguna dapat mencari buku.
    - pengguna dapat memfilter buku berdasarkan kategori.
    - pengguna dapat memilih buku dan menampilkan detail buku dan stok buku.
    - pengguna yang sudah login dapat membeli buku menggunakan cart.
    - stok buku berpengaruh pada transaksi pembelian oleh pengguna.

+ Admin
    - admin dapat memasukan data buku.
    - admin dapat melihat daftar pengguna.
    - admin dapat melihat data transaksi.

### Built With
* [Bootstrap](https://getbootstrap.com)
* [React.js](https://reactjs.org)
* [Node.js](https://nodejs.org)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
#### On Mac
This is the list things you need to use the software and how to install them.
* npm
* mongoodb
* react

### Installation

1. Clone the repo
```sh
git clone https://github.com/luksluki/dilo-final-bookstore-fe.git
```
2. Install NPM packages
```sh
npm install
```
3. Start the server (default port is 3000)
```sh
npm start
```

### Structure
- POST Admin.Login
    - Admin Panel
        - POST Book
        - GET Pengguna
        - GET Transaksi
- POST User.Daftar
- POST User.Login
    - Dashboard User
        - GET Daftar Buku
        - GET Daftar Buku / where
        - GET Buku / id
        - GET User.buku
        - POST User.buku
        - POST transaksi

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/luksluki/dilo-final-bookstore-fe/issues) for a list of proposed features (and known issues).



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

None.



<!-- CONTACT -->
## Contact

1. Fanji - [@fanjiles](https://t.me/fanji) - fanji@gmail.com
2. Irfan Rona - [@irfanrona](https://t.me/irfanrona) - irfanrona@outlook.com
3. Luki - [@luksluki](https://t.me/luki) - luksluki@gmail.com
4. Teguh - [@teguh](https://t.me/teguh) - teguh@gmail.com
5. Oghink - [@oghink](https://t.me/oghink) - oghink@gmail.com

- Project Link Backend: [https://github.com/luksluki/dilo-final-bookstore-be](https://github.com/luksluki/dilo-final-bookstore-be)
- Project Link Frontend: [https://github.com/luksluki/dilo-final-bookstore-fe](https://github.com/luksluki/dilo-final-bookstore-fe)





<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/badge/Contributors-5-green
[contributors-url]: https://github.com/luksluki/dilo-final-bookstore-fe/graphs/contributors
[issues-shield]: https://img.shields.io/badge/Issues-0%20Open-green
[issues-url]: https://github.com/luksluki/dilo-final-bookstore-fe/issues