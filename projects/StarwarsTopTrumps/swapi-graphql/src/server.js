const app = require('./service');
const port = 5000;
app.set('port', process.env.PORT || port);

// Listen for incoming HTTP requests
const listener = app.listen(app.get('port'), () => {
  let host = listener.address().address;
  if (host === '::') {
    host = 'localhost';
  }
  // eslint-disable-next-line no-console
  console.log('Listening at http://%s%s', host, port === 80 ? '' : ':' + port);
});
