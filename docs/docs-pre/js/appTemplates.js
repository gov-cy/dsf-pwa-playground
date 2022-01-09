DSFTemplates = 
{
    "layouts": {
        "Max-width" : "<article id='main'></article><article id='components'></article>"
        ,"One-third + Two-thirds + Sidemenu" : "<div class='row'><article class='col-md-9 order-md-last' id='main'></article>"
            +"<aside class='col-md-3 order-md-first'><nav class='nav flex-column' id='sideMenu'></nav></aside></div>"
    },
    "header" : {
        "en": "<div class='row'>"
        + "<header class='govcy-header'>"
        + "<a href='#' class='govcy-header-logo'> <img/></a>"
        + "<form>"
        + "<select id='changeLangSel' name='govcy-header-lang-menu' class='govcy-header-lang-menu'>"
        + "<option value='en' selected>EN</option>"
        + "<option value='el'>EL</option>"
        + "</select>"
        + "</form>"
        + "<input class='govcy-header-menu-btn' type='checkbox' id='menu-btn' />"
        + "<label class='govcy-header-menu-icon' for='menu-btn'>Menu<span class='material-icons carot-icon'>"
        + "arrow_drop_down"
        + "</span></label>"
        + "<label class='govcy-header-service-name'> <span>Design System</span></label>"
        + "<ul class='govcy-header-menu'>"
        + "<li><a href='#'>Contact Us</a></li>"
        + "</ul>"
        + "</header>"
        + "</div>"
        ,"el" : "<div class='row'>"
        + "<header class='govcy-header'>"
        + "<a href='#' class='govcy-header-logo'> <img/></a>"
        + "<form>"
        + "<select id='changeLangSel' name='govcy-header-lang-menu' class='govcy-header-lang-menu'>"
        + "<option value='en'>EN</option>"
        + "<option value='el' selected>EL</option>"
        + "</select>"
        + "</form>"
        + "<input class='govcy-header-menu-btn' type='checkbox' id='menu-btn' />"
        + "<label class='govcy-header-menu-icon' for='menu-btn'>Μενού<span class='material-icons carot-icon'>"
        + "arrow_drop_down"
        + "</span></label>"
        + "<label class='govcy-header-service-name'> <span>Design System</span></label>"
        + "<ul class='govcy-header-menu'>"
        + "<li><a href='#'>Επικοινωνία</a></li>"        
        + "</ul>"
        + "</header>"
        + "</div>"
    },
    "footer" : {
        "en" : "<footer class='py-3 my-4 bg-light border-top'>  <p class='justify-content-center mb-0 text-muted text-center'> <a class='text-muted' href='#'>Terms and Conditions</a>&nbsp;/&nbsp;      <a class='text-muted' href='#'>Accessibility</a>&nbsp;/&nbsp;      <a class='text-muted' href='#'>Data protection</a>  </p> <p class='justify-content-center mb-0 text-muted text-center'>     Built by the <a class='text-muted' href='#'>DSF Design System team</a>&nbsp;/&nbsp; </p>  <p class='justify-content-center mb-0 text-muted text-center'>     <img class='pe-3' src='img/thyreos.gif' alt='Cyprus Government'> © Republic of Cyprus, 2021 </p> </footer>"
        ,"el" : "<footer class='py-3 my-4 bg-light border-top'>  <p class='justify-content-center mb-0 text-muted text-center'> <a class='text-muted' href='#'> Όροι χρήσης</a>&nbsp;/&nbsp;      <a class='text-muted' href='#'>Προσβασιμότητα</a>&nbsp;/&nbsp;      <a class='text-muted' href='#'>Προστασία Προσωπικών Δεδομένων</a>  </p> <p class='justify-content-center mb-0 text-muted text-center'>     Ανάπτυξη <a class='text-muted' href='#'>DSF Design System team</a>&nbsp;/&nbsp; </p>  <p class='justify-content-center mb-0 text-muted text-center'>     <img class='pe-3' src='img/thyreos.gif' alt='Cyprus Government'> © Κυπριακή Δημοκρατία, 202 </p> </footer>"
    },
    "componentTemplates" : {
        "text": "<label for='{{name}}' class='form-label'>{{langLabel}}</label>"
            +"<input type='text' class='form-control' name='{{name}}'"
                +"{{#id}}id='{{id}}'{{/id}}"
                +"{{#placeholder}}placeholder='{{placeholder}}'{{/placeholder}}"
                +"{{#maxlength}} maxlength={{maxlength}}{{/maxlength}}>",
        "button" : "<button type='button' class='btn btn-primary'{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</button>",
        "paragraph" : "<p{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</p>", 
        "paragraphHTML" : "<p{{#id}} id='{{id}}'{{/id}}>{{{langLabel}}}</p>", 
        "h1" : "<h1{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h1>",
        "h2" : "<h2{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h2>",
        "h3" : "<h3{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h3>",
        "h4" : "<h4{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h4>",
        "h5" : "<h5{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h5>",
        "h6" : "<h6{{#id}} id='{{id}}'{{/id}}>{{langLabel}}</h6>",
        "table" : "<p>{{langLabel}}</p>"
        + "<table class='table'>"
        + "<thead><tr>"
            + "{{#head}}<th>{{.}}</th>{{/head}}"
        + "</tr></thead>"
        + "<tbody>"
            + "{{#data}}<tr>{{#.}}<td>{{.}}</td>{{/.}}</tr>{{/data}}"
        + "</tbody>"
        + "</table>"
    } 
};