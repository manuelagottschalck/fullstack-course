sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Writes a note and clicks Save

    Browser->>Browser: Creates the note object

    Browser->>Server: HTTP POST /new_note_spa
    Server-->>Browser: HTTP 201 Created

    Browser->>Browser: Updates the notes list