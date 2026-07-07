sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Opens the SPA page

    Browser->>Server: HTTP GET /spa
    Server-->>Browser: HTML document

    Browser->>Server: HTTP GET main.css
    Server-->>Browser: CSS file

    Browser->>Server: HTTP GET spa.js
    Server-->>Browser: JavaScript file

    Browser->>Server: HTTP GET data.json
    Server-->>Browser: JSON containing the notes

    Browser->>Browser: Renders the notes