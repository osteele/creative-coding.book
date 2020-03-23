In order for a browser to display your project, it needs to request pages from a
*web server* that has access to your project’s files. During *development*, these
files are on your laptop, and you are using a tool such as the Visual Studio
Code extension Live Server to serve them to a Chrome, Safari, or another web
browser.

This technique — running a server on your laptop — doesn’t work when your laptop
is closed, or not on the web. It also doesn’t allow you to serve files to
someone outside your Local Area Network (LAN) – generally, in the same house or
the same part of a campus building that you are in.

In order to make your project available to people who are distant in space or time, you need
to *publish* your files to a web server “in the cloud” (at a *data center* that has
hundreds or thousands of computers, each with a high-speed connection to the
internet).

How you do this depends on whether your project is a **static site**, or a
*dynamic site*. A static site has files (`index.html`, `sketch.js`,
`styles.css`, and some *assets* – images, movies, and video) that the web
browser uses directly. A dynamic site that needs to run code on the *server*
when a visitor interacts with your page.

All our projects so far are *static sites*. Your code runs when the user loads the
page, and (for an interactive sketch) when they interact with it, but it runs
*inside the browser*, not on the server.
