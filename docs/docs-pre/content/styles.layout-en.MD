# Layout
Layouts section concerns content that resides inside the `<main>` element. 

## Max-width layout
This layout uses one column and takes up the full size of the `<main>`. To be used when there is no need for a side menu. 

Sample HTML Code

```html
<div class="container-md">
    <div class="row">                        
        <article class="col-md-12"></article>
    </div>
</div>
```

<div class="example-box">
  <div class="container-md">
      <div class="row">                        
          <article class="col-md-12 example-box-inner">	&lt;article&gt;</article>
      </div>
</div>
</div>

## One-third + Two-thirds layout
Use this page layout for services that need a side menu. 

The `<aside>` container must appear on the left of the `<article>` container on Desktop screens and first on mobile screens. It’s width must take ⅓ of the `service` section. 

The `<article>` container must appear on the right of the `<aside>` container on Desktop screens and second on mobile screens.It’s width must take ⅔ of the `service` section. 

Sample HTML Code

```html
<div class="container-md">
    <div class="row">
        <article class="col-md-9 order-md-last"></article>
        <aside class="col-md-3 order-md-first"></aside>
    </div>
</div>
```

<div class="example-box">
  <div class="container-md">
    <div class="row">
        <article class="col-md-9 order-md-last"><div class="example-box-inner">&lt;article&gt;</div></article>
        <aside class="col-md-3 order-md-first"><div class="example-box-inner">&lt;aside&gt;</div></aside>
    </div>
  </div>
</div>
