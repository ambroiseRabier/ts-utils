/**
 * Code bellow to get the list.
 *
 * https://www.w3schools.com/tags/att_input_type.asp
 * var c =$('#main > table.w3-table-all.notranslate > tbody');
 * Array.prototype.slice.call(c.getElementsByTagName('tr')).map(e => e.children[0].innerText).splice(1).map(e => `'${e}'`).join(' | ');
 */
export type HtmlInputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
