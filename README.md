# Math Book Template

A template for a quarto book with the following features:

- [global tex macros](https://github.com/quarto-dev/quarto-cli/discussions/12838)
- [h5p standalone](https://github.com/tunapanda/h5p-standalone) integration
- LaTeX package [aligned-overset](https://ctan.org/pkg/aligned-overset)
- opinionated defaults (e.g. activated search, footnotes-on-hover, etc.)

## Documentation & Demo

here

## Installation

1. Use as a new template

	```bash
	quarto use template FelixBenning/math-book
	```

2. Add this to an existing quarto projects use

	```bash
	quarto add template FelixBenning/math-book
	```
	- copy the `_macro_processing.qmd` file manually and add
	
		```qmd
		{{< include _macro_processing.qmd>}}
		```

		at the top of every `.qmd` file where the global
		macros in `macros.tex` are used (make sure this file exists).
    - use the `math-book-html`and `math-book-pdf` formats.
	