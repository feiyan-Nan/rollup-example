let Scope = require('./scope');
let globalScope = new Scope({ name: 'global', names: [], parent: null });
let oneScope = new Scope({ name: 'one', names: ['b'], parent: globalScope });
let twoScope = new Scope({ name: 'two', names: ['c'], parent: oneScope });

console.log(twoScope.findDefiningScope('a'));
// console.log(
//     threeScope.findDefiningScope('a').name,
//     threeScope.findDefiningScope('b').name,
//     threeScope.findDefiningScope('c').name)
