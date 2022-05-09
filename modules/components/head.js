let base = document.createElement('base');
base.setAttribute("href", window.location.origin);
document.querySelector('head').append(base);

var meta = document.createElement('meta');
meta.setAttribute("charset", "UTF-8");
meta.setAttribute("http-equiv", "X-UA-Compatible");
meta.setAttribute("content", "IE=edge");
document.querySelector('head').append(meta);

var meta = document.createElement('meta');
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
document.querySelector('head').append(meta);

var meta = document.createElement('meta');
meta.setAttribute("name", "description");
meta.setAttribute("content", "This site helps people manage their plans for presenting games at events");
document.querySelector('head').append(meta);

var link = document.createElement('link');
link.setAttribute("rel", "apple-touch-icon");
link.setAttribute("sizes", "180x180");
link.setAttribute("href", "/images/apple-touch-icon.png");
document.querySelector('head').append(link);

var link = document.createElement('link');
link.setAttribute("rel", "icon");
link.setAttribute("type", "image/png");
link.setAttribute("sizes", "32x32");
link.setAttribute("href", "/images/favicon-32x32.png");
document.querySelector('head').append(link);

var link = document.createElement('link');
link.setAttribute("rel", "icon");
link.setAttribute("type", "image/png");
link.setAttribute("sizes", "16x16");
link.setAttribute("href", "/images/favicon-16x16.png");
document.querySelector('head').append(link);

var link = document.createElement('link');
link.setAttribute("rel", "manifest");
link.setAttribute("href", "/manifest.json");
document.querySelector('head').append(link);

var link = document.createElement('link');
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "/styles/vendor/remedy.css");
document.querySelector('head').append(link);

var link = document.createElement('link');
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "/styles/vendor/reminders.css");
document.querySelector('head').append(link);

var link = document.createElement('link');
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "/styles/style.css");
document.querySelector('head').append(link);

