var path = require("path"),
    express = require("express"),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    PORT = process.env.PORT || 3000,
    VIEWS_DIR = path.join(__dirname, "views"),
    env = process.env.NODE_ENV || 'development',
    config = require(`${__dirname}/config` )[env],
    app = express();

// Serving the files on the views folder
app.use(express.static(VIEWS_DIR));
app.use("/public", express.static(__dirname + '/public'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Log requests to the console.
app.use(logger('dev'));

var Sequelize = require('sequelize');
const sequelize = new Sequelize(
  config.db_name,
  config.db_user,
  config.db_pass, 
  {
    host: config.db_host,
    dialect: 'mysql',
    port: config.db_port,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
  }
});

sequelize.sync().then(function (){
  var models = require('./models')(sequelize);
  // Send home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(VIEWS_DIR, "index.html"));
  });

  app.get("/ask", function (req, res) {
    res.sendFile(path.join(VIEWS_DIR, "ask.html"));
  });

  // Set routes and methods
  require('./controllers')(app, models);
})

app.listen(PORT, function() {
  console.log('Listening to Port: ' + PORT);
});