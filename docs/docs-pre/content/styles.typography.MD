## Typography 

## Base fonts 
Unless otherwise stated, use the following font properties for the default body fonts.

|Propery     |Value       |
|------------|------------|
|font-family | Roboto     |
|font-size   | normal     |
|color       | [body](#p/styles.colour)|

## Responsive text
Use the [Responsive Font Size (RFS)](https://github.com/twbs/rfs/) engine to resize font sizes. The engine generates CSS that automatically calculates the appropriate values for your font sizes based on the dimensions of the browser viewport. Use the generated CSS for `paragraphs` and `headings` CSS.

## Paragraph
To be used for paragraph text. Use the default fonts described above.

## Headings
To be used for headings h1, h2, h3, h4, h5 and h6. Use the default fonts described above with the following differences. 

- Font-Weight: 500;
- Font-Size: The size is calculated in relation to the base font size as described in the table below. 

|Heading |Size                     |
|--------|-------------------------|
|h1      | $font-size-base * 2.5;  |
|h2      | $font-size-base * 2;    |
|h3      | $font-size-base * 1.75; |
|h4      | $font-size-base * 1.5;  |
|h5      | $font-size-base * 1.25; |
|h6      | $font-size-base         |

Sample HTML Code

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Unordered list <ul>
To be used for unordered vertical lists (i.e. bullet points). 

Use the following properties on `<ul>` html tag.
|Propery         |Value |
|----------------|------|
|list-style-type |disk  |
|margin-top      |0     |
|margin-bottom   |1rem  |
|padding-left    |2rem  |

Use the following properties on `<li>` html tag.
|Propery         |Value      |
|----------------|-----------|
|display         |list-item  |

Sample HTML Code
```html
<ul>
    <li>one</li>
    <li>two</li>
</ul>
```

## Ordered list <ol>
To be used for ordered vertical lists. 

Use the following properties on `<ol>` html tag.
|Propery         |Value   |
|----------------|--------|
|list-style-type |decimal |
|margin-top      |0       |
|margin-bottom   |1rem    |
|padding-left    |2rem    |

Use the following properties on `<li>` html tag.
|Propery         |Value      |
|----------------|-----------|
|display         |list-item  |

Sample HTML Code
```html
<ol>
    <li>one</li>
    <li>two</li>
</ol>
```
