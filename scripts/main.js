/*
 *@source: https://github.com/jacobthehammer/isyourfriendaweeb/tree/scripts
 *@license: https://www.gnu.org/licenses/gpl.txt
 *Copyright (c) 2018 Jacob A. Hemmerich
 *https://www.hemmerich.co/
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

// passes inputs from index.html to server.js

// Get string of steam id, steamID64, or profile name (we'll handle parsing it in server.js)

var steamID = function (field, url) {
  var href = url || window.location.href
  // regex to only allow numbers, letters, and spaces in a steamID
  var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i')
  var steamID = reg.exec(href)
  return steamID ? steamID[1] : null
}
console.log = 'Sending steamID' + steamID + 'to server'
steamID.send()
var IsWeeb = function (Get) {
  document.getElementById('IsWeeb').innerHTML = new IsWeeb().IsWeebString()
}
