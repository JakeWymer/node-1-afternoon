let id = 0;
let messages = [];

module.exports = {
  create: (req, res) => {
    messages.push({id: id, text: req.body.text, time: req.body.time});
    id += 1;
    res.send(messages);
  },
  read: (req, res) => {
    res.send(messages);
  },
  update: (req, res) => {
    let message = messages.find(message => message.id === parseInt(req.params.id));
    message.text = req.body.text;
    res.send(messages);
  },
  delete: (req, res) => {
    let index = messages.findIndex(message => message.id === parseInt(req.params.id));
    messages.splice(index, 1);
    res.send(messages);
  }
}