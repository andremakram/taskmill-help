Scripts
=======

## Push code to GitHub

<code git-src='https://github.com/a7medkamel/taskmill-help/blob/master/intro/helloworld.js'></code>

[github]: http://github.com/

## Replace a file's **github.com** url by **github.run**

```bash
# github.com
     https://github.com/a7medkamel/taskmill-help/blob/master/intro/helloworld.js
# becomes github.run
curl https://github.run/a7medkamel/taskmill-help/blob/master/intro/helloworld.js
#            ~~~~~~~~~~
```


> Public repositories are runnable by anyone.

## Input

Your script is an [express] endpoint. The function's signature is `(req, req, next)`. All data posted or streamed to the script is available on your req object. Same goes for `query` parameters.

### Request Body
<code git-src='https://github.com/a7medkamel/taskmill-help/blob/master/intro/req-body.js'></code>
> Express req.body [express:req.body]

### Request Query String
<code git-src='https://github.com/a7medkamel/taskmill-help/blob/master/intro/req-query.js'></code>
> Express req.query [express:req.query]

[express]: http://expressjs.com/
[express:req.body]: http://expressjs.com/4x/api.html#req.body
[express:req.query]: http://expressjs.com/4x/api.html#req.query

# Services

We provide built in services that you can make use of. Such services include Email, SMS, and Automated Phone Calls.

## Email

You can send emails directly from our servers.

<code git-src='https://github.com/a7medkamel/taskmill-help/blob/master/services/email.js'></code>

## SMS

You can send sms directly from our servers.


<code git-src='https://github.com/a7medkamel/taskmill-help/blob/master/services/sms.js'></code>


## MongoDB

Each repository gets a 16mb MongoDB

<code git-src='https://github.com/a7medkamel/taskmill-help/blob/master/services/mongodb.js'></code>

## Cron

You can schedule your scripts to automaticaly run using our cron infrastructure.

Add a `.crontab` file to the root of your repository.

The `.crontab` file in https://github.com/a7medkamel/taskmill-help/blob/master/.crontab will run the helloworld.js script every minute.

The cron format is standard, but is limited to `curl` commands.

```bash
*/1 * * * * curl 'https://github.run/a7medkamel/taskmill-help/blob/master/helloworld.js'
```

# Auth Tokens

You can create `Tokens` using the User Interface. When logged in, select your profile picture on the top right corner, then select settings.

On the settings page click `Create New Key`.

> We do not store keys in our backend. If you forgot a key, you must create a new one.

Send your token in the `Authorization` header with the value `bearer YOUR_TOKEN`.

# Advanced

## Manual
Each script *can* define a usage manual as a comment block. The manual is used to describe variouse aspects of the script's execution.

```javascript
/*
@title Hello World!
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from TaskMill"
}
*/
```

You can define input and output contrainsts as well as additional metadata.

| attribute           | usage                                                                                 |
|----------------     |---------------------------------------------------------------------------------------|
| @title              | Human readable title                                                                  |
| @description        | Detailed description of this endpoint                                                 |
| @readme             | URL to a readme                                                                       |
| @input              | JSON with input `content-type` and `example`                                          |
| ↳ content-type      | `text/plain` or `application/json` ...                                                |
| ↳ example           | "Example input to assist new users"                                                   |
| @output             | JSON object                                                                           |
| ↳ content-type      | `text/plain` or `image/png` ...                                                       |
| @pragma             | Add hints to script execution and response                                            |
| ↳ editor append     | `@pragma editor replace` instructs editor plugin to replace selection with result     |
| ↳ editor replace    | `@pragma editor append` instructs editor plugin to append result                      |
| ↳ stream            | `@pragma stream` disables body parser leaving req as stream                           |


## Content Type

You can set the content-type header either programaticaly or through the scripts manual.

### Programaticaly

<code git-src='https://github.com/a7medkamel/taskmill-help/blob/master/intro/content-type.js'></code>

### Manual
<code git-src='https://github.com/a7medkamel/taskmill-help/blob/master/manual/output.js'></code>