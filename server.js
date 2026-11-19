require("dotenv").config();
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

app.use(passport.initialize());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

let user = null;

passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "http://localhost:3001/callback",
    },
    (accessToken, refreshToken, profile, next) => {
      console.log("Access token", accessToken);
      console.log("Profile", profile);
      next(null, profile);
    }
  )
);

app.get("/", (req, res) => {
  res.send("<button> <a href='/login'>Login with Google</a> </button>");
});

app.get("/login", passport.authenticate("google", { scope: ["profile"] }));

app.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    session: false,
  }),
  (req, res) => {
    user = req.user;
    res.redirect("/profile");
  }
);

app.get("/failure", (req, res) => {
  res.send("Failure");
});

app.get("/profile", (req, res) => {
  res.send(user);
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
