import $ from"jquery";var parent=window.parent.document;export var RemoveParamsWindow=function(){var drawer=parent.querySelector("body > div:nth-child(8) > div:nth-child(2) > div > div.GI-BUHVBCWC > div"),drawerDiv=parent.querySelector("body > div:nth-child(7) > div:nth-child(2) > div > div.GI-BUHVBPVC");null==drawerDiv||drawerDiv.remove(),null==drawer||drawer.remove(),null==drawer||drawer.classList.add("hidden"),null==drawerDiv||drawerDiv.classList.add("hidden"),null==drawerDiv||drawerDiv.classList.forEach(function(item){null==drawerDiv||drawerDiv.classList.remove(item)});// drawerDiv?.classList.add("default_container");
};export var RemoveTopBar=function(){$(".DashWindow-TopBar",parent).closest("div").addClass("hidden");// Deixa a tela do tamanho maximo para o iframe
var topBar=parent.querySelector("body > div:nth-child(7) > div:nth-child(2) > div > div.GI-BUHVBPVC.default_container > div > div > div > div > div:nth-child(3)");$(".DashWindow",parent).css({padding:"0px",top:"0px"}).removeAttr("style").prop("style",null),$(".DashWindow-Container",parent).parent("div").css({padding:"0px",top:"0px"}).removeAttr("style").prop("style",null),$(".gwt-Button",parent).css({padding:"0px"}),null==topBar||topBar.removeAttribute("style"),null==topBar||topBar.classList.add("default_container")};export var RemoveHamburguerButton=function(){$(".gwt-Button",parent).css({padding:"0px"}).addClass("hidden")};export var StyleContainer=function(){$(".raiz",parent).css({height:"100vh",width:"100vw"})};export var RemoveDashFrame=function(){RemoveHamburguerButton(),RemoveTopBar(),RemoveParamsWindow(),StyleContainer()};export var OpenInNewTab=function(forcado){void 0===forcado&&(forcado=!1),(window.parent.parent.document.querySelector(".Taskbar-container")&&!forcado||forcado)&&Object.assign(document.createElement("a"),{target:"_blank",href:window.location.href}).click()};