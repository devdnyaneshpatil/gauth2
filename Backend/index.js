const express=require("express")
const { passport } = require("./auth");

const app=express()

app.get("/",(req,res)=>{
  res.send()
})

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log(req.user);
    res.redirect("/");
  }
);

app.listen(8080,()=>{
    try {
        console.log("connected to the server")
    } catch (error) {
        console.log(error.message)
    }
})