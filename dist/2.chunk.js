/*! v.Add-in Playground 1.0.0.1482138429992 © Microsoft */
webpackJsonp([2],{38:function(n,o,a){function addStylesToDom(n,o){for(var a=0;a<n.length;a++){var t=n[a],i=e[t.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](t.parts[r]);for(;r<t.parts.length;r++)i.parts.push(addStyle(t.parts[r],o))}else{for(var c=[],r=0;r<t.parts.length;r++)c.push(addStyle(t.parts[r],o));e[t.id]={id:t.id,refs:1,parts:c}}}}function listToStyles(n){for(var o=[],a={},e=0;e<n.length;e++){var t=n[e],i=t[0],r=t[1],c=t[2],l=t[3],d={css:r,media:c,sourceMap:l};a[i]?a[i].parts.push(d):o.push(a[i]={id:i,parts:[d]})}return o}function insertStyleElement(n,o){var a=r(),e=d[d.length-1];if("top"===n.insertAt)e?e.nextSibling?a.insertBefore(o,e.nextSibling):a.appendChild(o):a.insertBefore(o,a.firstChild),d.push(o);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(o)}}function removeStyleElement(n){n.parentNode.removeChild(n);var o=d.indexOf(n);o>=0&&d.splice(o,1)}function createStyleElement(n){var o=document.createElement("style");return o.type="text/css",insertStyleElement(n,o),o}function createLinkElement(n){var o=document.createElement("link");return o.rel="stylesheet",insertStyleElement(n,o),o}function addStyle(n,o){var a,e,t;if(o.singleton){var i=l++;a=c||(c=createStyleElement(o)),e=applyToSingletonTag.bind(null,a,i,!1),t=applyToSingletonTag.bind(null,a,i,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=createLinkElement(o),e=updateLink.bind(null,a),t=function(){removeStyleElement(a),a.href&&URL.revokeObjectURL(a.href)}):(a=createStyleElement(o),e=applyToTag.bind(null,a),t=function(){removeStyleElement(a)});return e(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap)return;e(n=o)}else t()}}function applyToSingletonTag(n,o,a,e){var t=a?"":e.css;if(n.styleSheet)n.styleSheet.cssText=m(o,t);else{var i=document.createTextNode(t),r=n.childNodes;r[o]&&n.removeChild(r[o]),r.length?n.insertBefore(i,r[o]):n.appendChild(i)}}function applyToTag(n,o){var a=o.css,e=o.media;if(e&&n.setAttribute("media",e),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}function updateLink(n,o){var a=o.css,e=o.sourceMap;e&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */");var t=new Blob([a],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(t),i&&URL.revokeObjectURL(i)}var e={},t=function(n){var o;return function(){return"undefined"==typeof o&&(o=n.apply(this,arguments)),o}},i=t(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),r=t(function(){return document.head||document.getElementsByTagName("head")[0]}),c=null,l=0,d=[];n.exports=function(n,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=i()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var a=listToStyles(n);return addStylesToDom(a,o),function(n){for(var t=[],i=0;i<a.length;i++){var r=a[i],c=e[r.id];c.refs--,t.push(c)}if(n){var l=listToStyles(n);addStylesToDom(l,o)}for(var i=0;i<t.length;i++){var c=t[i];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete e[c.id]}}}};var m=function(){var n=[];return function(o,a){return n[o]=a,n.filter(Boolean).join("\n")}}()},39:function(n,o,a){var e=a(40);"string"==typeof e&&(e=[[n.id,e,""]]);a(38)(e,{});e.locals&&(n.exports=e.locals)},40:function(n,o){n.exports="main.Light {\n    background-color: #fffffe;\n}\n\nmain.Light .viewport__placeholder {\n    background-color: #fffffe;\n}\n\nmain.Dark {\n    background-color: #1e1e1e;\n}\n\nmain.Dark .viewport__placeholder {\n    background-color: #1e1e1e;\n}\n\n.profile__primary-text {\n    color: #2b579a;\n}\n\n.command__bar {\n    background: #2b579a;\n}\n\n.command__title {\n    color: #fafbfd;\n}\n\n.command__dropdown {\n    background: #dedede;\n}\n\n.command__dropdown .command__icon {\n    color: #666;\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.command__dropdown .command__icon:active,\n.command__dropdown .command__icon:hover {\n    background: #2b579a;\n    color: #fafbfd;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.command__dropdown .command__icon:active {\n    background: #2b579a;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.command__dropdown .command__icon--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.command__dropdown .command__icon--disabled:active,\n.command__dropdown .command__icon--disabled:hover {\n    background: transparent;\n}\n\n.command__dropdown .command__icon--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.command__dropdown .command__icon:hover {\n    background: #204072;\n    color: #fafbfd;\n}\n\n.command__dropdown .command__icon:active,\n.command__dropdown .command__icon:focus {\n    background: #1a355e;\n    color: #fafbfd;\n}\n\n.command__text, .command__icon {\n    color: #fafbfd;\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.command__text:active, .command__text:hover, .command__icon:active,\n.command__icon:hover {\n    background: #2b579a;\n    color: #fafbfd;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.command__text:active, .command__icon:active {\n    background: #2b579a;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.command__text--disabled, .command__icon--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.command__text--disabled:active, .command__text--disabled:hover,\n.command__icon--disabled:active, .command__icon--disabled:hover {\n    background: transparent;\n}\n\n.command__text--disabled:active, .command__icon--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.command__text:hover, .command__icon:hover {\n    background: #204072;\n    color: #fafbfd;\n}\n\n.command__text:active, .command__text:focus, .command__icon:active,\n.command__icon:focus {\n    background: #1a355e;\n    color: #fafbfd;\n}\n\n.command--light.command__bar {\n    background: #dedede;\n}\n\n.command--light .command__icon, .command--light .command__text,\n.command--light .command__title {\n    color: #666;\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.command--light .command__icon:active, .command--light .command__icon:hover,\n.command--light .command__text:active, .command--light .command__text:hover,\n.command--light .command__title:active, .command--light .command__title:hover {\n    background: #2b579a;\n    color: #fafbfd;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.command--light .command__icon:active, .command--light .command__text:active,\n.command--light .command__title:active {\n    background: #2b579a;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.command--light .command__icon--disabled,\n.command--light .command__text--disabled,\n.command--light .command__title--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.command--light .command__icon--disabled:active,\n.command--light .command__icon--disabled:hover,\n.command--light .command__text--disabled:active,\n.command--light .command__text--disabled:hover,\n.command--light .command__title--disabled:active,\n.command--light .command__title--disabled:hover {\n    background: transparent;\n}\n\n.command--light .command__icon--disabled:active,\n.command--light .command__text--disabled:active,\n.command--light .command__title--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.command--light .command__icon:hover, .command--light .command__text:hover,\n.command--light .command__title:hover {\n    background: #204072;\n    color: #fafbfd;\n}\n\n.command--light .command__icon:active, .command--light .command__icon:focus,\n.command--light .command__text:active, .command--light .command__text:focus,\n.command--light .command__title:active, .command--light .command__title:focus {\n    background: #1a355e;\n    color: #fafbfd;\n}\n\n.editor__footer .command__text .ms-Icon--Emoji2 {\n    color: #2b579a;\n}\n\n.hamburger-menu {\n    background: #f4f4f4;\n}\n\n.ms-progress-component__title {\n    color: #fafbfd;\n}\n\n.ms-Pivot-link.is-selected:before {\n    background-color: #fafbfd;\n}\n\n.ms-Dialog-main .ms-Dialog-header .ms-Dialog-title {\n    background-color: #2b579a;\n    color: #fafbfd;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child {\n    background-color: #2b579a;\n    border: #2b579a;\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child i {\n    color: #fafbfd;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child .ms-Button-label {\n    color: #fafbfd;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child:active,\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child:hover {\n    background: #204072;\n    color: #fafbfd;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child:active {\n    background: #204072;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child--disabled:active,\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child--disabled:hover {\n    background: transparent;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.panel {\n    background: #fff;\n    color: #333;\n}\n\n.panel__title {\n    color: #2b579a;\n}\n\n.panel::before {\n    color: #fff;\n}\n\n.editor__header {\n    background: #2b579a;\n}\n\n.editor__footer {\n    background-color: #2b579a;\n    color: #fafbfd;\n}\n\n.import__header {\n    background-color: #2b579a;\n}\n\n.import__main a {\n    color: #2b579a;\n}\n\n.gallery__action {\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.gallery__action h1.ms-Button-label {\n    color: #2b579a;\n}\n\n.gallery__action:active, .gallery__action:hover {\n    background: #2b579a;\n    color: #fafbfd;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.gallery__action:active {\n    background: #2b579a;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.gallery__action--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.gallery__action--disabled:active, .gallery__action--disabled:hover {\n    background: transparent;\n}\n\n.gallery__action--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.gallery__action:hover, .gallery__action:focus {\n    background-color: #2b579a !important;\n}\n\n.gallery__action:hover .ms-Button-description,\n.gallery__action:hover .ms-Button-label,\n.gallery__action:focus .ms-Button-description,\n.gallery__action:focus .ms-Button-label {\n    color: #fafbfd !important;\n}\n\n.gallery__section-title {\n    color: #2b579a;\n}\n\n.gallery-list__action {\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.gallery-list__action:active, .gallery-list__action:hover {\n    background: #2b579a;\n    color: #fafbfd;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.gallery-list__action:active {\n    background: #2b579a;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.gallery-list__action--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.gallery-list__action--disabled:active, .gallery-list__action--disabled:hover {\n    background: transparent;\n}\n\n.gallery-list__action--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.gallery-list__item:active, .gallery-list__item:hover {\n    background: #2b579a;\n}\n\n.gallery-list__item:active i, .gallery-list__item:hover i {\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.gallery-list__item:active i:active, .gallery-list__item:active i:hover,\n.gallery-list__item:hover i:active, .gallery-list__item:hover i:hover {\n    background: #204072;\n    color: #fafbfd;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.gallery-list__item:active i:active, .gallery-list__item:hover i:active {\n    background: #204072;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.gallery-list__item:active i--disabled, .gallery-list__item:hover i--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.gallery-list__item:active i--disabled:active,\n.gallery-list__item:active i--disabled:hover,\n.gallery-list__item:hover i--disabled:active,\n.gallery-list__item:hover i--disabled:hover {\n    background: transparent;\n}\n\n.gallery-list__item:active i--disabled:active,\n.gallery-list__item:hover i--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.gallery-list__action:active, .gallery-list__action:hover {\n    background: #1a355e;\n    color: #fafbfd;\n}\n\n.ms-Pivot.ms-Pivot--tabs {\n    background-color: #1a355e;\n}\n\n.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link {\n    background: #1a355e;\n    color: white !important;\n}\n\n.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:active,\n.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:hover {\n    background: #152a4a;\n    color: white !important;\n}\n\n.share__header {\n    background-color: #2b579a;\n}\n\n.share__main a {\n    color: #2b579a;\n}\n\n.share__main .pre-share .ms-Button {\n    background: #2b579a;\n}\n\n.share__main .post-share .info-panel .link-or-id {\n    color: #2b579a;\n}\n\nli.gallery__tab.ms-Pivot-link.is-selected.gallery__tab--active,\nli.tabs__tab.ms-Pivot-link.is-selected.tabs__tab--active {\n    background-color: #1a355e;\n    color: #fafbfd;\n}\n\n.view__header {\n    background-color: #2b579a;\n}\n\n.view-bar__command {\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.view-bar__command:active, .view-bar__command:hover {\n    background: #2b579a;\n    color: #fafbfd;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.view-bar__command:active {\n    background: #2b579a;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.view-bar__command--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.view-bar__command--disabled:active, .view-bar__command--disabled:hover {\n    background: transparent;\n}\n\n.view-bar__command--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.view-bar__command:active, .view-bar__command:hover, .view-bar__command i:active,\n.view-bar__command i:hover {\n    background: #1a355e;\n    color: #fafbfd;\n}\n"}});
//# sourceMappingURL=2.chunk.js.map