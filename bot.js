var HTTPS = require('https');
var cool = require('cool-ascii-faces');
var fs = require('fs');
var readMe = fs.readFileSync('homework.txt', 'utf8');
var writeMe = fs.writeFile('homework.txt', readMe);
var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;
      botRegexKys = /^\/kys/;
      botRegexRoasted = /^\/roasted/;
      botRegexHelp = /^\/help/;
      botRegexSayreville = /^\/sayreville/;
      botRegexInfo = /^\/info/;
      botRegexWhat = /^\/what/;
      botRegexPing = /^\/ping/;
      botRegexShrug = /^\/shrug/;
      botRegexRight = /^\/amirite/;
      botRegexProcrastination = /^\/procrastination/;
      botRegexHw = /^\/hw/;
      botRegexSethw = /^\/sethw/;
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  } 
  else if(request.text && botRegexRoasted.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.tenor.com/images/6c26eb787cf05133783ac236b2fca0ca/tenor.gif");
    this.res.end();
  }
  else if(request.text && botRegexHelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Hi I am M3KO Bot, created by Mueez Khan! Here's a list of things you can do: /help, /info /roasted, /kys, /sayreville, /what, /ping, /shrug, /procrastination, /amirite - And more to come! Request Mueez for more commands!");
    this.res.end();
  }
  else if(request.text && botRegexSayreville.test(request.text)) {
    this.res.writeHead(200);
    postMessage("sayrevillek12.net");
    this.res.end();
  }
  else if(request.text && botRegexInfo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I am M3KO Bot, scripted by Mueez Khan. If you want to know more about Mueez's creations, visit: https://m3komk.wixsite.com/m3ko");
    this.res.end();
  }
  else if(request.text && botRegexWhat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.tenor.com/images/bf4c9a934f193ef60c253dfdd95df98e/tenor.gif");
    this.res.end();
  }
  else if(request.text && botRegexPing.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Pong!");
    this.res.end();
  }
  else if(request.text && botRegexShrug.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.tenor.com/images/dc8da26e465a52560873633e5f1883d0/tenor.gif");
    this.res.end();
  }
  else if(request.text && botRegexProcrastination.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.tenor.com/images/447da17272e5e9f441b9c01f1a887271/tenor.gif");
    this.res.end();
  }
  else if(request.text && botRegexRight.test(request.text)) {
    this.res.writeHead(200);
    postMessage("ye u rite");
    this.res.end();
  }
  else if(request.text && botRegexSethw.test(request.text)) {
    this.res.writeHead(200);
    var written = botRegexSethw.slice(6);
    fs.writeFile("homework.txt", written);
    postMessage("File written!");
    this.res.end();
  }
  else if(request.text && botRegexHw.test(request.text)) {
    this.res.writeHead(200);
    postMessage(readMe);
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
