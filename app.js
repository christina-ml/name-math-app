var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var mathRouter = require("./routes/math");
var collatzController = require("./routes/collatz");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/math", mathRouter);
app.use("/collatz", collatzController);

app.get("/greeting/:name", (req, res) => {
	const { name } = req.params;
	const { allCaps } = req.query;

	try {
		// if name has digits
		if (name.match(/[0-9]/gi)) {
			res.status(500).json({
				message: "only letters and spaces allowed",
			});
		}
        if (!allCaps){
            res.status(200).send(`Hello ${name}`);
        } else if (allCaps.includes("true")) {
            // if has query
			res.status(200).send(`HELLO ${name.toUpperCase()}`);
		} else {
			res.status(200).send(`Hello ${name}`);
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

// Example: /Christina
app.get('/:name', (req, res) => {
  const { name } = req.params;
  res.status(200).send(`Hello ${name}`);
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
