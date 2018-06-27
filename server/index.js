const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messagesCtrl = require('./controllers/messages_controller');

const PORT = 3000;

app.use(express.static('./public/build'));
app.use(bodyParser.json());

app.get('/api/messages', messagesCtrl.read);
app.post('/api/messages', messagesCtrl.create);
app.put('/api/messages/:id', messagesCtrl.update);
app.delete('/api/messages/:id', messagesCtrl.delete);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});