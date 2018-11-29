/*
 *@source: https://github.com/jacobthehammer/isyourfriendaweeb/tree/scripts
 *@license: https://www.gnu.org/licenses/gpl.txt
 *@contact: https://www.hemmerich.co/
 *Copyright (c) 2018 Jacob A. Hemmerich
 *
 *This file is part of isyourfriendaweeb.
 *
 *isyourfriendaweeb is free software: you can redistribute it and/or modify
 *it under the terms of the GNU General Public License as published by
 *the Free Software Foundation, either version 3 of the License, or
 *(at your option) any later version.
 *
 *isyourfriendaweeb is distributed in the hope that it will be useful,
 *but WITHOUT ANY WARRANTY; without even the implied warranty of
 *MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *GNU General Public License for more details.
 *
 *You should have received a copy of the GNU General Public License
 *along with isyourfriendaweeb.  If not, see <https://www.gnu.org/licenses/>.
*/


// Node Server that queries the Steam API and returns a list of games the user owns.
var SteamApi = require('steam-api')
var express = require('express');
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

// Open server on <port>
const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
