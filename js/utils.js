/*  
    സ്വതന്ത്ര സ്വകാര്യതാനയം ജനറേറ്റർ: നിങ്ങളുടെ വെബ്സൈറ്റിന് മലയാളത്തിൽ സ്വകാര്യതാനയം ജനറേറ്റ് ചെയ്യാൻ വേണ്ടിയുള്ള സൗജന്യ വെബ് ആപ്പ്
    
    Copyright 2022 ഡിജിറ്റൽ മലയാളി, നിഷാന്ത് ശ്രീവാസ്തവ

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

function convertHtmlToMd(html) {
  let markdown = toMarkdown(html, {
    converters: [{
      filter: 'div',
      replacement: function (content) {
        return content
      }
    }]
  })
  return markdown
}

function getRawHTML(content, title) {
  let html =
    "<!DOCTYPE html>\n\
    <html>\n\
    <head>\n\
      <meta charset='utf-8'>\n\
      <meta name='viewport' content='width=device-width'>\n\
      <title>" +
    title +
    "</title>\n\
      <style> body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding:1em; } </style>\n\
    </head>\n\
    <body>\n\
    " +
    content +
    '\n\
    </body>\n\
    </html>\n\
      '
  return html
}

function getContent(id) {
  var content = document.getElementById(id)
  return content.innerHTML
}

function getTitle(id) {
  var content = document.getElementById(id)
  var title = content.getElementsByTagName('strong')[0]
  return title.innerHTML
}

function loadInTextView(id, content) {
  document.getElementById(id).value = content
}
