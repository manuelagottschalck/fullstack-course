sequence diagram

User-->Browser: Clicks the Submit button
Browser-->Server: HTTP Post new_note
Server-->Browser: Status 302
Browser-->Server: HTTP Get /notes
Server-->Browser: HTML of the page
Browser-->Server: HTTP Get main.css
Server-->Browser: main.css

Browser-->Server: HTTP Get main.js
Server-->Browser: main.js

Browser-->Server: HTTP Get data.json
Server-->Browser: data.json

Browser: reloads page