function run(argv) {
  const Things = Application("Things3");

  // When ToDos are added from Apple Watch, they end up with a null
  // creationDate. We could just ignore them, but better than that, we stamp them
  // with a creationDate the first time we notice, so they'll get old eventually
  // if they're never completed.
  Things.toDos()
    .filter(t => !t.creationDate())
    .forEach(t => (t.creationDate = new Date()));

  const projectIDs = new Set(Things.projects.id());
  const isNotProject = t => !projectIDs.has(t.id());
  const byDate = (a, b) => a.creationDate() - b.creationDate();
  const isOpen = t => t.status() == "open";
  const isNotScheduled = t => !t.activationDate();
  const somedayIDs = new Set(
    Things.lists.byId("TMSomedayListSource").toDos.id()
  );
  const isNotSomeday = t => !somedayIDs.has(t.id());

  const todos = Things.toDos()
    .filter(isOpen)
    .filter(isNotProject)
    // .filter(isNotScheduled)
    .filter(isNotSomeday);
  // .sort(byDate);

  // const millisToDays = millis => Math.floor(millis / 1000 / 60 / 60 / 24);
  // const sum = numbers =>
  //   numbers.reduce(function(a, b) {
  //     return a + b;
  //   });
  // const avg = numbers => sum(numbers) / numbers.length;

  return JSON.stringify(todos.map(td => td.creationDate()));
}
