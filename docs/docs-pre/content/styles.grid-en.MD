# Grid system 
Use the grid system to lay out the content on your service’s pages.

The system uses 3 columns to lay out the content in the desktop viewport. The content in the three columns is laid out vertically on viewports smaller than the defined [responsive breakpoint](#p/styles.page_templates). 

Sample HTML Code:

```html
<div class="container-md">
    <div class="row">
        <div class="col-md-4">1st Column</div>
        <div class="col-md-4">2nd Column</div>
        <div class="col-md-4">3rd Column</div>
    </div>
</div>
```

<div class="example-box">
  <div class="container-md">
      <div class="row">
          <div class="col-md-4 example-box-outter"><div class="example-box-inner">1st Column</div></div>
          <div class="col-md-4 example-box-outter"><div class="example-box-inner">2nd Column</div></div>
          <div class="col-md-4 example-box-outter"><div class="example-box-inner">3rd Column</div></div>
      </div>
  </div>
</div>

## Grid gutter and padding
Gutters are the gaps between column content, created by horizontal padding. The gutter width is **24px**. This means that each column must have the following properties, that also define their  inner content spacing:

|Propery       |Value |
|--------------|------|
|padding-right | 12px |
|padding-left  | 12px |