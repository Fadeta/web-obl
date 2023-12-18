const { google } = require('googleapis');
const fs = require('fs');

const credentials = require('./path/to/your/credentials.json');
const token = require('./path/to/your/token.json'); // Kredensial OAuth 2.0

const client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uris[0]
);

client.setCredentials(token);

const drive = google.drive({ version: 'v3', auth: client });

const fileMetadata = {
  name: 'example.txt',
  parents: ['<Your_Folder_ID>'], // ID folder tujuan di Google Drive
};

const media = {
  mimeType: 'text/plain',
  body: fs.createReadStream('path/to/local/file.txt'),
};

drive.files.create({
  resource: fileMetadata,
  media: media,
  fields: 'id',
}, (err, file) => {
  if (err) {
    console.error('Error uploading file to Google Drive:', err);
  } else {
    console.log('File ID:', file.data.id);
  }
});
