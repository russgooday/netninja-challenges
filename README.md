# NetNinja Challenge 02

### Email input box with animated tick and border colour validation.

I have created two versions, one purely HTML and CSS and a second *js-variation*, that implements *debounce* and utilises [HTMLInputElement.checkValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity) to validate the email input.

### Regular Expressions
The brief for the challenge required creating a regular expression to validate the email — obviously a good learning exercise. That said I personally prefer to use the built-in browser validation for the front end, but in the non-js version I have included a pattern from the [W3C working draft](https://www.w3.org/TR/2012/WD-html-markup-20120329/input.email.html) — essentially the same thing.
