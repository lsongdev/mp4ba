const mp4ba = require('..');
const assert = require('assert');

(async () => {

  const list = await mp4ba();
  assert.ok(list);
  assert.ok(Array.isArray(list));
  assert.ok(list.length);

  const item = list[0];
  assert.ok(item.name);
  assert.ok(item.img);
  assert.ok(item.director);

})();