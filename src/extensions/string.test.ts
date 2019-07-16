import './string';

test('whiteList', () => {
  const str1 = '1g2k';
  const result = str1.whiteList(/\d+/g);
  expect(result).toBe('12');


  const result2 = str1.whiteList(/\.+/g);
  expect(result2).toBe('');
});

test('toUrl', () => {
  const str1 = 'D2.--é:&m';
  const expected = 'd2-em';
  expect(str1.toUrl()).toBe(expected);
});

test('removeDiacritics', () => {
  const str1 = 'éàèùâôûîêÂÊÛÔÎ';
  const expected = 'eaeuaouieAEUOI';
  expect(str1.removeDiacritics()).toBe(expected);
});

test('lowerCaseFileExtension', () => {
  const str1 = 'test.PNG';
  const expected = 'test.png';
  expect(str1.lowerCaseFileExtension()).toBe(expected);


  const str2 = 'test';
  const expected2 = 'test';
  expect(str2.lowerCaseFileExtension()).toBe(expected2);
});
