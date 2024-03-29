module.exports = (target, ...sources) => {

  const lookupArray = Array.from(sources).reverse().concat([target]);
  const findSourceOf = key =>
    lookupArray.find(_ => _?.hasOwnProperty?.(key) && _) ?? // First look in own properties
    lookupArray.find(_ => typeof _?. [key] !== typeof undefined); // then in all properties

  function get(target, key) {
    const source = findSourceOf(key) || target;
    return source[key];
  }

  function set(target, key, value) {
    const source = findSourceOf(key) || target;
    source[key] = value;
    return true;
  }

  return new Proxy(target, { get, set });
};
