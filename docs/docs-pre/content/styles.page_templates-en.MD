# Page Templates

## Max-width 
The default maximum width is `1280px`.

## Responsive breakpoint
Breakpoint is the width that determines how your responsive layout behaves across devices. The default breakpoint is `≥768px`.

## Page templates
All pages must use the following structure inside the `<body>` tag. The page width is on the `max-width` limit.


|Section Name |HTML Tag   | Description    |
|---|---|---|
|*Body start*|`<section id="body-start"></section>`|To be used to render the content before the `<header>` (i.e. cookie consent). Width must be fluid, same as the viewport.|
|*Header*|`<header></header>`|To be used as the page header (LINK). Width must be fluid, same as the viewport.|
|*Service*|`<section id="before-main"> </section>`|To be used to render the content before the `<main>` (i.e. back link (LINK)) . Must comply with the `max-width` reference above and be placed i the center of the viewport. |
|*Main*|`<main></main>`|To be used to render the service content (i.e. question page (LINK)). Must comply with the `max-width` reference above and be placed in the center of the viewport.|
|*Footer*|`<footer></footer>`|To be used as the page footer (LINK). Width must be fluid, same as the viewport|
|*Body end*|`<section id="body-end"></section>`|To be used to render the content after the `<footer>` (i.e. cookie consent). Width must be fluid, same as the viewport.|

Sample HTML Code:

```html
<body>
  <!-- body-start -->
  <section id="body-start"></section>
  <!-- header -->
  <header></header>
  <!-- before-main -->
  <div class="container-md">
      <div class="row">
          <section id="before-main" class="col-md-12"></section>
      </div>
  </div>
  <!-- main -->
  <div class="container-md">
      <div class="row">
          <main class="col-md-12"></main>
      </div>
  </div>
  <!-- footer -->
  <footer></footer>
  <!-- body-end -->
  <section id="body-end"></section>
</body>
```

<div class="example-box">
  <!-- body-start -->
  <section id="body-start" class="example-box-inner">Body-start</section>
  <!-- header -->
  <header class="example-box-inner">Header</header>
  <!-- before-main -->
  <div class="container-md">
      <div class="row">
          <section id="before-main" class="col-md-12 example-box-inner">Before-Main</section>
      </div>
  </div>
  <!-- main -->
  <div class="container-md">
      <div class="row">
          <main class="col-md-12 example-box-inner">Main</main>
      </div>
  </div>
  <!-- footer -->
  <footer class="example-box-inner">Footer</footer>
  <!-- body-end -->
  <section id="body-end" class="example-box-inner">Body-End</section>
</div>