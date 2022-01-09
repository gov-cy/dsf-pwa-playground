/**
 * On window load
 */
 $(window).on('load', function() { 
            
  //get data from json
  $.getJSON( "data/pages.json", function( data ) {
      //set data to model
      appModel.siteOptions = data;
      //language code
      if ((!localStorage.DDSlanguageCode) || (localStorage.DDSlanguageCode == 'undefined')) {
          localStorage.DDSlanguageCode = "el";
      }
      //initialize router
      appRouter.init();    
  });

});


/**
* Router class
*/
var appRouter = {
  /**
   * Initializes the router
   */
  init : function() {
      //use sammy for hashed urls
      Sammy(function () {
          var app = this;
          //-------------#home----------------------------
          this.get('#home', function () {
              appView.renderPage(appModel.siteOptions.defaultPage);
          });
          //------------#p-Pages---------------------------
          $.each(appModel.siteOptions["pages"], function (i, route_args) {
              app.get('#p/' + route_args.id, function () {
                  appView.renderPage(route_args.id);
              });
          });
          //-------------/----------------------------
          //default
          this.get('', function () { this.app.runRoute('get', '#home') });
      }).run();
  }
}

/**
* The model class
*/
var appModel = {
  /** The site options object as loaded from the server */
  siteOptions: null,
  /** The current pages form id */
  currentPageId : null,
  /** The current submit id */
  currentSubmitId : null,
  /** The current form object */
  currentFormObj : null,
  /** The current route */
  currentRoute: null,
  /** The count of the fetch requests */
  fetchCount : 0
};

/**
* The view class
**/

var appView = {
  /**
   * Render site stuff like menus header and footer
   **/
  renderSiteStuff : function(){
      //render header footer
      if (DSFTemplates.header) $('#headerContainer').html(DSFTemplates.header[localStorage.DDSlanguageCode]);
      if (DSFTemplates.footer) $('#footerContainer').html(DSFTemplates.footer[localStorage.DDSlanguageCode]);
      //render layouts
      $('#mainContainer').html(DSFTemplates.layouts[appModel.siteOptions.pages[appModel.currentPageId].layout]);
      //render menus
      for (var i = 0; i < appModel.siteOptions.pages[appModel.currentPageId].menus.length; i++) {
        appView.showMenu(appModel.siteOptions.menus[appModel.siteOptions.pages[appModel.currentPageId].menus[i]]);
      }
  },
  /**
   * Clears the screen
   **/
  clearScreen: function() {
      $('#mainContainer').html("");
      $('#headerContainer').html("");
      $('#footerContainer').html("");
      $('#sideMenu').html("");
      $('#topMenu').html("");
      $('#main').html("");
  },
  /**
   * Renders the page 
   * 
   * @param {string} pageId the id of the page to be rendered
   */
  renderPage:function(pageId) {
      //set current values
      appModel.currentPageId = pageId;
      //clear everything
      appView.clearScreen();
      //render site stuff
      appView.renderSiteStuff();
      //page bindings
      appView.globalBindings();
      
      //Markdown with Pagedown		      
      //for all markdowns      
      for (var i = 0; i < appModel.siteOptions.pages[pageId].MDcontent.length; i++) {
        appView.renderMarkDownContent(appModel.siteOptions.pages[pageId].MDcontent[i].MDFile[localStorage.DDSlanguageCode], 
            appModel.siteOptions.pages[pageId].MDcontent[i].DOMId)
      }

      //------ DSF Components START------------------
      //Render components
      if (appModel.siteOptions.pages[pageId].DSFcomponents) {
        //for all components
        var DSFComponents = "";
        for (var i = 0; i < appModel.siteOptions.pages[pageId].DSFcomponents.components.length; i++) {
            //change label language
            appModel.siteOptions.pages[pageId].DSFcomponents.components[i].langLabel = 
                appModel.siteOptions.pages[pageId].DSFcomponents.components[i].label[localStorage.DDSlanguageCode];
            //render using mustache
            DSFComponents += Mustache.render
            (DSFTemplates.componentTemplates[appModel.siteOptions.pages[pageId].DSFcomponents.components[i].type]
                , appModel.siteOptions.pages[pageId].DSFcomponents.components[i])
        }
        //render on page
        $("#"+appModel.siteOptions.pages[pageId].DSFcomponents.DOMId).html(DSFComponents);
      }
      //------ DSF Components END------------------
      
      //highlight hack to display html highlighter
      document.querySelectorAll("code").forEach(function(element) {
          element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      });
  },
  /**
   * Render Markdown content 
   * @param {string} MDFile markdown content file
   * @param {string} MDDOMId DOM element id to render markdown
   */
  renderMarkDownContent: function (MDFile, MDDOMId){
    //Markdown with Pagedown		
    // create a pagedown converter - regular and sanitized versions are both supported
    //var converter = new Markdown.getSanitizingConverter();
    var converter = new Markdown.Converter();
    // tell the converter to use Markdown Extra
    Markdown.Extra.init(converter, {highlighter: "highlight"});
        
    //get markdown .MD
    $.get(MDFile, function(textData, status) { 
        //render markdown
        $("#"+MDDOMId).html(converter.makeHtml(textData ));
        
        hljs.highlightAll(); 
    });    
  },
  /**
   * Show the  menu according to the data 
   * @param {*} menuObj the menu object 
   * @param {*} menuElementId the DOM element id to render the menu
   */
  showMenu: function  (menuObj,menuElementId) {
      var menuItems=menuObj.items;
      var menuElementId = menuObj.DOMId;
      var mainNavItems ="";
      $.each( menuItems, function( index, value ){
          var classHTML = (value.id==appModel.currentPageId?'class="nav-link active" aria-current="page"':'class="nav-link"')
          mainNavItems += '<li class="nav-item"><a '+classHTML+' href="'+value.url+'">'+value.label[localStorage.DDSlanguageCode]+'</a></li>';
          });
      $('#'+menuElementId).html(mainNavItems);
  }, 
  /**
   * Handles global bindings such as change language
   */
  globalBindings:function() {
      //bindings change language
      $('#changeLangSel').on('change', function() {
          //change language id
          localStorage.DDSlanguageCode = this.value;
          // re render 
          appView.renderPage(appModel.currentPageId);
      });
  }
};