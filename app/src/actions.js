const names = [
  'Groot',
  'Rocket Racoon',
  'Starlord',
  'Nebula',
  'Drax',
  'Gamora',
  'Mantis',
];

let nameIndex = 1;

export function setWhoIAm() {
  return dispatch => {
    dispatch({
      type: 'IAM_INIT',
    });

    setTimeout(() => {
      dispatch({
        type: 'IAM',
        payload: names[++nameIndex % names.length],
      });
    }, 5000);
  };
}
