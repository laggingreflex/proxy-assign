module.exports = (target, ...sources) => {

  const lookupArray = Array.from(sources).reverse().concat([target]);
  const findSourceOf = key => lookupArray.find(_ => _.hasOwnProperty(key) && _);

  function get(target, key) {
    const source = findSourceOf(key);
    return source[key];
  }

  function set(target, key, value) {
    const source = findSourceOf(key) || target;
    source[key] = value;
    return true;
  }

  return new Proxy(target, { get, set });
};