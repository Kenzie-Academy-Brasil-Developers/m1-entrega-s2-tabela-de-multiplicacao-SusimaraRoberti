function multi(n) {
  let tabela = [];
  for (let i = 0; i <= n; i++) {
    tabela[i] = [];
    for (let j = 0; j <= n; j++) {
      tabela[i].push(i * j);
    }
  }
  return tabela;
}
console.table(multi(10));
